import Link from "next/link";
import { motion } from "framer-motion";
import postStore from "../store/PostStore";

const Post = ({ post }) => {
  const handleDelete = () => {
    postStore.posts = postStore.posts.filter((p) => p.id !== post.id);
  };

  return (
    <motion.div
      className="glass"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p>{post.excerpt}</p>
      <Link href={`/post/${post.id}`} className="text-blue-500 hover:underline">
        Read More
      </Link>
      <Link
        href={`/post/edit?id=${post.id}`}
        className="text-green-500 hover:underline ml-4"
      >
        Edit
      </Link>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:underline ml-4"
      >
        Delete
      </button>
    </motion.div>
  );
};

export default Post;
