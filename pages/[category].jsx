import axios from "axios";
import React from "react";
import NewsCard from "../components/NewsCard";

export default function NewsDetails({ id, res }) {
  return (
    <div>
      <div className="  flex flex-col">
        {res.articles.map((e) => (
          <NewsCard e={e} />
        ))}
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
