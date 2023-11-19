import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

function Offer() {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      <div
        className="flex-1 flex flex-col justify-center items-center gap-9 p-7" /* Text Container*/
      >
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Burger, Pizza & French Fry
        </h1>
        <p className="text-white xl:text-xl"> Enjoy</p>
        <CountDown />
        <button className="bg bg-red-950 text-white rounded-md py-3 px-6">
          Order Now
        </button>
      </div>
      <div className="relative flex-1 w-full md:h-full" /* Image Container*/>
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}

export default Offer;
