import { useState } from "react";
import { observer } from "mobx-react-lite";
import postStore from "../store/PostStore";

const AddPost = observer(() => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new post object
    const newPost = {
      id: Date.now().toString(),
      title,
      content,
      excerpt: content.substring(0, 50), // Create an excerpt from the content
    };

    // Add the new post to the MobX store
    postStore.addPost(newPost);

    // Clear the form fields
    setTitle("");
    setContent("");
  };

  return (
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
        Add Post
      </button>
    </form>
  );
});

export default AddPost;
