import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { userLogsOut } from "../features/user/userSlice";

function Header() {
  const allProducts = useSelector(state => state.buyBasket.products);
  const user = useSelector(state => state.user.username);

  const dispatch = useDispatch();

  // products that has count grater than zero means selected by user:
  const selectedProducts = allProducts.filter(p => p.count > 0);

  return (
    <header className="max-w-3xl mx-auto flex px-5 pt-3">
      <div className="font-bold text-base flex-1">
        <span className="text-xs text-gray-500 ml-2">کاربر: </span>
        {user}
      </div>
      <Link to="/buy-basket">
        <div className="relative flex items-center">
          <span className="text-xs font-bold text-gray-500">سبد خرید</span>
          <div className="absolute px-[6px] py-[1px] -top-2 left-3 rounded-full bg-red-500 text-red-50 flex justify-center items-center text-xs">
            {selectedProducts.length}
          </div>
          <ShoppingCartIcon />
        </div>
      </Link>
      <button className="mr-10" onClick={() => dispatch(userLogsOut(user))}>
        <span className="text-xs font-bold text-gray-500">خروج</span>
        <LogoutIcon color="error" />
      </button>
    </header>
  );
}

export default Header;
