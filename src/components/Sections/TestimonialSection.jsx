"use client";

import React, { useEffect, useState } from "react";
import TestimonialCard from "../Card/TestimonialCard";

const TestimonialSection = ({ list = [], title = null }) => {
  const [testimonialList, setTestimonialList] = useState([[], [], []]);

  useEffect(() => {
    handelTestimonial();
  }, []);

  const handelTestimonial = () => {
    let newList = [[], [], []];

    list.forEach((e, i) => {
      if (i % 3 === 0) {
        newList[0].push(e);
      } else if (i % 3 === 1) {
        newList[1].push(e);
      } else {
        newList[2].push(e);
      }
    });

    setTestimonialList([...newList]);
  };

  return (
    <section>
      <div className="container py-20">
        <h3 className="font-extrabold text-center">{title}</h3>
        <div className="flex flex-wrap mt-10 gap-y-4">
          <div className="w-full lg:w-1/3 px-2 space-y-4">
            {testimonialList[0].map((e, i) => (
              <TestimonialCard
                key={i}
                author={e.author}
                authorID={e.authorID}
                testimonial={e.testimonial}
                link={e.link}
                date={e.date}
                authorImageSrc={e.authorImageSrc}
                icon={e.icon}
              />
            ))}
          </div>
          <div className="w-full lg:w-1/3 px-2 space-y-4">
            {testimonialList[1].map((e, i) => (
              <TestimonialCard
                key={i}
                author={e.author}
                authorID={e.authorID}
                testimonial={e.testimonial}
                link={e.link}
                date={e.date}
                authorImageSrc={e.authorImageSrc}
                icon={e.icon}
              />
            ))}
          </div>
          <div className="w-full lg:w-1/3 px-2 space-y-4">
            {testimonialList[2].map((e, i) => (
              <TestimonialCard
                key={i}
                author={e.author}
                authorID={e.authorID}
                testimonial={e.testimonial}
                link={e.link}
                date={e.date}
                authorImageSrc={e.authorImageSrc}
                icon={e.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
