import Image from "next/image";
import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";
import twitter from "@/assets/images/twitter.png";
import { FaProductHunt } from "react-icons/fa";

const TestimonialCard = ({
  author = null,
  authorID = null,
  testimonial = "",
  link = "/",
  date = "",
  authorImageSrc = "",
  icon = "none",
}) => {
  return (
    <div className="p-7 rounded-xl bg-[#42424220] backdrop-blur-md relative overflow-hidden">
      <Link
        href={link}
        className="absolute inset-0 h-full w-full z-20"
        target="_blank"
      />
      <div className="absolute top-5 right-2 w-[30px] h-[30px]">
        {icon === "none" && <MdOpenInNew className="text-xl" />}
        {icon === "twitter" && (
          <Image
            src={twitter}
            alt="twitter"
            width={50}
            height={50}
            className="w-[20px] h-[20px] rounded"
          />
        )}
        {icon === "producthunt" && (
          <FaProductHunt className="text-xl text-[#ff6154]" />
        )}
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={authorImageSrc}
          alt="avatar"
          width={50}
          height={50}
          className="bg-gray-600 w-[50px] h-[50px] rounded-full"
        />
        <div>
          <b className="text-lg">{author}</b>
          <span className="block text-[14px] text-gray-500">@{authorID}</span>
        </div>
      </div>
      <div className="mt-5">
        <p className="">
          {testimonial.split("\n").map((item, index) => {
            return index === 0 ? item : [<br key={index} />, item];
          })}
        </p>
      </div>
      <span className="block mt-4 text-gray-400 text-[14px]">{date}</span>
    </div>
  );
};

export default TestimonialCard;
