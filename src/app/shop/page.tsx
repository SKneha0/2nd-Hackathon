'use client'
import React, { useState } from "react";
import shop from "@/src/Image/shop.png";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { products } from "@/src/data/shopdata";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import { LuSettings2 } from "react-icons/lu";
import Link from "next/link";

  const sortOptions = ["Newest", "Oldest", "Top Rated", "Most Popular"];
  const showOptions = ["Default", "5 Results", "10 Results", "20 Results"];
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [attr, setAttr] = useState('hidden');
  
  const filterHandler = () => {
    setAttr(isOpen ? 'hidden' : 'block');
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative bg-white">
      <div className="relative">
        <Image src={shop} alt="Shop Banner" className=" min-h-40" />
        <div className="absolute top-[30%] md:top-[40%] text-white w-[100vw] flex flex-col items-center gap-4">
          <h1 className="text-4xl font-semibold">Our Shop</h1>
          <p className="flex items-center">
            Home <IoIosArrowForward />
            <span className="text-orange-400">Shop</span>{" "}
          </p>
        </div>
      </div>
      <div className="mx-2 md:mx-20">
      <div className="flex items-center space-x-4 p-4 justify-between rounded-lg">
        <div className="sm:flex  space-x-4">
        <div className="flex py-4 items-center space-x-2">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortOptions[0]}
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none "
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="show" className="text-sm font-medium text-gray-700">
            Show:
          </label>
          <select
            id="show"
            value={showOptions[0]}
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none "
          >
            {showOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        </div>
        <LuSettings2 className=" lg:hidden text-xl cursor-pointer" onClick={filterHandler} />

      </div>
      <div className="flex justify-between ">
      <div className="flex w-[1000px] flex-wrap justify-around">
        {products.map((product, index) => (
          <Link key={index} href={`shopdetails/${product.slug}`}>
          <ProductCard  product={product}/>
          </Link>
        ))}
      </div>
        <div className="hidden lg:block">
        <Filter/>
        </div>
      </div>
      </div>
        <div className={`${attr} fixed bottom-0 lg:hidden w-[100vw]`}>
        <Filter filterHandler={filterHandler}/>
        </div>
    </div>
  );
};

export default Page;
