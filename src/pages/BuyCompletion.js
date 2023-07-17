import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { resetProducts } from "../features/buyBasket/buyBasketSlice";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const phoneRegExp =
  /^(?:(?:(?:\\+?|00)(98))|(0))?((?:90|91|92|93|99)[0-9]{8})$/;

const schema = yup
  .object()
  .shape({
    remainAddress: yup.string().required("ادامه آدرس نمی تواند خالی باشد!"),
    zoneCode: yup
      .number()
      .typeError("عدد مثبت و غیراعشار وارد نمایید")
      .integer()
      .positive()
      .min(10, "کدپستی حداقل 10 رقم می باشد"),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, "شماره تماس نادرست می باشد!"),
  })
  .required();

function BuyCompletion() {
  const allProducts = useSelector(state => state.buyBasket.products);
  // products that has count grater than zero means selected by user:
  const selectedProducts = allProducts.filter(p => p.count > 0);

  const totalReciptPriceArray = selectedProducts.map(
    product => product.totalPrice
  );

  const totalReciptPrice = totalReciptPriceArray.reduce((a, s) => a + s);

  const dispatch = useDispatch();

  let navigate = useNavigate();

  // options that used in react-select:
  const [provinceOptions, setProvinceOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  // useState hook Section:
  const [province, setProvince] = useState(null);
  const [city, setCity] = useState(null);
  // this error means the province and city do not select
  const [error, setError] = useState(null);

  // Get All Provinces:
  useEffect(() => {
    const getProvinces = async () => {
      try {
        const { data } = await axios.get(
          "https://iran-locations-api.vercel.app/api/v1/states"
        );
        setProvinceOptions(
          data.map(d => ({ value: d.name, label: d.name, id: d.id }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    getProvinces();
  });

  // Get All Province Cites:
  useEffect(() => {
    if (province) {
      const getProvinceCities = async () => {
        try {
          const { data } = await axios.get(
            `https://iran-locations-api.vercel.app/api/v1/cities?state=${province.label}`
          );
          setCityOptions(
            data.cities.map(d => ({ value: d.name, label: d.name, id: d.id }))
          );
        } catch (error) {
          console.log(error);
        }
      };
      getProvinceCities();
    }
  }, [province]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = data => {
    if (province && city) {
      navigate("/buy-completion/send-to-address", { replace: true });
      dispatch(resetProducts());
      console.log({
        ...data,
        province,
        city,
      });
      setError("");
    } else {
      setError("استان و یا شهر محل سکونت خود را انتخاب نمایید");
    }
  };

  return (
    <div className="md:flex max-w-5xl border border-transparent justify-around md:my-5 p-5 mx-auto text-sm">
      <div className="flex flex-col justify-center items-center border rounded-3xl w-full md:w-5/12 p-5 my-5">
        <h6 className="mb-14 font-bold text-base">فاکتور نهایی خرید</h6>
        <ul className="flex border-b w-11/12 justify-between items-center p-2 font-bold">
          <li className="flex-1">نام محصول</li>
          <div className="flex justify-between items-center w-5/12">
            <li>تعداد</li>
            <li>مبلغ</li>
          </div>
        </ul>
        {selectedProducts.map((product, i) => (
          <ul
            key={i}
            className="flex border-b w-11/12 justify-between items-center p-2"
          >
            <li className="flex-1 text-gray-500">{product.name}</li>
            <div className="flex justify-between items-center w-5/12">
              <li>{product.count}</li>
              <li>{product.totalPrice}</li>
            </div>
          </ul>
        ))}
        <div className="flex justify-between items-center w-11/12 px-2 pt-5 font-bold">
          <h6>جمع فاکتور: </h6>
          <div className="text-red-600">
            {totalReciptPrice}
            <span className="mr-2">هزار تومان</span>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="border rounded-3xl w-full md:w-5/12 p-5 my-5"
      >
        <div className="md:flex justify-around items-center">
          <div className="w-full p-3">
            <Select
              options={provinceOptions}
              onChange={setProvince}
              isSearchable
              placeholder="استان"
              noOptionsMessage={() => "استان یافت نشد . . ."}
              styles={
                !province && {
                  control: baseStyles => ({
                    ...baseStyles,
                    borderColor: "red",
                  }),
                }
              }
            />
          </div>
          <div className="w-full p-3">
            <Select
              options={cityOptions}
              onChange={setCity}
              isSearchable
              placeholder="شهر"
              noOptionsMessage={() => "شهر یافت نشد . . ."}
              styles={
                !city && {
                  control: baseStyles => ({
                    ...baseStyles,
                    borderColor: "red",
                  }),
                }
              }
            />
          </div>
        </div>
        {error && <p className="text-red-500 text-xs text-center">{error}</p>}
        <div className="p-3">
          <input
            className="w-full p-2 h-10 border border-gray-300 rounded outline-none hover:border-gray-400 focus:border-2 focus:border-blue-500 transition placeholder:text-gray-500"
            placeholder="ادامه آدرس سکونت"
            name="remainAddress"
            {...register("remainAddress")}
          />
          {errors.remainAddress && (
            <p className="text-red-500 text-xs mt-2 text-center">
              {errors.remainAddress.message}
            </p>
          )}
        </div>
        <div className="flex justify-center items-center p-3">
          <div className="flex flex-col justify-center items-center w-6/12 ml-2">
            <input
              className="w-full p-2 h-10 border border-gray-300 rounded outline-none hover:border-gray-400 focus:border-2 focus:border-blue-500 transition placeholder:text-gray-500"
              placeholder="شماره موبایل"
              name="phoneNumber"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-2 text-center">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <div className="flex flex-col justify-center items-center w-6/12 mr-2">
            <input
              className="w-full p-2 h-10 border border-gray-300 rounded outline-none hover:border-gray-400 focus:border-2 focus:border-blue-500 transition placeholder:text-gray-500"
              placeholder="کد پستی"
              maxLength={10}
              name="zoneCode"
              {...register("zoneCode")}
            />
            {errors.zoneCode && (
              <p className="text-red-500 text-xs mt-2 text-center">
                {errors.zoneCode.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center p-3">
          <button
            type="submit"
            className="py-2.5 pr-1 w-5/12 mx-auto bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white transition ease-in duration-200 text-xs font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg flex justify-around items-center"
          >
            ارسال به آدرس پستی
            <LocationOnIcon />
          </button>
          <Link
            to="/"
            className="py-2.5 pr-1 w-5/12 mx-auto border border-lime-500 bg-lime-50 focus:ring-lime-500 hover:ring-lime-500 text-lime-500 transition ease-in duration-200 text-xs font-light shadow-md focus:outline-none focus:ring-1 hover:ring-1 rounded-lg flex justify-around items-center"
          >
            بازگشت به محصولات
            <KeyboardBackspaceIcon />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default BuyCompletion;
