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
export default function Categories() {
  return (
    <div className="grid gap-4  w-8/12 mx-auto grid-cols-3 ">
      {categories.map((category) => (
        <div className="bg-green-900 px-4 py-2 capitalize   rounded-full text-white w-full mx-auto">
          <Link href={`/${category}`}>{category}</Link>
        </div>
      ))}
    </div>
  );
}
