import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import postStore from "../../store/PostStore";
import Navbar from "../../components/Navbar";

const EditPostPage = observer(() => {
  const router = useRouter();
  const { id } = router.query;

  const post = postStore.posts.find((p) => p.id === id);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post) {
      postStore.posts = postStore.posts.map((p) =>
        p.id === id ? { ...p, title, content } : p
      );
      router.push(`/post/${id}`); // Redirect to the updated post
    }
  };

  if (!post) return <p>Loading...</p>; // Handle loading state

  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold">Edit Post</h1>
      <form onSubmit={handleSubmit} className="glass p-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="border border-gray-300 rounded p-2 w-full mb-2"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
          className="border border-gray-300 rounded p-2 w-full mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Update Post
        </button>
      </form>
    </div>
  );
});

export default EditPostPage;
