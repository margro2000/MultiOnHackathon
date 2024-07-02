"use client";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const Accordion = ({ title, description }) => {
  const [show, setShow] = useState(false);
  const hideItem = useRef(null);
  useEffect(() => {
    if (show == true) {
      hideItem.current.style.height = `${hideItem.current.scrollHeight}px`;
    } else {
      hideItem.current.style.height = `0px`;
    }
  }, [show]);

  return (
    <div>
      <div
        className="bg-[#0f1616] p-6 rounded-xl relative cursor-pointer"
        onClick={() => {
          setShow(!show);
        }}
      >
        <h6 className="pr-5 select-none">{title}</h6>
        <IoIosArrowDown
          className={`absolute text-lg right-6 top-7 transition duration-200 ${
            show ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`h-[0px] overflow-hidden transition-all ease-in-out duration-300`}
        ref={hideItem}
      >
        <p className="bg-[#0f1616] mt-5 p-6 rounded-md">{description}</p>
      </div>
    </div>
  );
};

export default Accordion;
