import { Inter } from '@next/font/google'
import axios from 'axios'
import NewsCard from '../components/NewsCard'
const inter = Inter({ subsets: ['latin'] })
const ApiURL = 'http://api.mediastack.com/v1/news?access_key=bf233d81708bafc03de7e806386325d2&countries=in,us&limit=20'
export default function Home({ res }) {
  console.log(res)
  return (
    <>
      <div className=" gap-5 flex flex-col">{res.data.map((e) => e.image && <NewsCard e={e} />)}</div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await axios.get(ApiURL)
  return {
    props: { res: res.data }, // will be passed to the page component as props
  }
}
