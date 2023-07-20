import React from "react";
import ProductInfo from "./ProductInfo";
import ProductAction from "./ProductAction";

function Product({ product, productActionType }) {
  return (
    <div className="border rounded-3xl overflow-hidden shadow-lg text-sm">
      {/* product info stands in the top of the product cart: */}
      <ProductInfo {...{ product }} />
      {/* product action satnds in the bottom of the pruduct cart: */}
      <ProductAction product={product} productActionType={productActionType} />
    </div>
  );
}

export default Product;
