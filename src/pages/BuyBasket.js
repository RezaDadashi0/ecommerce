import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import Product from "../components/Product";

function BuyBasket() {
  const allProducts = useSelector(state => state.buyBasket.products);
  // products that has count grater than zero means selected by user:
  const selectedProducts = allProducts.filter(p => p.count > 0);


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
                  <Product product={product} productActionType="INCREMMENT_OR_REMOVE" />
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
