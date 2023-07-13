import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const allProducts = useSelector(state => state.buyBasket.products);
  // products that has count grater than zero means selected by user:
  const selectedProducts = allProducts.filter(p => p.count > 0);
  return (
    <header className="max-w-lg mx-auto flex justify-between">
      <div>user name</div>
      <div>
        <span>سبد خرید</span>
        {selectedProducts.length}
      </div>
    </header>
  );
}

export default Header;
