import axios from 'axios'
import React from 'react'
import NewsCard from '../components/NewsCard'

export default function NewsDetails({ id, res }) {
  console.log(res.data)
  return (
    <div>
      {' '}
      <div className=" gap-5 flex flex-col">
        {res.data.map((e) => (
          <NewsCard e={e} />
        ))}
      </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  const id = context.params.category
  const res = await axios.get(`http://api.mediastack.com/v1/news?access_key=bf233d81708bafc03de7e806386325d2&sources=${id}`)

  return {
    props: {
      id,
      res: res.data,
    },
  }
}
