import BottomNavbar from '../components/BottomNavbar'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="">
      {' '}
      <Navbar />
      <div className="p-[4rem]">
        <Component {...pageProps} />
        <BottomNavbar />
      </div>
    </div>
  )
}
