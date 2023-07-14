import React from "react";
import { useSelector } from "react-redux";

function BuyCompletion() {
  const allProducts = useSelector(state => state.buyBasket.products);
  // products that has count grater than zero means selected by user:
  const selectedProducts = allProducts.filter(p => p.count > 0);

  const totalReciptPriceArray = selectedProducts.map(
    product => product.totalPrice
  );

  const totalReciptPrice = totalReciptPriceArray.reduce((a, s) => a + s);

  return (
    <div className="md:flex max-w-5xl border border-transparent justify-around md:my-5 p-5 mx-auto text-sm">
      <div className="flex flex-col justify-center items-center border rounded-3xl w-full md:w-5/12 p-5 my-5">
        <h6 className="pb-5 font-bold text-base">فاکتور نهایی خرید</h6>
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
      <div className="border rounded-3xl w-full md:w-5/12 p-5 my-5"></div>
    </div>
  );
}

export default BuyCompletion;
