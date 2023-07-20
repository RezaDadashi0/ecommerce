import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Product from "../components/Product";

function ShowProduct() {
  const products = useSelector(state => state.buyBasket.products);

  const navigate = useNavigate();

  // give prodct id in the url:
  const { id } = useParams();

  // find product that has the id in the url:
  const product = products.find(p => p.id === id);

  return (
    <>
      {product ? (
        <div className="w-full max-w-lg mx-auto px-2 py-2 md:px-3 md:py-5 mt-7">
          <Product product={product} productActionType="ADD" />
        </div>
      ) : (
        navigate("/not-found")
      )}
    </>
  );
}

export default ShowProduct;
