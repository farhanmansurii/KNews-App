import React from "react";

export default function NewsCard({ e }) {
  return (
    <div className=" mx-auto  flex-col flex  p-2 ">
      <div>
        <img className=" aspect-video w-full rounded-3xl" src={e.urlToImage} />
      </div>
      <div className=" gap-2 flex  flex-col border-b-[1px] border-[#DDDBCB]/60 pb-6 rounded-xl ">
        <div className=" text-xs text-[#050401] rounded-full  lg:text-sm bg-[#1B9AAA] px-5 py-2   w-fit my-3 ">
          {e.source.name}
        </div>
        <div className=" text-md font-semibold lg:text-md">{e.title}</div>
        <div className=" text-xs break-all max-w-full  lg:text-sm font-merri font-light text-[#DDDBCB]/40">
          {e.description}
        </div>

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
