import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <div className="">
      {" "}
      <div className=" bg-[#050401] text-[#D3D0CB]">
        <NextNProgress height={3} />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
