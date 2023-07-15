import React from "react";

function login() {
  return (
    <div className="border shadow-lg rounded-3xl w-full max-w-sm p-10 mx-auto mt-10">
      <h6 className="text-base font-bold text-center pb-7">
        ورود به حساب کاربری
      </h6>
      <div className="mb-6">
        <label
          for="username"
          className="block mb-2 text-sm font-bold text-gray-500"
        >
          نام کاربری
        </label>
        <input
          type="text"
          id="username"
          className="bg-gray-50 border text-center border-gray-300 text-gray-900 outline-none placeholder-gray-400 text-sm rounded-lg ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="dadashireza0@gamil.com"
        />
      </div>
      <div>
        <label
          for="password"
          className="block mb-2 text-sm font-bold text-gray-500"
        >
          کلمه عبور
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border text-center text-gray-900 outline-none placeholder-gray-400 text-sm rounded-lg ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="*******"
        />
      </div>

      <button
        type="button"
        className="py-2 w-6/12 mx-auto mt-10 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg flex justify-around items-center"
      >
        ورود
      </button>
    </div>
  );
}

export default login;
