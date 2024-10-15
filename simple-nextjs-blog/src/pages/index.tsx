import { useEffect } from "react";
import Post from "../components/Post";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { observer } from "mobx-react-lite";
import postStore from "../store/PostStore";

const Home = observer(() => {
  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      postStore.setPosts(JSON.parse(storedPosts));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container flex-grow mt-20">
        <section className="hero glass p-8 mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-gray-400">
            Explore the latest articles and insights.
          </p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postStore.posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
});

export default Home;
