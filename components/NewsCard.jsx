import React from 'react'

export default function NewsCard({ e }) {
  return (
    <div className=" mx-auto shadow-sm p-3 rounded-2xl w-full lg:w-[800px] hover:scale-[99%] duration-150 flex gap-5">
      <div>
        <img className="rounded-xl min-w-[100px] max-w-[100px] lg:min-w-[300px] lg:max-w-[300px]  aspect-video border-[1px] border-gray-200" src={e.image} />
      </div>
      <div className=" gap-2 flex  flex-col p-2">
        <div className=" text-xs lg:text-sm uppercase font-semibold bg-[#01303f] w-fit px-3 py-1 text-white rounded-full">{e.category}</div>
        <div className=" text-md font-semibold lg:text-md">{e.title}</div>
        {/* <div className="flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="w-6 rounded-full h-6"
          />
          <div>{e.author}</div>
        </div> */}
      </div>
    </div>
  )
}
