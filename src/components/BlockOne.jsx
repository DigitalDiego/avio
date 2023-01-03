import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function BlockOne() {
  return (
    <div className="p-[5vw] flex justify-center items-center flex-col gap-8 2xl:max-w-7xl 2xl:mx-auto">
      <p className="text-4xl font-bold">What does Avio do?</p>
      <p className="text-center w-full lg:w-1/2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi
        ea voluptatibus illum nobis doloribus, earum nihil. Accusamus ea animi
        quas, ad enim beatae temporibus ratione aliquam nobis, obcaecati
        molestiae. Et nostrum voluptas a, perspiciatis totam velit quisquam
        illum consequuntur, nulla voluptatem reiciendis facilis quas dolore,
        iste possimus eos dicta?
      </p>
      <p className="text-xl font-bold">What can you expect?</p>
      <p className="w-full lg:w-1/2 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam quisquam
        ea fuga rem possimus adipisci velit vel a voluptatem, porro mollitia
        consequuntur ex. Placeat repellat voluptate sit nulla ipsum aliquid
        doloremque ex iusto, animi, a eos odit. Veniam, ut enim tempore
        explicabo possimus a ducimus voluptatibus sunt natus quisquam error.
      </p>
      <p className="text-xl font-bold">Get started with your search</p>
      <div className="w-full lg:w-1/2 flex justify-between iems-center">
        <button className="px-4 py-2 bg-teal-600 text-gray-200 rounded-lg">
          International
        </button>
        <button className="px-4 py-2 bg-teal-600 text-gray-200 rounded-lg">
          Domestic
        </button>
        <button className="px-4 py-2 bg-teal-600 text-gray-200 rounded-lg">
          Beaches
        </button>
        <button className="px-4 py-2 bg-teal-600 text-gray-200 rounded-lg">
          City
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex items-center px-4 py-2 rounded-lg border-solid border-[1px] border-gray-400 gap-2">
        <AiOutlineSearch />
        <input
          className="w-full bg-transparent border-none outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
