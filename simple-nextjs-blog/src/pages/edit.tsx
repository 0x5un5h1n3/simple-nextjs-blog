import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import postStore from "../../../store/PostStore";
import Navbar from "../../../components/Navbar";

const EditPostPage = observer(() => {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id && postStore.posts.length > 0) {
      const post = postStore.posts.find(
        (p) => p.id.toString() === id.toString()
      );
      if (post) {
        setTitle(post.title);
        setContent(post.content);
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
      excerpt: content.substring(0, 50),
    };
    postStore.updatePost(updatedPost);
    router.push("/");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold text-white mb-4">Edit Post</h1>
      <form
        onSubmit={handleSubmit}
        className="glass p-6 max-w-2xl mx-auto mt-8"
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-blue-500"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
          className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-blue-500 h-40"
        />
        <button type="submit" className="btn-blue w-full">
          Update Post
        </button>
      </form>
    </div>
  );
});

export default EditPostPage;
