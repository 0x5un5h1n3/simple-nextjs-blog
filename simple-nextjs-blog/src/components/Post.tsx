import Link from "next/link";
import { motion } from "framer-motion";

const Post = ({ post }) => (
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
      href={`/post/edit/${post.id}`}
      className="text-blue-500 hover:underline ml-4"
    >
      Edit
    </Link>
  </motion.div>
);

export default Post;
