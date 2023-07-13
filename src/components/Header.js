import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const allProducts = useSelector(state => state.buyBasket.products);
  // products that has count grater than zero means selected by user:
  const selectedProducts = allProducts.filter(p => p.count > 0);

  return (
    <header className="max-w-xl mx-auto flex justify-between pt-3">
      <div>نام کاربر</div>
      <Link to="/buy-basket">
        <span class="bg-pink-100 hover:bg-pink-200 transition ease-in duration-200 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-lg border border-pink-400">
          <span className="mx-2">سبد خرید</span>
          {selectedProducts.length}
        </span>
      </Link>
    </header>
  );
}

export default Header;
