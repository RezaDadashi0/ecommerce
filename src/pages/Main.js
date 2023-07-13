import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToBuyBasket } from "../features/buyBasket/buyBasketSlice";

function Main() {
  const products = useSelector(state => state.buyBasket.products);
  const dispatch = useDispatch();

  return (
    // products container:
    <div className="flex flex-wrap justify-center max-w-7xl mx-auto md:p-8">
      {/* each product item: */}
      {products.map(product => (
        <div className="w-full max-w-xs md:w-1/2 xl:w-1/4 px-2 py-2 md:px-5 md:py-5">
          <div
            className="border rounded-xl overflow-hidden shadow-lg"
            key={product.id}
          >
            <img
              className="w-full h-60"
              src={require(`../products/productImages/${product.img}.jpg`)}
              alt="product_image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <p className="text-gray-700 text-base">{product.description}</p>
            </div>
            <div className="flex justify-center items-center mb-7">
              {product.count ? (
                <button
                  type="button"
                  // onClick={() =>
                  //   dispatch(addProductToBuyBasket(product))
                  // }
                  className="py-2 px-10 bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-rose-200 text-white transition ease-in duration-200 text-center text-base font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                >
                  تکمیل سبد خرید
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => dispatch(addProductToBuyBasket(product))}
                  className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                >
                  افزودن به سبد خرید
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
