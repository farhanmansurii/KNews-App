import BottomNavbar from "../components/BottomNavbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="">
      {" "}
      <div className="">
        <Component {...pageProps} />
        <BottomNavbar />
      </div>
    </div>
  );
}
