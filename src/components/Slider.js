import React, { useState } from "react";

function Slider() {
  const [sliderIndecator, setSliderIndecator] = useState(8);
  const [indecators] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23,
  ]);

  const handleSliderIndecator = IndecatorNumber => {
    setSliderIndecator(IndecatorNumber);
  };

  let activeIndecator =
    "w-3 h-3 rounded-full mx-1 my-4 border border-indigo-500 cursor-pointer bg-indigo-600 hover:bg-indigo-700 transition ease-in duration-100 shadow-md";

  let pasiveIndecator =
    "w-3 h-3 rounded-full mx-1 my-4 border border-indigo-500 cursor-pointer bg-white hover:bg-gray-100 transition ease-in duration-100 shadow-md";

  return (
    <>
      <div className="relative border rounded-3xl w-full max-w-3xl my-5 md:w-4/5 mx-auto h-[300px]">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src={require(`../products/productImages/productImg__${sliderIndecator}.jpg`)}
          alt="product_image"
        />
      </div>
      <ul className="flex items-center justify-center -mt-5">
        {indecators.map((indecator, i) => (
          <li
            onClick={() => handleSliderIndecator(i + 1)}
            key={indecator}
            className={
              sliderIndecator === i + 1 ? activeIndecator : pasiveIndecator
            }
          ></li>
        ))}
      </ul>
    </>
  );
}

export default Slider;
