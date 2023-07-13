import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrIncrementProduct } from "../features/buyBasket/buyBasketSlice";
import { Link } from "react-router-dom";
import Pagination from "../components/pagination";
import paginate from "../utils/paginate";

function Main() {
  const products = useSelector(state => state.buyBasket.products);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(3);

  const handlePagination = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const paginatedProducts = paginate(products, pageSize, currentPage);

  return (
    <>
      {/* products container: */}
      <div className="flex flex-wrap justify-center max-w-7xl mx-auto md:p-8">
        {/* each product item: */}
        {paginatedProducts.map(product => (
          <div
            key={product.id}
            className="w-full max-w-xs md:w-1/2 xl:w-1/4 px-2 py-2 md:px-3 md:py-5"
          >
            <div className="border rounded-3xl overflow-hidden shadow-lg text-sm">
              <img
                className="w-full h-60"
                src={require(`../products/productImages/${product.img}.jpg`)}
                alt="product_image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-base mb-2">{product.name}</div>
                <p className="text-gray-700">
                  {product.price}
                  <span className="mx-3">هزار تومان</span>
                </p>
              </div>
              <div className="flex justify-center items-center mb-5">
                {product.count ? (
                  <Link
                    to="/buy-basket"
                    className="py-2 px-10 bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white transition ease-in duration-200 text-center font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                  >
                    تکمیل سبد خرید
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => dispatch(addOrIncrementProduct(product))}
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                  >
                    افزودن به سبد خرید
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        onClick={handlePagination}
        length={products.length}
        pageSize={pageSize}
        currentPage={currentPage}
      />
    </>
  );
}

export default Main;
