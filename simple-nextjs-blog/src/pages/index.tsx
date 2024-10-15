// pages/index.tsx
import { useEffect } from "react";
import Post from "../components/Post";
import Navbar from "../components/Navbar";
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
    <div>
      <Navbar />
      <section className="hero">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to My Blog</h1>
        <p className="mt-4 text-gray-600">
          Explore the latest articles and insights.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {postStore.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
});

export default Home;
