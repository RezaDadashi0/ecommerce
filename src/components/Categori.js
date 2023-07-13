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

  const activeCategoriClassName =
    "border rounded-lg m-1 text-sm px-8 py-2 bg-blue-100 border-blue-100 text-blue-500";
  const nonActiveCategoriClassName =
    "border rounded-lg m-1 text-sm px-8 py-2 text-gray-500 hover:border-blue-400 hover:text-blue-400 transition ease";

  return (
    <ul className="flex flex-wrap justify-center items-center pt-3">
      {categories.map((categori, index) => (
        <li
          key={index}
          className={
            categori.active
              ? activeCategoriClassName
              : nonActiveCategoriClassName
          }
          style={{ cursor: "pointer" }}
          onClick={() => onClick(categori)}
        >
          {categoriesTitle[index]}
        </li>
      ))}
    </ul>
  );
}
