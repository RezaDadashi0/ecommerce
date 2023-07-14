import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Slider() {
  const products = useSelector(state => state.buyBasket.products);

  const [product, setProduct] = useState(products[0]);
  const [count, setCount] = useState(0);

  // create indecators equl to the number of products:
  const [indecators] = useState(products);

  const handleSliderIndecator = (product, i) => {
    setProduct(product);
    setCount(i);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 22) {
        setCount(0);
        setProduct(products[count]);
      } else {
        setCount(count + 1);
        setProduct(products[count]);
      }
    }, 2200);
    return () => clearInterval(interval);
  }, [count]);

  let activeIndecator =
    "w-2.5 h-2.5 rounded-full mx-[2px] my-4 border border-indigo-500 cursor-pointer bg-indigo-600 hover:bg-indigo-700 transition ease-in duration-100 shadow-md";

  let pasiveIndecator =
    "w-2.5 h-2.5 rounded-full mx-[2px] my-4 border border-indigo-500 cursor-pointer bg-white hover:bg-gray-100 transition ease-in duration-100 shadow-md";

  return (
    <>
      <Link to={`/products/${product.id}`}>
        <div className="relative border rounded-3xl w-full max-w-3xl my-5 md:w-4/5 mx-auto h-[300px]">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={require(`../products/productImages/${product.img}.jpg`)}
            alt="product_image"
          />
        </div>
      </Link>
      <ul className="flex items-center justify-center -mt-5">
        {/* indecators and indecator are actually products and product */}
        {indecators.map((indecator, i) => (
          <li
            onClick={() => handleSliderIndecator(indecator, i)}
            key={i}
            className={
              product === indecator ? activeIndecator : pasiveIndecator
            }
          ></li>
        ))}
      </ul>
    </>
  );
}

export default Slider;
