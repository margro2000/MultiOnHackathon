import OurStorySection from "../../components/Sections/OurStorySection";
import Header from "../../components/Header/template-1";
import Footer from "../../components/Footer/template-1";
import IntroSection from "../../components/Sections/IntroSection";
import CallToAction from "../../components/Sections/CallToAction";
import PartnersSection from "../../components/Sections/PartnersSection";
import logo from "../../assets/images/logo.png";
import landix from "../../assets/images/landix.svg";
import salarAvatar from "../../assets/images/salar-rismantab.jpg";
import TestimonialSection from "@/components/Sections/TestimonialSection";

export const metadata = {
  // title: "Dark taste | About us",
  description: "Dark taste is a template of Landix.art",
};

export default function About() {
  return (
    <>
      <Header logo={logo} />

      <main>
        <IntroSection
          title="About us"
          description="The complete payment infrastructure provider for software companies."
          addClassName={"pb-32 pt-10"}
        />

        <OurStorySection
          title={"Our story, so far. "}
          description={`
          Let me share with you the story of Landix, a journey that began when I saw a common struggle faced by indie hackers and startups. These creative minds were pouring their energy into building amazing products but were held back by one significant challenge—creating a standout online presence.

          It was clear to me that they needed a solution, but not just any solution—a reliable partner in their entrepreneurial journey. That's how the idea of Landix was born.

          With Landix, our goal was simple yet profound: to provide not just templates, but a helping hand that would enable indie hackers and startups to shine online without the complexities of web design. We wanted to say, 'Don't stress about building a website from scratch; we've got you covered.'

          Our journey was all about understanding the unique needs of our users. We tailored our templates specifically for startups, ensuring they had a professional look and a user-friendly interface. Time was precious for these entrepreneurs, and they couldn't afford to waste it on amateur websites.

          But we didn't stop there. We believed in constant improvement. We made it a point to update our prime templates every week, introducing new components and features. It was our way of adding brush strokes to a beautiful painting, making it even more captivating with each iteration.

          Landix wasn't just a platform; it was a journey—a journey of simplifying, beautifying, and empowering the dreams of indie hackers and startups. 
          `}
          author={{
            name: "Salar R",
            subTitle: "Founder of Landix",
            imgSrc: salarAvatar,
          }}
        />

        <PartnersSection
          logos={[
            {
              title: "Landix",
              src: "/img/partners/1.svg",
            },
            {
              title: "Landix",
              src: "/img/partners/2.svg",
            },
            {
              title: "Landix",
              src: "/img/partners/3.svg",
            },
            {
              title: "Landix",
              src: "/img/partners/4.svg",
            },
            {
              title: "Landix",
              src: "/img/partners/5.svg",
            },
            {
              title: "Landix",
              src: "/img/partners/6.svg",
            },
            {
              title: "Landix",
              src: "/img/partners/7.svg",
            },
            {
              title: "Landix",
              src: "/img/partners/8.svg",
            },
            {
              title: "Landix",
              src: landix,
            },
          ]}
        />

        <TestimonialSection
          list={[
            {
              author: "Salar Rismantab",
              authorID: "salarsr_com",
              authorImageSrc: salarAvatar,
              testimonial: `
              I'm using Dark taste on my website and it is as well as possible, I'm so happy to find Dark taste on Product Hunt
              `,
              link: "/",
              date: "Oct 7, 2023",
              icon: "producthunt",
            },
            {
              author: "Toshit Parker",
              authorID: "toshit_parker",
              authorImageSrc: salarAvatar,
              testimonial: ` 
              Very easy to use and a very fast experience. We tried using some other competitors and a few others. We used our own test to train, but none of them gave as accurate responses as Green Land. Great work! 👍
              `,
              link: "/",
              date: "Sep 12, 2023",
              icon: "producthunt",
            },
            {
              author: "Matthias Dohn",
              authorID: "matthias_dohn",
              authorImageSrc: salarAvatar,
              testimonial: ` 
              Hey folks, have you seen, yet?
              Ask it some questions like "How do I create a persona?". Let me know how it works for you. 😄
              `,
              link: "/",
              date: "Sep 1, 2023",
              icon: "twitter",
            },
          ]}
          title={"What People are Saying"}
        />

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
