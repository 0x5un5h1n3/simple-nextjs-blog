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
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
});

export default EditPostPage;
