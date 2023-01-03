import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="relative w-full h-[80vh]">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1554107136-57b138ea99df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="san francisco"
        />
      </div>
      <div className="absolute top-0 right-0 w-full h-full px-[5vw] bg-[#111]/50">
        <div className="w-full h-[10vh] flex justify-between items-center">
          <p className="text-2xl font-bold text-gray-200">Avio</p>
          <div className="w-3/4 hidden lg:flex justify-end items-center gap-10 text-gray-200">
            <a href="#">How It Works</a>
            <a href="#">Trip Types</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <button className="bg-teal-600 px-4 py-2 rounded-lg text-gray-200">
              Book You Vacation
            </button>
          </div>
        </div>
        <div className="w-full h-[70vh] grid place-items-center">
          <div className="flex justify-center items-center flex-col gap-2 text-gray-200">
            <p className="text-5xl font-bold text-center">
              Plan your dream vacation
            </p>
            <p className="text-lg">You worked hard now it time to relax</p>
            <IoIosArrowDown className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
