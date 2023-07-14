import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  const allProducts = useSelector(state => state.buyBasket.products);
  // products that has count grater than zero means selected by user:
  const selectedProducts = allProducts.filter(p => p.count > 0);

  return (
    <header className="max-w-xl mx-auto flex justify-between px-5 pt-3">
      <div>نام کاربر</div>
      <Link to="/buy-basket">
        <div className="relative flex items-center">
          <span className="text-xs font-bold text-gray-500">سبد خرید</span>
          <div className="absolute px-[6px] py-[1px] -top-2 left-3 rounded-full bg-red-500 text-red-50 flex justify-center items-center text-xs">
            {selectedProducts.length}
          </div>
          <ShoppingCartIcon />
        </div>
      </Link>
    </header>
  );
}

export default Header;
