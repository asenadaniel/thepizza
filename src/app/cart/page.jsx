"use client";
import { Context } from "@/context/context";
import { removeItem } from "@/redux/cartReducer";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// function CartPage() {
//   const { cartItems }: any = useContext(Context);
//   console.log(cartItems);
//   return (
//     <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-900 lg:flex-row">
//       <div
//         className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:1/2 lg:px-20 xl:px-40" /*Product Container */
//       >
//         {cartItems && cartItems.length > 0
//           ? cartItems.map((item: any) => (
//               <div
//                 className="flex items-center justify-between mb-5" /*Single Item */
//               >
//                 <Image src={item.img} alt="pic" width={100} height={100} />
//                 <div className="">
//                   <h1 className="uppercase text-xl font-bold">{item.title}</h1>
//                   <span>Large</span>
//                 </div>
//                 <h2 className="font-bold">{item.price}</h2>
//                 <span className="cursor-pointer">X</span>
//               </div>
//             ))
//           : null}
//       </div>
//       <div
//         className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-5 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6" /*Payment container */
//       >
//         <div className="flex justify-between">
//           <span>Subtotal (3 items)</span>
//           <span>$20</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Service Cost</span>
//           <span>$0.00</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Delivery Cost</span>
//           <span className="text-green-700">FREE</span>
//         </div>
//         <div className="flex justify-between">
//           <span>TOTAL</span>
//           <span className="text-red-950 font-bold">$20</span>
//         </div>
//         <hr className=" my-2" />
//         <button className="bg-red-950 text-white p-3 round-md w-1/2 self-end">
//           CHECKOUT
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CartPage;

function CartPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);


  const totalPrice = () => {
    let total = 0
    products.forEach((item) => (total += item.price))
    return total.toFixed(2)
  }

  const notifyRemove = () => {
    toast.error('Item removed from cart', {
      position: "bottom-right",
      autoClose: 2000, // Close the notification after 2 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    });
  };
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-900 lg:flex-row mb-3" >
      <div
        className=" p-4 flex flex-col justify-center      overflow-scroll   lg:h-full lg:w-2/3 2xl:1/2 lg:px-20 xl:px-40 " /*Product Container */
      >
        {products.map(item => (

          <div
            className="flex items-center  justify-between   mb-5" /*Single Item */ key={item.id}>
            <Image src={item.img} alt="pic" width={100} height={100} />
            <div className=" text-center">
              <h1 className="uppercase text-xl font-bold">{item.title}</h1>
              <span>Large</span>
            </div>
            <h2 className="font-bold">£{item.price}</h2>
            <span className="cursor-pointer" onClick={() => {
              dispatch(removeItem(item.id));
              notifyRemove();
            }}>X</span>
          </div>

        ))}

      </div>
      <div
        className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-5 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6" /*Payment container */
      >
        <div className="flex justify-between">
          <span>Subtotal </span>
          <span>${totalPrice()}</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="text-green-700">FREE</span>
        </div>
        <div className="flex justify-between">
          <span>TOTAL</span>
          <span className="text-red-950 font-bold">£{totalPrice()}.</span>
        </div>
        <hr className=" my-2" />
        <Link href='/'>
          <button className="bg-red-950 text-white p-3 round-md w-1/2 self-end">
            CHECKOUT
          </button>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CartPage;
