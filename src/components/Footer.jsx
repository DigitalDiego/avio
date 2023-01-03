import React from "react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="w-full px-[5vw] bg-gray-800 text-gray-200 flex justify-between items-center py-[2vw]">
      <p className="text-xl font-bold">Avio</p>
      <div className="flex justify-between lg:justify-end items-center gap-8 text-lg w-1/2 lg:w-auto">
        <AiFillFacebook />
        <AiFillInstagram />
        <AiFillTwitterCircle />
        <BsPinterest />
      </div>
    </div>
  );
}
