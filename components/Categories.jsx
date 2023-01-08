import Link from "next/link";
import React from "react";
const categories = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];
export default function Categories(id) {
  return (
    <div className="   lg:p-3 flex mx-auto gap-2  px-3 flex-wrap whitespace-normal ">
      {categories.map((category) => (
        <div className="border-[#1B9AAA] px-4  py-2 capitalize text-[#1B9AAA]  rounded-full  border-2  hover:bg-[#1B9AAA] hover:text-[#050401] duration-200  ">
          <Link href={`/${category}`}>{category} </Link>
        </div>
      ))}
    </div>
  );
}
