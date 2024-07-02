import React from "react";

const CallToAction = ({ title = "", description = "", children = null }) => {
  return (
    <section>
      <div className="container py-20">
        <div className="py-16 cat-bg px-5 relative overflow-hidden rounded-xl">
          <div className="relative z-10">
            <h3 className="text-[#0e1414]">{title}</h3>
            <p className="text-lg py-6 text-[#2b3232]">{description}</p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
