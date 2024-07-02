import Image from "next/image";

const ProductSection = ({ title = "", subtitle = "", products = null }) => {
  return (
    <section className="relative pb-16">
      <div className="container mt-24 mb-16">
        <span className="text-[#ffffff85]">{subtitle}</span>
        <h3 className="my-5">{title}</h3>
      </div>
      <ul className="container flex flex-col gap-6 product">
        {products.map((e, i) => {
          if (i <= 4) {
            return (
              <li
                key={i}
                className="shadow-xl shadow-[#000000b2] bg-[#0f1616] border-[3px] border-[#262b2b] rounded-2xl sticky h-[64vh] flex flex-wrap justify-center items-center overflow-hidden after:content-[''] after:absolute after:block after:-left-16 after:-bottom-24 after:rounded-full after:blur-[100px] after:w-[300px] after:h-[300px] after:opacity-80"
              >
                <div className="lg:w-1/2 p-8 relative z-10">
                  <h3>{e.title}</h3>
                  <p className="my-5">{e.description}</p>
                  {typeof e.child === "function" && e.child !== null
                    ? e.child()
                    : e.child}
                </div>
                <div className="lg:w-1/2 relative z-10">
                  <Image
                    width={1000}
                    height={1000}
                    src={e.img}
                    alt=""
                    className="w-[90%] h-auto ml-auto lg:ml-auto rounded-lg"
                  />
                </div>
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
};

export default ProductSection;
