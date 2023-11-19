import Image from "next/image";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      <div
        className="h-full shadow-2xl flex rounded-md flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2" /*BOX */
      >
        <div className="relative h-1/3 w-full md:h-full md:w-1/2" /*IMG */>
          <Image src="/p13.jpg" alt="" fill />
        </div>
        <div className="p-10 flex flex-col gap-8 md:w-1/2" /*FORM */>
          <h1 className=" font-bold text-xl xl:text-3xl">Welcome</h1>
          <p>Log into your account OR create a new one</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
            <Image
              src="/google.png"
              alt="google"
              width={20}
              height={20}
              className=" object-cover"
            />
            <span> sign in with Google</span>
          </button>
          <p className="text-sm">
            Have a problem?{" "}
            <Link className=" underline" href="/">
              Hit us up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
