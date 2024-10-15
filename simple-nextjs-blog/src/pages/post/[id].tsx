import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { observer } from "mobx-react-lite";
import postStore from "../../store/PostStore";

const PostPage = observer(() => {
  const router = useRouter();
  const { id } = router.query;

  // Find the post by ID
  const post = postStore.posts.find((p) => p.id === id);

  if (!post) return <p>Loading...</p>; // Or handle not found

  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
      <button
        onClick={() => router.back()}
        className="bg-blue-500 text-white rounded p-2"
      >
        Go Back
      </button>
    </div>
  );
});

export default PostPage;
