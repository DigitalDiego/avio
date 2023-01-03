import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";

export default function Navbar() {
  const [navBtn, setNavBtn] = useState(false);

  const handleNavBtn = () => {
    setNavBtn(!navBtn);
  };
  const cn = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
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
        <div className="w-full h-[10vh] flex justify-between items-center 2xl:max-w-7xl 2xl:mx-auto">
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
          <button
            className="text-gray-200 text-lg lg:hidden"
            onClick={handleNavBtn}
          >
            <AiOutlineMenu />
          </button>
        </div>
        <div className="w-full h-[70vh] grid place-items-center 2xl:max-w-7xl 2xl:mx-auto">
          <div className="flex justify-center items-center flex-col gap-2 text-gray-200">
            <p className="text-5xl font-bold text-center">
              Plan your dream vacation
            </p>
            <p className="text-lg">You worked hard now it time to relax</p>
            <IoIosArrowDown className="text-lg" />
          </div>
        </div>
      </div>
      <div
        className={cn(
          "lg:hidden fixed top-0 right-0 z-[4000] w-full h-screen bg-gray-800 duration-[.8s]",
          navBtn ? "translate-x-0" : "translate-x-[100%]"
        )}
      >
        <div className="w-full h-[10vh] px-[5vw] flex justify-end items-center">
          <button className="text-lg text-gray-200" onClick={handleNavBtn}>
            <AiOutlinePlus className="rotate-45" />
          </button>
        </div>
        <div className="w-full h-[90vh] flex justify-evenly items-center flex-col text-gray-200">
          <a className="text-xl hover:underline" href="#">
            How It Works
          </a>
          <a className="text-xl hover:underline" href="#">
            Trip Types
          </a>
          <a className="text-xl hover:underline" href="#">
            Shop
          </a>
          <a className="text-xl hover:underline" href="#">
            About
          </a>
          <button className="bg-teal-600 px-4 py-2 rounded-lg text-gray-200 text-lg">
            Book You Vacation
          </button>
        </div>
      </div>
    </div>
  );
}
