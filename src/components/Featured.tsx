"use client";
// import { Context } from "@/context/context";
import { featuredProducts } from "@/data";
import { addToCart } from "@/redux/cartReducer";
import Image from "next/image";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// function Featured() {
//   const { AddCart }: any = useContext(Context);
//   return (
//     <div className="w-screen overflow-x-scroll text-red-900" /*container */>
//       <div className="w-max flex" /*wrapper */>
//         {featuredProducts.map((item) => (
//           <div
//             key={item.id}
//             className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] lg:w-[33vw] xl:h-[90vh]" /* Single item */
//           >
//             {item.img && (
//               <div
//                 className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500" /* image container */
//               >
//                 <Image src={item.img} alt="" fill className="object-contain" />
//               </div>
//             )}
//             <div
//               className="flex-1 flex flex-col gap-4 items-center justify-center" /* text container */
//             >
//               <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
//                 {item.title}
//               </h1>
//               <p className="p-4 text-center 2xl:p-8">{item.desc}</p>
//               <span className="text-xl font-bold">{item.price}</span>
//               <button
//                 className="bg-red-950 text-white p-2 rounded-md"
//                 onClick={() => AddCart(item)}
//               >
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
function Featured() {
  const notify = () => {
    toast.success("Item added to cart!", {
      position: "top-center",
      autoClose: 2000, // Close the notification after 2 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const dispatch = useDispatch();
  return (
    <div
      className="w-screen overflow-x-scroll text-red-900 flex justify-center" /*container */
    >
      <div className="w-max   lg:grid grid-cols-3    " /*wrapper */>
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] lg:w-[33vw] xl:h-[90vh]" /* Single item */
          >
            {item.img && (
              <div
                className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500" /* image container */
              >
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            <div
              className="flex-1 flex flex-col gap-4 items-center justify-center" /* text container */
            >
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 text-center 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">£{item.price}</span>
              <button
                className="bg-red-950 text-white p-2 rounded-md"
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: item.id,
                      title: item.title,
                      desc: item.desc,
                      price: item.price,
                      img: item.img,
                    })
                  );
                  notify(); // Display toast notification on button click
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Featured;
