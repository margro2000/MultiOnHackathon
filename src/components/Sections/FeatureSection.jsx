import Image from "next/image";

const FeatureSection = ({
  title = "",
  subtitle = "",
  description = "",
  children = null,
  list = null,
  img = null,
  startFromRight = false,
  borderBottomStyle = false,
}) => {
  return (
    <section>
      <div
        className={`relative z-10 container py-20 lg:py-28 ${
          borderBottomStyle && "border-[#ffffff20] border-b"
        }  mb-5`}
      >
        <div className="grid lg:grid-cols-2 items-center gap-5">
          <div className={`${startFromRight ? "lg:order-2" : "lg:order-1"}`}>
            <span className="text-[#ffffff85]">{subtitle}</span>
            <h3 className="my-7">{title}</h3>
            <p className="text-gray-200">{description}</p>
            {children}
          </div>
          <div className={`${startFromRight ? "lg:order-1" : "lg:order-2"}`}>
            {list !== null && (
              <ul className="grid md:grid-cols-2 gap-y-10 md:gap-5 mt-12 mb-5">
                {list.map((e, i) => (
                  <li className="grid grid-cols-12 gap-1" key={i}>
                    <div className="col-span-2">
                      {typeof e.icon === "function" ? e.icon() : e.icon}
                    </div>
                    <div className="col-span-10">
                      <p>{e.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {img !== null && (
              <Image
                width={1000}
                height={1000}
                src={img}
                className="rounded-lg h-auto w-full lg:w-[90%] mr-auto"
                alt={title}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
