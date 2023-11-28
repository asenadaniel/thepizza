"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  // { id: 1, title: "Menu", url: "/menu" },
];

function Menu() {
  const [open, setOpen] = useState(false);

  const user = false;

  return (
    <div>
      <Link href="/cart" onClick={() => setOpen(false)}>
        <div className=" absolute right-12 top-8">
          <CartIcon />
        </div>
      </Link>
      {!open ? (
        <Image
          src="/open.png"
          alt="open"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="open"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="bg-red-950 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex items-center justify-center text-2xl flex-col gap-8 z-10">
          {links.map((item) => {
            return (
              <Link
                href={item.url}
                key={item.id}
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            );
          })}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}

          <Link href="/cart" onClick={() => setOpen(false)}></Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
