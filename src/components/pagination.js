import React from "react";
import _ from "lodash";

export default function Pagination({ length, pageSize, currentPage, onClick }) {
  let pages = _.range(1, Math.ceil(length / pageSize) + 1);
  if (pages.length === 1) pages = [];

  let activeButton =
    "py-1 px-3 mx-1 my-4 cursor-pointer bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-100 text-center text-sm font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ";

  let pasiveButton =
    "py-1 px-3 mx-1 my-4 cursor-pointer bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 transition ease-in duration-100 text-center text-sm font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ";

  return (
    <ul className="flex items-center justify-center">
      {pages.map((page, i) => (
        <li
          onClick={() => onClick(i + 1)}
          key={page}
          className={currentPage === i + 1 ? activeButton : pasiveButton}
        >
          {page}
        </li>
      ))}
    </ul>
  );
}
