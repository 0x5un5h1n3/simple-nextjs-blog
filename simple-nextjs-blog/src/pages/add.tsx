import AddPost from "../components/AddPost";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AddPostPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="container flex-grow mt-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Add New Post</h1>
      <AddPost />
    </main>
    <Footer />
  </div>
);

export default AddPostPage;
