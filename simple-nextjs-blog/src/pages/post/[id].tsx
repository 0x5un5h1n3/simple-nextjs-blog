import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import postStore from "../../store/PostStore";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const EditPostPage = observer(() => {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundPost = postStore.posts.find(
        (p) => p.id.toString() === id.toString()
      );
      if (foundPost) {
        setTitle(foundPost.title);
        setContent(foundPost.content);
      }
      setLoading(false);
    }
  }, [id, postStore.posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      id: id.toString(),
      title,
      content,
      excerpt: content.substring(0, 100) + "...",
    };
    postStore.updatePost(updatedPost);
    router.push("/");
  };

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container flex-grow mt-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Edit Post</h1>
        <form onSubmit={handleSubmit} className="glass p-8 max-w-2xl mx-auto">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            className="input-field mb-4"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            required
            className="input-field h-40 mb-4"
          />
          <button type="submit" className="btn-blue w-full">
            Update Post
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
});

export default EditPostPage;
