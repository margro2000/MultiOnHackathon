import Header from "../components/Header/template-1";
import RatingSection from "../components/Sections/RatingSection";
import FeatureSection from "../components/Sections/FeatureSection";
import IntroSection from "../components/Sections/IntroSection";
import CallToAction from "../components/Sections/CallToAction";
import ProductSection from "../components/Sections/ProductSection";
import Footer from "../components/Footer/template-1";
import salarAvatar from "../assets/images/salar-rismantab.jpg";
import {
  AiFillAliwangwang,
  AiFillAndroid,
  AiFillCompass,
  AiFillCopyrightCircle,
  AiFillGoogleCircle,
} from "react-icons/ai";
import logo from "../assets/images/logo.png";
import PartnersSection from "@/components/Sections/PartnersSection";
import landix from "@/assets/images/landix.svg";
import TestimonialSection from "@/components/Sections/TestimonialSection";

// export const metadata = {
//   // title: "Dark taste | Home",
//   description: "Dark taste is a template of Landix.art",
// };

export default function Home() {
  return (
    <>
      <Header logo={logo} />

      <main>
        <IntroSection
          title="Agents 2.0 Hackathon"
          description="We are bringing together the top researchers, engineers, and developers to create autonomous agents. Join us for a weekend of collaboration, innovation, and fun!"
          logos={[
            {
              imgSrc: "/img/partners/1.svg",
              alt: "",
            },
            {
              imgSrc: "/img/partners/2.svg",
              alt: "",
            },
            {
              imgSrc: "/img/partners/3.svg",
              alt: "",
            },
            {
              imgSrc: "/img/partners/4.svg",
              alt: "",
            },
          ]}
        >
<a href="https://lu.ma/ai-agents-2.0" target="_blank" rel="noopener noreferrer">
  <button className="btn glass rounded-xl text-white" type="button">
    Apply here
  </button>
</a>
        </IntroSection>
        <ProductSection
          title="Join us on July 20th-21st, 2024 at Cloudfare HQ in San Francisco, CA"
          subtitle="Schedule"
          products={[
            {
              title: "Venue",
              description:
                "Join us at the Cloudflare headquarters in San Francisco, California. ",
              img: "/img/Cloudfare.jpeg",
              child: () => (
                <a href="https://lu.ma/ai-agents-2.0" target="_blank" rel="noopener noreferrer">
                <button className="btn glass rounded-xl text-white" type="button">
                  Apply here
                </button>
              </a>
              ),
            },
            {
              title: "Talks and Speakers",
              description:
                "Come here talks and panels from the top researchers and engineers in the field. ",
              img: "/img/speakers.jpg",
              child: () => (
                <a href="https://lu.ma/ai-agents-2.0" target="_blank" rel="noopener noreferrer">
                <button className="btn glass rounded-xl text-white" type="button">
                  Apply here
                </button>
              </a>
              ),
            },
            {
              title: "Join the community",
              description:
                "We are offerring a variety of smaller challenges and prizes and creating a community of agent enthusiasts.",
              img: "/img/community.jpg",
              child: () => (
                <a href="https://lu.ma/ai-agents-2.0" target="_blank" rel="noopener noreferrer">
                <button className="btn glass rounded-xl text-white" type="button">
                  Apply here
                </button>
              </a>
              ),
            },
            {
              title: "Prizes",
              description:
                "We are offerring cash prizes and giveaways to the team that creates the best autonomous agent.",
              img: "/img/prizes.jpg",
              child: () => (
                <a href="https://lu.ma/ai-agents-2.0" target="_blank" rel="noopener noreferrer">
                <button className="btn glass rounded-xl text-white" type="button">
                  Apply here
                </button>
              </a>
              ),
            },
          ]}
        />
        <RatingSection
          items={[
            {
              number: "Apple Vision Pro",
              subtitle: "Winning Prize",
            },
            {
              number: "Cash and Prizes",
              subtitle: "Top Particiapnts",
            },
            {
              number: "Compute, API Credit, Swag",
              subtitle: "Hackers, developers, and researchers",
            },
          ]}
        />

        <FeatureSection
          title="What are we building?"
          subtitle="Understanding Agents"
          description="Agents 2.0 refers to the next era of AI Agents that act on your behalf and take actions. These agents are reliable, useful, observable and learn from their interactions. Developers can effortlessly add them to their stack and develop cool new Agentic applications."
          list={[
            {
              icon: () => <AiFillAliwangwang className="text-3xl" />,
              description: "Enhanced Decision-Making Capabilities",
            },
            {
              icon: () => <AiFillAndroid className="text-3xl" />,
              description: "Adaptive Learning",
            },
            {
              icon: () => <AiFillCopyrightCircle className="text-3xl" />,
              description: "Interoperability",
            },
            {
              icon: () => <AiFillCompass className="text-3xl" />,
              description: "Autonomy",
            },
            {
              icon: () => <AiFillGoogleCircle className="text-3xl" />,
              description: "Scalability",
            },
          ]}
          startFromRight={false}
          borderBottomStyle={false}
        >
          <a href="https://lu.ma/ai-agents-2.0" target="_blank" rel="noopener noreferrer">
  <button className="btn glass rounded-xl text-white mt-6" type="button">
    Apply here
  </button>
</a>
        </FeatureSection>

        <FeatureSection
          title="Use Cases"
          subtitle="Consumer Use Cases"
          description="Agents can book your flights, plan your next trip, and even order your groceries. They can also help businesses automate customer service, streamline operations, and improve decision-making. Agents are already being used in a variety of industries, including travel, retail, finance, and healthcare."
          img={"/img/agents.png"}
          startFromRight={true}
        >
         <a href="https://lu.ma/ai-agents-2.0" target="_blank" rel="noopener noreferrer">
                <button className="btn glass rounded-xl text-white mt-6" type="button">
                  Apply here
                </button>
              </a>
        </FeatureSection>

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
              src: "/img/partners/2.svg",
            },
            {
              title: "Landix",
              src: "/img/partners/4.svg",
            }, 
          ]}
        />

        <FeatureSection
          title="Global Community of Builders"
          subtitle="The new paradigm"
          description="Unlike LLMs, which primarily deal with information processing and generation, autonomous agents can be designed to interact with various digital systems, make decisions based on predefined criteria, and execute actions across different platforms. With the MultiOn API and the newest Agent capability, we can tackle some of these most complex challenges."
          img={"/img/international.avif"}
          startFromRight={false}
        >
          <a href="https://lu.ma/ai-agents-2.0" target="_blank" rel="noopener noreferrer" className="mt-6">
  <button className="btn glass rounded-xl text-white mt-6" type="button">
    Apply here
  </button>
</a>
        </FeatureSection>

        {/* <TestimonialSection
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
        /> */}

        <CallToAction
          title="Join us on July 20th-21st!"
          description="Make sure to register before July 15!"
        >
         <a href="https://lu.ma/ai-agents-2.0" target="_blank" rel="noopener noreferrer">
  <button className="btn glass rounded-xl text-black" type="button">
    Apply here
  </button>
</a>
        </CallToAction>
      </main>

      <Footer logo={logo} />
    </>
  );
}
