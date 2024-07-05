import Footer from "@/components/Footer/template-1";
import Header from "@/components/Header/template-1";
import PostCard from "@/components/PostCard/template-1";
import { getSortedPostsData } from "../../../lib/posts";
import logo from "@/assets/images/logo.png";

export const metadata = {
  // title: "Dark taste | Blog",
};

export default function Blog() {
  const posts = getSortedPostsData();
  return (
    <>
      <Header logo={logo} />

      <main>
        <section>
          <div className="container mt-32 mb-12">
            <h1 className="text-center my-10">Blog</h1>
            <div className="grid lg:grid-cols-3 gap-6">
              {posts.map((e, i) => (
                <PostCard
                  key={i}
                  title={e.title}
                  summery={e.summery}
                  date={e.date}
                  src={e.src}
                  link={`/blog/${e.id}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
