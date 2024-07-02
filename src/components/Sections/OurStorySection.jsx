import Image from "next/image";

const OurStorySection = ({
  title = "",
  description = "",
  descriptionCallback = null,
  author = { name: "", imgSrc: "", subTitle: "" },
}) => {
  return (
    <section>
      <div className="container -mt-16 mb-32">
        <h3 className="text-3xl sm:text-4xl">{title}</h3>
        <p className="whitespace-pre-line">
          {description}
          {typeof descriptionCallback === "function"
            ? descriptionCallback()
            : descriptionCallback}
        </p>
        <div className="mt-5">
          <Image
            src={author.imgSrc}
            alt="profile"
            className="w-[60px] h-[60px] rounded-full inline-block"
          />
          <div className="inline-block align-middle ml-3">
            <h6>{author.name}</h6>
            <span className="text-xs text-gray-200">{author.subTitle}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
