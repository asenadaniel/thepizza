"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always cripsy & always hot",
    image: "/slide1.png",
  },
  {
    id: 1,
    title: "we deliver your order world-wide",
    image: "/slide2.png",
  },
  {
    id: 1,
    title: "the best pizza to share with your family",
    image: "/slide3.png",
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* Text container */}
      <div className=" flex items-center justify-center flex-col gap-8 text-red-900 font-bold flex-1">
        <h1 className="text-5xl text-center uppercase p-5 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-950 text-white py-4 px-5 cursor-pointer ">
          Order Now
        </button>
      </div>
      {/* image container */}
      <div className=" flex-1 relative w-full">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className=" object-cover"
        />
      </div>
    </div>
  );
}

export default Slider;
