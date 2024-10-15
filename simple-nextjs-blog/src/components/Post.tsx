import Link from "next/link";
import { motion } from "framer-motion";
import postStore from "../store/PostStore";

const Post = ({ post }) => {
  const handleDelete = () => {
    postStore.deletePost(post.id);
  };

  return (
    <motion.div
      className="card h-full flex flex-col justify-between"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-400 mb-4">{post.excerpt}</p>
      </div>
      <div className="flex justify-between items-center">
        <Link
          href={`/post/${post.id}`}
          className="text-blue-400 hover:text-blue-300 transition duration-300"
        >
          Read More
        </Link>
        <div className="space-x-2">
          <Link
            href={`/post/${post.id}`}
            className="text-green-400 hover:text-green-300 transition duration-300"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="text-red-400 hover:text-red-300 transition duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Post;
