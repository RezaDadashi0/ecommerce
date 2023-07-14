import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrIncrementProduct,
  decrementProduct,
  deleteProduct,
} from "../features/buyBasket/buyBasketSlice";
import { Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function BuyBasket() {
  const allProducts = useSelector(state => state.buyBasket.products);
  // products that has count grater than zero means selected by user:
  const selectedProducts = allProducts.filter(p => p.count > 0);

  const dispatch = useDispatch();

  let renderBuyBasket;

  if (selectedProducts.length > 0) {
    renderBuyBasket = // products container:
      (
        <>
          <div className="max-w-xl mx-auto text-center mt-5">
            {/* delete product from buy basket */}
            <Link
              to="/buy-completion"
              className="py-3 w-52 mx-auto bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white transition ease-in duration-200 text-sm font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg flex justify-around items-center"
            >
              تکمیل فرآیند خرید
              <ArticleIcon />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center max-w-7xl mx-auto py-5 md:px-8">
            {/* each product item: */}
            {selectedProducts.map(product => (
              <div
                key={product.id}
                className="w-full max-w-xs md:w-1/2 xl:w-1/4 px-2 py-2 md:px-3 md:py-5"
              >
                <div className="border rounded-3xl text-sm overflow-hidden shadow-lg">
                  <img
                    className="w-full h-60 object-cover"
                    src={require(`../products/productImages/${product.img}.jpg`)}
                    alt="product_image"
                  />
                  <div className="px-6 py-4">
                    <div className="flex justify-between mb-2">
                      <div className="font-bold text-base">{product.name}</div>
                      <p className="text-gray-700">
                        {product.totalPrice}
                        <span className="mx-3">هزار تومان</span>
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-600 ml-1">دسته بندی: </span>
                      <span className="text-amber-500 bg-amber-100 py-1 px-5 rounded-lg">
                        {product.description}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-5 px-3">
                    {/* delete product from buy basket */}
                    <button
                      type="button"
                      onClick={() => dispatch(deleteProduct(product))}
                      className="py-1 w-5/12 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-sm font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg flex justify-around items-center"
                    >
                      حذف از سبد
                      <DeleteOutlineIcon />
                    </button>
                    {/* increment or decrement product from buy basket */}

                    <div className="flex justify-center items-center">
                      <button
                        className="mx-auto border rounded-r-lg w-8 h-8"
                        onClick={() => dispatch(addOrIncrementProduct(product))}
                      >
                        +
                      </button>
                      <div className="mx-auto text-center leading-8 border-t border-b w-12 h-8">
                        {product.count}
                      </div>
                      <button
                        className="mx-auto border rounded-l-lg w-8 h-8"
                        onClick={() => dispatch(decrementProduct(product))}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      );
  } else {
    renderBuyBasket = (
      <div className="flex justify-center items-center flex-col h-60">
        <span className="leading-10 text-2xl text-gray-600 py-10">
          سبد خرید شما خالی است ...
        </span>
        <Link
          to="/"
          className="py-2 px-10 bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white text-sm transition ease-in duration-200 text-center font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
        >
          بازگشت به لیست محصولات
        </Link>
      </div>
    );
  }

  return <>{renderBuyBasket}</>;
}

export default BuyBasket;
