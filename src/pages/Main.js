import React, { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/pagination";
import paginate from "../utils/paginate";
import Categori from "../components/Categori";
import Slider from "../components/Slider";
import Product from "../components/Product";

function Main() {
  // --------------- Redux Toolkit Section: ---------------

  const products = useSelector(state => state.buyBasket.products);

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
    setCurrentPage(1);

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
      <div className="flex flex-wrap justify-center max-w-7xl mx-auto py-1 md:px-8">
        {/* each product item: */}
        {paginatedProducts.map(product => (
          <div
            key={product.id}
            className="w-full max-w-xs md:w-1/2 xl:w-1/4 px-2 py-2 md:px-3 md:py-5"
          >
              <Product product={product} productActionType="ADD" />
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
