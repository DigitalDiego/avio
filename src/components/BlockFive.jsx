import React from "react";

export default function BlockFive() {
  return (
    <div className="w-full p-[5vw] flex justify-center items-center flex-col gap-8">
      <p className="text-4xl font-bold">Stay Updated</p>
      <p>Sign up to receive offers and updates!</p>
      <div className="w-full lg:w-1/2 flex items-center gap-4 lg:gap-2 flex-col lg:flex-row">
        <input
          className="w-full lg:w-3/4 px-4 py-2 border-solid border-[1px] border-gray-400 rounded-lg outline-none bg-transparent"
          type="email"
          placeholder="Email"
        />
        <button className="w-full lg:w-auto px-4 py-2 bg-teal-600 text-gray-200 rounded-lg outline-none text-center">
          Sign Up
        </button>
      </div>
    </div>
  );
}
