import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrIncrementProduct } from "../features/buyBasket/buyBasketSlice";
import { Link, useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ShowProduct() {
  const products = useSelector(state => state.buyBasket.products);

  const dispatch = useDispatch();

  // give prodct id in the url:
  const { id } = useParams();

  // find product that has the id in the url:
  const product = products.find(p => p.id === id);

  return (
    <div className="w-full max-w-lg mx-auto px-2 py-2 md:px-3 md:py-5 mt-7">
      <div className="border rounded-3xl overflow-hidden shadow-lg text-sm">
        <img
          className="w-full h-60 object-cover"
          src={require(`../products/productImages/${product.img}.jpg`)}
          alt="product_image"
        />
        <div className="px-6 py-4">
          <div className="flex justify-between mb-2">
            <div className="font-bold text-base">{product.name}</div>
            <p className="text-gray-700">
              {product.price}
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
        <div className="flex justify-center items-center mb-5">
          {product.count ? (
            <Link
              to="/buy-basket"
              className="py-2 w-5/12 bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white transition ease-in duration-200 font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg flex justify-around items-center"
            >
              تکمیل سبد خرید
              <ShoppingCartIcon />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => dispatch(addOrIncrementProduct(product))}
              className="py-2 w-5/12 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg flex justify-around items-center"
            >
              افزودن به سبد خرید
              <AddShoppingCartIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowProduct;
