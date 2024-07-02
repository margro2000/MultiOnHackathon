"use client";

import Header from "@/components/Header/template-1";
import Link from "next/link";
import logo from "../assets/images/logo.png";

export default function NotFound() {
  return (
    <>
      <Header logo={logo} />
      <section className="text-center">
        <div className="container flex flex-col h-screen flex-wrap justify-center items-center">
          <h1 className="font-black text-[8rem]">
            4<span className="text-[#626138]">0</span>4
          </h1>
          <p className="mt-10 text-4xl font-semibold text-gray-300">
            Page Not Found
          </p>
          <div className="mt-8">
            <Link href={"/"} className="btn glass rounded-3xl mt-6">
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
