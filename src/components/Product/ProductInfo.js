import React from "react";

function ProductInfo({ product }) {
  const { name, img, price, description, totalPrice } = product;

  return (
    <>
      <img
        className="w-full h-60 object-cover"
        // src={require(`../products/productImages/${img}.jpg`)}
        src={require(`../../products/productImages/${img}.jpg`)}
        alt="product_image"
      />
      <div className="px-6 py-4">
        <div className="flex justify-between mb-2">
          <div className="font-bold text-base">{name}</div>
          <p className="text-gray-700">
            {totalPrice ? totalPrice : price}
            <span className="mx-3">هزار تومان</span>
          </p>
        </div>
        <div>
          <span className="text-gray-600 ml-1">دسته بندی: </span>
          <span className="text-amber-500 bg-amber-100 py-1 px-5 rounded-lg">
            {description}
          </span>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
