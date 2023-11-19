import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";

function SingleProduct() {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-900 md:flex-row md:gap-10 items-center">
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]" /*Image Container */>
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      <div
        className="h-1/2 flex flex-col gap-5 md:h-[70%] md:justify-center md:gap-6 xl:gap-8" /*Text container */
      >
        <h1 className="text-3xl font-bold uppercase xl:text-4xl">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
}

export default SingleProduct;
