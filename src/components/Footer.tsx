import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="h-12 md:h-24 px-4 lg:p-20 xl:p-40 text-red-900 flex items-center justify-between">
      <Link href="/" className="font-bold  text-xl">
        Rise and Dine
      </Link>

      <p> ALL RIGHTS RESERVED</p>
    </div>
  );
}

export default Footer;
