import React from "react";

export default function BlockFour() {
  return (
    <div className="w-full p-[5vw] flex justify-center items-center gap-8 flex-col">
      <p className="text-4xl font-bold">Questions?</p>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-4">
        <div className="w-full flex items-center gap-4 flex-col lg:flex-row">
          <input
            className="w-full lg:w-1/2 border-solid border-[1px] border-gray-400 rounded-lg px-4 py-2 bg-transparent outline-none"
            type="text"
            placeholder="Name"
          />
          <input
            className="w-full lg:w-1/2 border-solid border-[1px] border-gray-400 rounded-lg px-4 py-2 bg-transparent outline-none"
            type="email"
            placeholder="Email"
          />
        </div>
        <textarea className="w-full px-4 py-2 rounded-lg border-solid border-[1px] border-gray-400 bg-transparent outline-none resize-none h-[300px]"></textarea>
        <button className="w-1/4 py-2 bg-teal-600 text-gray-200 rounded-lg outline-none">
          Send
        </button>
      </div>
    </div>
  );
}
