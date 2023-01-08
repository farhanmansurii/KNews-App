import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Categories from "../components/Categories";
import NewsCard from "../components/NewsCard";

export default function NewsDetails({ id, res }) {
  const [show, setshow] = useState(false);
  return (
    <div className="capitalize">
      <Head>
        <title>{id}</title>
      </Head>
      <div className="lg:w-10/12 mx-auto py-7 font-libre">
        {show ? (
          <div className=" lg:w-10/12 mx-auto">
            <div
              className="px-4 py-2 capitalize  flex gap-3    bg-[#1B9AAA] text-[#050401] p-4 m-3 w-fit  rounded-full"
              onClick={() => setshow(!show)}
            >
              Categories{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 my-auto hover:rotate-180 duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </div>
            <Categories />
          </div>
        ) : (
          <div className=" lg:w-10/12 mx-auto">
            <div
              className="px-4 py-2 capitalize  flex gap-3    bg-[#1B9AAA] text-[#050401] p-4 m-3 w-fit  rounded-full"
              onClick={() => setshow(!show)}
            >
              Categories{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 my-auto hover:rotate-180 duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        )}
        <div className="text-4xl font-merri flex flex-wrap gap-4 lg:w-10/12 break-all mx-auto p-4 capitalize">
          {id}{" "}
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 my-auto hover:bg-[#1B9AAA] rounded-full p-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Link>
        </div>
        <div className=" grid lg:grid-cols-2 lg:w-10/12 mx-auto gap-2">
          {res.articles.map((e) => e.urlToImage && <NewsCard e={e} />)}
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const id = context.params.category;
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?category=${id}&apiKey=e3a25fa08cb84dcba582a695240cc8ce&language=en`
  );

  return {
    props: {
      id,
      res: res.data,
    },
  };
}
