import React from "react";

const RatingSection = ({ items = null }) => {
  return (
    <section>
      <div className="relative z-10 container py-24 lg:py-28 border-t border-[#ffffff20]">
        <div className="grid lg:grid-cols-3 gap-20 lg:gap-5 text-center">
          {items.map((e, i) => (
            <div key={i}>
              <h3 className="text-4xl lg:text-6xl mb-6">{e.number}</h3>
              <span className="text-gray-300">{e.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
