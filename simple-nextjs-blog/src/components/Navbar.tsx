import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => (
  <motion.header
    className="fixed w-full top-0 z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg"
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <nav className="container flex justify-between items-center py-4">
      <Link
        href="/"
        className="text-4xl font-bold text-white hover:text-blue-400 transition duration-300"
      >
        My Blog
      </Link>
      <div className="space-x-4">
        <Link
          href="/"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          Home
        </Link>
        <Link href="/add" className="btn-blue">
          Add Post
        </Link>
      </div>
    </nav>
  </motion.header>
);

export default Navbar;
