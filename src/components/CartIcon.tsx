"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import RootState from "@/redux/types";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

function CartIcon() {
  const product = useSelector((state: RootState) => state.cart.products);
  return (
    <Link href="/cart" className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5"></div>
      <span>
        <ShoppingBagOutlinedIcon />
        {product.length}
      </span>
    </Link>
  );
}

export default CartIcon;
