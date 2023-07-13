import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col h-60">
      <span className="leading-10 text-2xl text-gray-600 py-10">
        صفحه مورد نظر یافت نشد ...
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

export default NotFound;
