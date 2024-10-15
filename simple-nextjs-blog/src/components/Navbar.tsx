import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => (
  <motion.header
    className="header"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <nav className="navbar">
      <div className="logo">
        <Link href="/" aria-label="Home">
          My Blog
        </Link>
      </div>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/add">Add Post</Link>
      </div>
    </nav>
  </motion.header>
);

export default Navbar;
