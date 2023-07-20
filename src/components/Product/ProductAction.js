import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  addOrIncrementProduct,
  decrementProduct,
  deleteProduct,
} from "../../features/buyBasket/buyBasketSlice";

function ProductAction({ product, productActionType }) {
  const { count } = product;
  const dispatch = useDispatch();

  const productActionTypeADD = (
    <div className="flex justify-center items-center mb-5">
      {count ? (
        <Link
          to="/buy-basket"
          className="py-2 w-7/12 bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white transition ease-in duration-200 font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg flex justify-around items-center"
        >
          تکمیل سبد خرید
          <ShoppingCartIcon />
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => dispatch(addOrIncrementProduct(product))}
          className="py-2 w-7/12 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg flex justify-around items-center"
        >
          افزودن به سبد خرید
          <AddShoppingCartIcon />
        </button>
      )}
    </div>
  );

  const productActionTypeINCREMMENT_OR_REMOVE = (
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
  );

  let renderProductActionType;

  if (productActionType === "ADD")
    renderProductActionType = productActionTypeADD;
  else if (productActionType === "INCREMMENT_OR_REMOVE")
    renderProductActionType = productActionTypeINCREMMENT_OR_REMOVE;

  console.log(productActionTypeINCREMMENT_OR_REMOVE);

  return <>{renderProductActionType}</>;
}

export default ProductAction;

// <div className="border rounded-3xl text-sm overflow-hidden shadow-lg">
// <img
//   className="w-full h-60 object-cover"
//   src={require(`../products/productImages/${product.img}.jpg`)}
//   alt="product_image"
// />
// <div className="px-6 py-4">
//   <div className="flex justify-between mb-2">
//     <div className="font-bold text-base">{product.name}</div>
//     <p className="text-gray-700">
//       {product.totalPrice}
//       <span className="mx-3">هزار تومان</span>
//     </p>
//   </div>
//   <div>
//     <span className="text-gray-600 ml-1">دسته بندی: </span>
//     <span className="text-amber-500 bg-amber-100 py-1 px-5 rounded-lg">
//       {product.description}
//     </span>
//   </div>
// </div>
// </div>
