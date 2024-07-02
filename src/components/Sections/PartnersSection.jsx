"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import Image from "next/image";

const PartnersSection = ({ logos = null }) => {
  return (
    <section className="py-8">
      <Splide
        className="w-full"
        options={{
          type: "loop",
          perPage: 8,
          pagination: false,
          arrows: false,
          drag: "free",
          autoScroll: {
            speed: -1,
            pauseOnHover: false,
            pauseOnFocus: false,
          },
          breakpoints: {
            992: {
              perPage: 5,
            },
            768: {
              perPage: 3,
            },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {logos.map((e, i) => (
          <SplideSlide key={i}>
            <div className="p-5">
              <Image
                width={1000}
                height={1000}
                src={e.src}
                className="invert h-auto brightness-0 w-full"
                alt={e.title}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default PartnersSection;
