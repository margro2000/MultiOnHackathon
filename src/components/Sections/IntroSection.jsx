import Image from "next/image";
import React from "react";

const IntroSection = ({
  title = "",
  description = "",
  children = null,
  logos = [],
  addClassName = ""
}) => {
  return (
    <section
      className={`${addClassName} relative z-10 overflow-hidden after:content-[''] after:absolute after:block after:-right-16 after:-top-24 after:bg-[#62613886] after:rounded-full after:blur-[100px] after:w-[300px] after:h-[300px] 
      before:content-[''] before:absolute before:block before:-left-16 before:top-[30%] before:bg-[#8f8d6d50] before:rounded-full before:blur-[150px] before:w-[700px] before:h-[300px]
    `}
    >
      <div className="container mt-48 mb-24 flex flex-col flex-wrap justify-center relative z-10">
        <h1 className="text-center lg:text-left lg:w-[850px]">{title}</h1>
        <p className="text-center lg:w-[750px] lg:text-left lg:text-lg lg:mt-5 lg:mb-0 mb-5 mt-7 text-gray-300">
          {description}
        </p>
        <ul className="flex gap-10 items-center my-7">
          {logos.map((e, i) => (
            <li key={i}>
              <Image
                src={e.imgSrc}
                alt={e.alt}
                width={1000}
                height={1000}
                className="w-[100px] h-auto brightness-0 invert object-contain"
              />
            </li>
          ))}
        </ul>
        <div className="text-center lg:text-left">{children}</div>
      </div>
    </section>
  );
};

export default IntroSection;
