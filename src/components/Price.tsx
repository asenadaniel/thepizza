// "use client";
// import React, { useState, useEffect } from "react";

// type Props = {
//   price: number;
//   id: number;
//   options?: { title: string; additionalPrice: number }[];
// };

// function Price({ price, id, options }: Props) {
//   const [total, setTotal] = useState(price);
//   const [quantity, setQuantity] = useState(1);
//   const [selected, setSelected] = useState(0);

//   useEffect(() => {
//     setTotal(
//       quantity * (options ? price + options[selected].additionalPrice : price)
//     );
//   }, [quantity, selected]);

//   return (
//     <div className="flex flex-col gap-4">
//       <h2 className="text-2xl font-bold">₦{total.toFixed(2)}</h2>
//       <div className="flex gap-4" /*Option Container */>
//         {options?.map((option, index) => (
//           <button
//             key={option.title}
//             className=" min-w-[6rem] p-2 ring-2 ring-red-900 rounded-md"
//             style={{
//               background: selected === index ? "rgb(248 113 113" : "white",
//               color: selected === index ? "white" : "red",
//             }}
//             onClick={() => setSelected(index)}
//           >
//             {option.title}
//           </button>
//         ))}
//       </div>
//       <div
//         className="flex justify-between items-center" /*Quantity and add Container */
//       >
//         <div
//           className="flex justify-between w-full p-3 ring ring-red-900" /*quantity */
//         >
//           <span>{quantity}</span>
//           <div className="flex gap-4 items-center">
//             <button
//               onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
//             >
//               {"<"}
//             </button>
//             <span>1</span>
//             <button
//               onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
//             >
//               {">"}
//             </button>
//           </div>
//         </div>
//         <button
//           className="uppercase w-56 bg-red-900 text-white p-[15px] ring-1 ring-red-900" /*Cart Button */
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Price;
