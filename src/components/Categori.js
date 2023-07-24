import React from "react";

export default function Categori({ categories, onClick }) {
  const categoriesTitle = [
    "همه محصولات",
    "رایگان",
    "پربازدید تدین",
    "پرفروش ترین",
    "دارای تخفیف",
    "گران ترین",
  ];
  
  return (
    <ul className="flex flex-wrap justify-center items-center pt-3 text-sm font-bold">
      {categories.map((categori, index) => (
        <li
          key={index}
          className={`border cursor-pointer rounded-lg m-1 px-8 py-2 transition ease ${
            categori.active
              ? "text-blue-500 bg-blue-100 border-blue-100"
              : "text-gray-500 hover:bg-blue-100 hover:text-blue-500"
          }`}
          onClick={() => onClick(categori)}
        >
          {categoriesTitle[index]}
        </li>
      ))}
    </ul>
  );
}
