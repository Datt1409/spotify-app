import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <h1 className="font-black text-xl pl-7">Today Choice</h1>
      <div className="flex items-center pt-2 pl-8 justify-between">
        <p className="text-sm text-gray-400">10 Albums</p>
        <div className="flex justify-between mr-10 w-16">
          <AiOutlineLeft />
          <AiOutlineRight />
        </div>
      </div>

      {/* card */}
      <div>
        
      </div>
    </>
  );
}
