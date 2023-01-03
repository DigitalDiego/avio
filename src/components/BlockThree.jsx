import React from "react";
import { IoBedSharp } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";

export default function BlockThree() {
  return (
    <div className="p-[5vw] flex justify-center items-center flex-col gap-8">
      <p className="text-4xl font-bold">Popular Bundles</p>
      <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-8 lg:gap-0">
        <div className="w-full lg:w-1/4 flex justify-start items-start flex-col gap-2 p-2 border-solid border-[1px] border-gray-400 rounded-lg">
          <div className="w-full h-[200px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="
https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="resort image"
            />
          </div>
          <p className="font-bold">Miami Beach, Florida</p>
          <div className="w-full flex justify-start items-center gap-4">
            <div className="flex items-center gap-1">
              <IoBedSharp />
              <p>2</p>
            </div>
            <div className="flex items-center gap-1">
              <AiFillDollarCircle />
              <p>75/night</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex justify-start items-start flex-col gap-2 p-2 border-solid border-[1px] border-gray-400 rounded-lg">
          <div className="w-full h-[200px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="
              https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
              alt="resort image"
            />
          </div>
          <p className="font-bold">Palm Springs, California</p>
          <div className="w-full flex justify-start items-center gap-4">
            <div className="flex items-center gap-1">
              <IoBedSharp />
              <p>3</p>
            </div>
            <div className="flex items-center gap-1">
              <AiFillDollarCircle />
              <p>100/night</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex justify-start items-start flex-col gap-2 p-2 border-solid border-[1px] border-gray-400 rounded-lg">
          <div className="w-full h-[200px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="
              https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="resort image"
            />
          </div>
          <p className="font-bold">Aspen, Colorado</p>
          <div className="w-full flex justify-start items-center gap-4">
            <div className="flex items-center gap-1">
              <IoBedSharp />
              <p>2</p>
            </div>
            <div className="flex items-center gap-1">
              <AiFillDollarCircle />
              <p>80/night</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
