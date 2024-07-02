import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiTime } from "react-icons/bi";

const PostCard = ({
  title = null,
  summery = null,
  date = null,
  src = null,
  link = "/",
}) => {
  return (
    <article className="bg-[#181f1f] p-5 rounded-xl relative">
      <Image
        width={800}
        height={800}
        className="w-full h-64 rounded-xl bg-gradient-to-r from-[#62613886] to-[#8f8d6d50] text-transparent border-none"
        src={src}
        alt={title}
      />
      <span className="inline-flex my-2 gap-2 text-gray-500 items-center text-[13px]">
        <BiTime />
        {date}
      </span>
      <h5 className="mb-3 font-extrabold">{title}</h5>
      <p className="mb-4">{summery}</p>
      <Link href={link} className="absolute inset-0 z-20" target="_blank" />
    </article>
  );
};

export default PostCard;
