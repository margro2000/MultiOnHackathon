const FAQSection = ({ children = null }) => {
  return (
    <section>
      <div className="container lg:pt-24">
        <div className="lg:grid grid-cols-12">
          <div className="col-span-3">
            <h3 className="text-center lg:text-left mb-7 lg:mb-0">FAQs</h3>
          </div>
          <div className="col-span-9">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
