import { ArrowBack, Close, Delete } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../redux/cartReducer";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import RootState from "@/redux/types";

function CartItem() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.products);
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className=" font-bold text-2xl text-center text-red-900">
          Shopping Cart
        </h2>
      </div>
      <div>
        {products.map((item: any) => {
          return (
            <div
              className=" text-red-900 flex items-center  justify-end gap-6 mt-6 flex-col"
              key={item.id}
            >
              <div className="flex items-center gap-2 ">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-32 h-32 object-cover"
                />
                <h2 className="w-52">{item.title}</h2>
                <div className=" pr-6">
                  <p className="w-10">₦{item.price}</p>
                </div>
                <Close
                  onClick={() => dispatch(removeItem(item.id))}
                  className="text-xl text-gray-700 hover:text-red-700 cursor-pointer duration-300 "
                />
              </div>
            </div>
          );
        })}
      </div>
      <button
        className=" bg-red-950 text-white mt-9 ml-8 py-1 px-6 hover:bg-red-900"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </button>
      <Link href="/">
        <button className="mt-8 ml-7 flex items-center gap-1  text-red-900 font-bold hover:text-black duration-200">
          <span>
            <ArrowBack /> Continue Shopping
          </span>
        </button>
      </Link>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default CartItem;
