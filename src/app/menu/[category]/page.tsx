// import { pizzas } from "@/data";
// import Image from "next/image";
// import Link from "next/link";
// import { Context } from "@/context/context";
// import React, { useContext } from "react";
// import { useParams } from "next/navigation";

// function Category() {
//   // const { all_product } = useContext(ShopContext)
//   // const { productId } = useParams()
//   // const product = all_product.find((e) => e.id === Number(productId))

//   const { productId } = useParams();
//   const pizza = pizzas.find((e) => e.id === Number(productId));

//   return (
//     <div className="flex flex-wrap  text-red-900">
//       {pizza.map((item) => (
//         <Link
//           className="w-full h-[60vh] border-r-2 border-b-2 border-red-900 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group"
//           href={`/product/${item.id}`}
//           key={item.id}
//         >
//           {item.img && (
//             <div className="relative h-[80%]" /*Image container */>
//               <Image
//                 src={item.img}
//                 alt="pic"
//                 fill
//                 className="ob object-contain"
//               />
//             </div>
//           )}
//           <div
//             className="flex items-center justify-between font-bold" /*Text Contianer */
//           >
//             <h1 className="text-2xl uppercase p-3">{item.title}</h1>
//             <h2 className="g  text-xl">₦{item.price}</h2>
//             <button className="uppercase bg-red-900 text-white p-2  group-hover:block">
//               Add to Cart
//             </button>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }

// export default Category;
