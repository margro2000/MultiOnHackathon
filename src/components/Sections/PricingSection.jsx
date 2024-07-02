"use client";
import React, { useState } from "react";
import PricingItem from "../../components/PricingItem/template-1";

const PricingSection = ({ title = "Our pricing", desciption = "" }) => {
  const [active, setActive] = useState(2);
  const [monthly, setMonthly] = useState(false);
  return (
    <section className="relative">
      <div className="container my-36 after:content-[''] after:absolute after:block after:right-0 after:left-0 after:mx-auto after:text-center after:-top-[40px] after:bg-[#62613861] after:rounded-full after:blur-[150px] after:w-[400px] after:h-[200px]">
        <div className="relative z-10">
          <h3 className="text-5xl text-center mb-8">{title}</h3>
          <p className="w-full lg:w-[700px] mx-auto text-center">
            {desciption}
          </p>
          <div className="text-center mt-10">
            <label className="switch">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === false) setMonthly(true);
                  else setMonthly(false);
                }}
                defaultChecked={!monthly}
              />
              <span className="slider"></span>
              <span className="title">Monthly</span>
              <span className="title">Annually</span>
            </label>
          </div>
          <ul className="grid lg:grid-cols-3 gap-10 mt-16">
            <li
              onMouseEnter={() => {
                setActive(1);
              }}
            >
              <PricingItem
                primary={active === 1}
                type="Starter"
                desciption={"A single license for one device."}
                currency="$"
                price={monthly ? 17 : 16 * 12}
                buttonText=""
                options={["1 macOs device", "Lifetime usage"]}
              >
                <button
                  type="button"
                  className={`p-3 block ${
                    active === 1
                      ? "text-black bg-[#fff] hover:bg-[#f6f6f6] border border-white"
                      : "bg-[#212223a2] hover:bg-[#1a1a1ba2] border border-[#414b43]"
                  }  w-full  mt-5 rounded-3xl transition-all ease-in-out duration-300`}
                >
                  Get Started Now
                </button>
              </PricingItem>
            </li>
            <li
              onMouseEnter={() => {
                setActive(2);
              }}
            >
              <PricingItem
                primary={active === 2}
                desciption={"A single license for one device."}
                type="Professional"
                currency="$"
                price={monthly ? 45 : 40 * 12}
                options={["1 macOs device", "Access to update"]}
              >
                <button
                  type="button"
                  className={`p-3 block ${
                    active === 2
                      ? "text-black bg-[#fff] hover:bg-[#f6f6f6] border border-white"
                      : "bg-[#212223a2] hover:bg-[#1a1a1ba2] border border-[#414b43]"
                  }  w-full  mt-5 rounded-3xl transition-all ease-in-out duration-300`}
                >
                  Get Started Now
                </button>
              </PricingItem>
            </li>
            <li
              onMouseEnter={() => {
                setActive(3);
              }}
            >
              <PricingItem
                primary={active === 3}
                type="Elite"
                desciption={"A single license for one device."}
                currency="$"
                price={monthly ? 229 : 220 * 12}
                options={["Lifetime usage", "Access to update"]}
              >
                <button
                  type="button"
                  className={`p-3 block ${
                    active === 3
                      ? "text-black bg-[#fff] hover:bg-[#f6f6f6] border border-white"
                      : "bg-[#212223a2] hover:bg-[#1a1a1ba2] border border-[#414b43]"
                  }  w-full  mt-5 rounded-3xl transition-all ease-in-out duration-300`}
                >
                  Get Started Now
                </button>
              </PricingItem>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
