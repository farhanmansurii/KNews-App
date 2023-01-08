import { Inter } from "@next/font/google";
import axios from "axios";
import NewsCard from "../components/NewsCard";
const inter = Inter({ subsets: ["latin"] });
const ApiURL =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=e3a25fa08cb84dcba582a695240cc8ce";
export default function Home({ res }) {
  console.log(res);
  return (
    <>
      <div className=" gap-2 flex flex-col">
        {res.articles.map((e) => e.urlToImage && <NewsCard e={e} />)}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(ApiURL);
  return {
    props: { res: res.data }, // will be passed to the page component as props
  };
}
