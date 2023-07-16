import React from "react";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function SendToAddress() {
  return (
    <div className="flex flex-col max-w-2xl border justify-around items-center rounded-3xl md:my-5 p-5 mx-auto h-72 bg-slate-100">
      <h6 className="pb-5 font-bold text-base text-lime-400">
        سفارش جهت ارسال به آدرس پستی با موفقیت ثبت گردید.
      </h6>

      <Link
        to="/"
        className="py-3 w-52 mx-auto bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white transition ease-in duration-200 text-sm font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg flex justify-around items-center"
      >
        بازگشت به لیست محصولات
        <KeyboardBackspaceIcon />
      </Link>
    </div>
  );
}

export default SendToAddress;
