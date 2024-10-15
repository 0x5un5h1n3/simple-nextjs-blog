import { useState } from "react";
import { observer } from "mobx-react-lite";
import postStore from "../store/PostStore";

const AddPost = observer(() => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = {
      id: Date.now().toString(),
      title,
      content,
      excerpt: content.substring(0, 100) + "...",
    };

    postStore.addPost(newPost);
    setTitle("");
    setContent("");
  };

  return (
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
        Add Post
      </button>
    </form>
  );
});

export default AddPost;
