"use client";

import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const Footer = ({ logo = "" }) => {
  const handelToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer>
      <div className="border-t border-b border-[#ffffff20] py-9">
        <div className="container grid grid-cols-12 lg:!gap-0 gap-x-7 gap-y-10">
          <div className="col-span-6 lg:col-span-3 ">
            <b className="">Product</b>
            <ul className="mt-2 space-y-2 text-[14px]">
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/about-us">About</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <b className="">Legal</b>
            <ul className="mt-2 space-y-2 text-[14px]">
              <li>
                <Link href="/privacy-policy">Privacy & Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <b className="">Resources</b>
            <ul className="mt-2 space-y-2 text-[14px]">
              <li>
                <Link href="/about-us">About us</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <b className="">Contact</b>
            <ul className="mt-2 space-y-2 text-[14px]">
              <li>
                <Link href="/about-us">About us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-b border-[#ffffff20] py-9">
        <div className="container flex justify-between">
          <Link
            href="/"
            className={`
             invert brightness-0`}
          >
            <Image
              width={1000}
              height={1000}
              className="w-[30px] h-[30px] object-contain"
              src={logo}
              alt="Website Logo"
            />
          </Link>
          <ul className="flex items-center gap-4 text-2xl">
            <li>
              <a href="" target="_blank">
                <AiOutlineInstagram />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <AiOutlineYoutube />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container sm:flex grid text-center sm:text-[unset] sm:gap-0 gap-y-10 justify-center sm:justify-between py-9">
        {/* <p className="sm:order-1 order-2 sm:text-white text-gray-200">
          Dark taste template © 2024
        </p> */}
        <ul className="flex items-center gap-4 sm:order-2 order-1 opacity-60">
          <li onClick={handelToTop}>
            <Link className="hover:text-gray-200" href="/pricing">
              Pricings
            </Link>
          </li>
          <li onClick={handelToTop}>
            <Link className="hover:text-gray-200" href="/about-us">
              About us
            </Link>
          </li>
          <li onClick={handelToTop}>
            <Link className="hover:text-gray-200" href="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
