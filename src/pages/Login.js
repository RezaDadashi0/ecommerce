import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { userLogsIn } from "../features/user/userSlice";

const schema = yup
  .object()
  .shape({
    username: yup
      .string()
      .min(3, "حداقل 3 کاراکتر برای نام کاربری الزامی است")
      .required("نام کاربری نمی تواند خالی باشد!"),
    password: yup
      .string("کلمه عبور می بایست از نوع حروف باشد")
      .min(4, "حداقل 4 کاراکتر برای کلمه عبور الزامی است")
      .max(15, "کلمه عبور نمی تواند بیشتر از 15 کاراکتر باشد"),
  })
  .required();

function Login() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = data => {
    dispatch(userLogsIn(data));
  };

  const normalClassName =
    "bg-gray-100 border border-gray-300 text-center text-gray-900 outline-none placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5";
  const errorClassName =
    "bg-gray-50 border border-red-400 text-center outline-none text-sm rounded-lg focus:ring-red-500 focus:border-red-500 w-full p-2.5";

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="border shadow-lg rounded-3xl w-full max-w-sm p-10 mx-auto mt-10"
    >
      <h6 className="text-base font-bold text-center pb-7">
        ورود به حساب کاربری
      </h6>
      <div className="mb-6">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-bold text-gray-500"
        >
          نام کاربری
        </label>
        <input
          type="text"
          id="username"
          name="username"
          {...register("username")}
          className={errors.username ? errorClassName : normalClassName}
          placeholder="امیرعلی داداشی"
        />
        {errors.username && (
          <p className="text-red-500 text-xs mt-2 text-center">
            {errors.username.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-bold text-gray-500"
        >
          کلمه عبور
        </label>
        <input
          type="password"
          id="password"
          name="password"
          {...register("password")}
          className={errors.password ? errorClassName : normalClassName}
          placeholder="*******"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-2 text-center">
            {errors.password.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="py-2 w-6/12 mx-auto mt-10 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg flex justify-around items-center"
      >
        ورود
      </button>
    </form>
  );
}

export default Login;
