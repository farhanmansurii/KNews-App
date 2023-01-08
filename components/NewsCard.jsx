import React from "react";

export default function NewsCard({ e }) {
  return (
    <div className=" mx-auto  w-full lg:w-[500px] flex-col flex  bg-gray-50 p-3">
      <div>
        <img className=" aspect-video w-full " src={e.urlToImage} />
      </div>
      <div className=" gap-2 flex  flex-col ">
        <div className=" text-xs lg:text-sm bg-green-700 px-5 py-2 rounded-full text-white w-fit my-2 ">
          {e.source.name}
        </div>
        <div className=" text-md font-semibold lg:text-md">{e.title}</div>
        <div className=" text-xs lg:text-sm">{e.description}</div>

        {/* <div className="flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="w-6 -full h-6"
          />
          <div>{e.author}</div>
        </div> */}
      </div>
    </div>
  );
}
