import AddPost from "../components/AddPost";
import Navbar from "../components/Navbar";

const AddPostPage = () => (
  <div>
    <Navbar />
    <h1 className="text-4xl font-bold">Add New Post</h1>
    <AddPost />
  </div>
);

export default AddPostPage;
