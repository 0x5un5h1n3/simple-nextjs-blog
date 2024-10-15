import { useState } from "react";
import { observer } from "mobx-react-lite";
import postStore from "../store/PostStore";
import { motion } from "framer-motion";

const AddPost = observer(() => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now().toString(),
      title,
      content,
      excerpt: content.substring(0, 50),
    };

    // Add post to MobX store
    postStore.addPost(newPost);

    setTitle("");
    setContent("");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glass p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
        Add Post
      </button>
    </motion.form>
  );
});

export default AddPost;
