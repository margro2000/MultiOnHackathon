import fs from "fs";
import Footer from "@/components/Footer/template-1";
import Header from "@/components/Header/template-1";
import Image from "next/image";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { BiTime } from "react-icons/bi";
import logo from "@/assets/images/logo.png";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export default function PostSinglePage({ params }) {
  const slug = params.slug;
  const post = getPostContent(slug);
  return (
    <>
      <Header logo={logo} />

      <main>
        <section>
          <div class="container">
            <div class="max-w-[900px] pt-44 mx-auto relative">
              <Link
                href="/blog"
                class="absolute w-[50px] h-[50px] bg-gray-300 rounded-full left-0 top-28 z-10 flex justify-center items-center flex-col"
              >
                <svg
                  class="h-6 w-6 brightness-0 scale-110 opacity-50"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"></path>
                </svg>
              </Link>
              <Image
                width={800}
                height={800}
                class="w-full h-[300px] rounded-xl object-cover bg-gradient-to-r from-[#62613886] to-[#8f8d6d50] text-transparent border-none"
                src={post.data.src}
                alt={"title"}
              />
              <span className="inline-flex mt-4 gap-2 text-gray-300 items-center text-[14px]">
                <BiTime />
                {post.data.date}
              </span>
              <div class="blog-content mb-32">
                <h1>{post.data.title}</h1>
                <Markdown>{post.content}</Markdown>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
