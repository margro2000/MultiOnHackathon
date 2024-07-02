/* eslint-disable react/prop-types */
import { AiOutlineCheck } from "react-icons/ai";

const PricingItem = ({
  primary = false,
  type = "",
  currency = "",
  price = 0,
  options = [],
  children = "",
  desciption = "",
}) => {
  return (
    <div className="p-6 rounded-2xl relative z-10 bg-[#0f1616] border-[3px] border-[#2a2e20] overflow-hidden after:content-[''] after:absolute after:block after:-left-16 after:-bottom-24 after:bg-[#62613886] after:rounded-full after:blur-[100px] after:w-[300px] after:h-[300px] after:opacity-80">
      <div className={`relative z-10`}>
        <div className={`relative text-white z-10`}>
          <h6 className="mb-5">{type}</h6>
          <p className="mb-10 opacity-70">{desciption}</p>
        </div>

        <ul className="mt-5">
          {options.map((e, i) => (
            <li
              key={i}
              className={` ${
                options.length - 1 !== i && "border-b border-[#18191a] "
              } pb-5 mt-5`}
            >
              <AiOutlineCheck className="text-[#767676] inline-block mr-2 text-lg" />
              {e}
            </li>
          ))}
        </ul>
        <h3 className="text-center my-7">
          {currency} {Number(Number(price).toFixed(1)).toLocaleString()}
        </h3>
        {children}
      </div>{" "}
    </div>
  );
};

export default PricingItem;
