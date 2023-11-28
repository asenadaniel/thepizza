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
import { useState, useEffect } from 'react'
import { ArrowBack, Close, Delete } from "@mui/icons-material";
import CartItem from "@/components/cartItem";

function CartPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);


  // const totalPrice = () => {
  //   let total = 0
  //   products.forEach((item) => (total += item.price))
  //   return total.toFixed(2)
  // }

  //   const notifyRemove = () => {
  //     toast.error('Item removed from cart', {
  //       position: "bottom-right",
  //       autoClose: 2000, // Close the notification after 2 seconds
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: 'colored'
  //     });
  //   };
  //   return (
  //     <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-900 lg:flex-row mb-3" >
  //       <div
  //         className=" p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:1/2 lg:px-20 xl:px-40 " /*Product Container */
  //       >
  //         {products.map(item => (

  //           <div
  //             className="flex items-center  justify-between   mb-5" /*Single Item */ key={item.id}>
  //             <Image src={item.img} alt="pic" width={100} height={100} />
  //             <div className=" text-center">
  //               <h1 className="uppercase text-xl font-bold">{item.title}</h1>
  //               <span>Large</span>
  //             </div>
  //             <h2 className="font-bold">£{item.price}</h2>
  //             <span className="cursor-pointer" onClick={() => {
  //               dispatch(removeItem(item.id));
  //               notifyRemove();
  //             }}>X</span>
  //           </div>

  //         ))}

  //       </div>
  //       <div
  //         className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-5 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6" /*Payment container */
  //       >
  //         <div className="flex justify-between">
  //           <span>Subtotal </span>
  //           <span>${totalPrice()}</span>
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
  //           <span className="text-red-950 font-bold">£{totalPrice()}.</span>
  //         </div>
  //         <hr className=" my-2" />
  //         <Link href='/'>
  //           <button className="bg-red-950 text-white p-3 round-md w-1/2 self-end">
  //             CHECKOUT
  //           </button>
  //         </Link>
  //       </div>
  //       <ToastContainer />
  //     </div>
  //   );
  // }

  // export default CartPage;
  const [total, setTotal] = useState('')

  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price
      return price
    })
    setTotal(price.toFixed(2))
  }, [products])


  return (
    <div>
      {products.length > 0 ? <div className=' flex-col md:flex-row md:max-w-screen-xl mx-auto py-20 flex items-center '>
        <CartItem />
        <div className=' w-1/3 bg-[#fafafa] py-9 px-4 md:sticky md:top-0 md:bottom-[100px]'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className=' text-2xl text-red-950 font-bold'>Order summary</h2>
            <p className='flex  text-red-900 font items-center gap-4 text-base'>
              Subtotal <span className=' font-bold text-red-900 text-lg'>₦{total}</span>
            </p>
            <p className=' text-red-900 flex items-start gap-4 text-base'>
              Shipping <span className=' font-semibold'>FREE</span>
            </p>
          </div>
          <p className=' font-titleFont font-semibold flex justify-between mt-6 '>Total <span className='text-xl font-bold'>₦{total}</span></p>
          <Link href='/'>
            <button className=' text-base bg-red-950 text-white w-full py-3 mt-6 hover:bg-gray-900 duration-200'>Place order</button>
          </Link>
        </div>
      </div> :
        <div className='flex justify-center items-center flex-col py-9 '>
          <p className=' text-red-900'>Your cart is currently empty. Please continue shopping.</p>
          <Link href={'/'}>
            <button className='mt-4 ml-7 flex items-center gap-1 text-red-900 font-bold hover:text-black duration-200'>
              <span><ArrowBack />  Return To Shop</span>
            </button>
          </Link>
        </div>
      }

    </div>
  )
}

export default CartPage
