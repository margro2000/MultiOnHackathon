import Header from "../../components/Header/template-1";
import Footer from "../../components/Footer/template-1";
import PricingSection from "../../components/Sections/PricingSection";
import FAQSection from "../../components/Sections/FAQSection";
import CallToAction from "../../components/Sections/CallToAction";
import logo from "../../assets/images/logo.png";
import Accordion from "../../components/Accordion/template-1";

export const metadata = {
  title: "Dark taste | Pricing",
  description: "Dark taste is a template of Landix.art",
};

export default function Pricing() {
  return (
    <>
      <Header logo={logo} />

      <main>
        <PricingSection desciption="Put a short description with a maximum length of 200 characters here." />

        <FAQSection>
          <div className="grid gap-4">
            <Accordion
              title="What do I get exactly?"
              description="You get access to a professionally designed and customizable template. These templates are ready to use, allowing customers to quickly establish an impressive online presence without the need for extensive web design or development skills"
            />
            <Accordion
              title="What makes the premium templates different from the regular ones?"
              description="Landix's templates are specially designed for startups and businesses, offering professional design and a user-friendly interface. The premium templates stand out with weekly updates, introducing new components to ensure your web presence remains fresh and effective"
            />
            <Accordion
              title="I can build it myself, why should I buy it?"
              description="True. While you're building it, others are launching theirs."
            />
            <Accordion
              title="What makes Landix's templates unique compared to others?"
              description="Landix's templates are specially designed for startups and businesses, offering professional design and a user-friendly interface."
            />
            <Accordion
              title="How long does it really take to set up?"
              description="If I want to be honest with you, it'll take less than a few hours."
            />
            <Accordion
              title="Javascript or Typescript?"
              description="Both! You can choose once you get access"
            />
            <Accordion
              title="I have another question"
              description="contact me by email at salarrismantab@gmail.com"
            />
          </div>
        </FAQSection>

        <CallToAction
          title="Your customers are waiting!"
          description="Your customers are waiting!"
        >
          <button className="btn btn-neutral rounded-xl" type="button">
            Call to action
          </button>
        </CallToAction>
      </main>

      <Footer logo={logo} />
    </>
  );
}
