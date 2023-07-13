import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrIncrementProduct } from "../features/buyBasket/buyBasketSlice";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import paginate from "../utils/paginate";
import Categori from "../components/Categori";
import Slider from "../components/Slider";

function Main() {
  // --------------- Redux Toolkit Section: ---------------

  const products = useSelector(state => state.buyBasket.products);
  const dispatch = useDispatch();

  // --------------- useState Section: ---------------

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(3);
  const [search, setSearch] = useState("");
  const [categori, setCategori] = useState("");
  const [categories] = useState([
    { active: true, title: "" },
    { active: false, title: "free" },
    { active: false, title: "mostVisit" },
    { active: false, title: "mostSale" },
    { active: false, title: "hasOff" },
    { active: false, title: "mostExpensive" },
  ]);

  // --------------- Helper Methods Section: ---------------

  const handleCategori = categori => {
    setCategori(categori.title);

    const clonedCategories = [...categories];
    const indexof = clonedCategories.indexOf(categori);
    // deselect all:
    clonedCategories.map(c => (c.active = false));
    // select one:
    clonedCategories[indexof].active = true;
  };

  const handlePagination = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = e => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  // --------------- Filter, Search and Paginating Products: ---------------

  let filterdProducts = products;

  filterdProducts = categori
    ? products.filter(p => p.categori === categori)
    : // if there is no categori then we shoud asign all products as filterd products
      products;

  let searchedProducts = filterdProducts;

  if (search)
    searchedProducts = filterdProducts.filter(p => p.name.includes(search));

  const paginatedProducts = paginate(searchedProducts, pageSize, currentPage);

  return (
    <>
      {/* Slider Section */}
      <Slider />
      {/* Search Section */}
      <div className="flex max-w-xl mx-auto">
        <div className="relative w-full">
          <input
            type="search"
            autoFocus
            value={search}
            onChange={handleSearch}
            placeholder="جست و جو . . . "
            className="mt-5 p-2.5 w-full text-sm outline-indigo-500 text-gray-800 bg-gray-50 rounded-lg border border-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
      {/* Categori Section */}
      <Categori categories={categories} onClick={handleCategori} />

      {/* products container: */}
      <div className="flex flex-wrap justify-center max-w-7xl mx-auto md:py-5 md:px-8">
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
                <div className="flex justify-between mb-2">
                  <div className="font-bold text-base">{product.name}</div>
                  <p className="text-gray-700">
                    {product.price}
                    <span className="mx-3">هزار تومان</span>
                  </p>
                </div>
                <div className="text-amber-500">
                  <span className="text-gray-600 ml-2">دسته بندی: </span>
                  {product.description}
                </div>
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
      {/* Pagination Section */}
      <Pagination
        onClick={handlePagination}
        length={searchedProducts.length}
        pageSize={pageSize}
        currentPage={currentPage}
      />
    </>
  );
}

export default Main;
