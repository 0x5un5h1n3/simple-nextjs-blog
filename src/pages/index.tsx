import { useEffect } from "react";
import Post from "../components/Post";
import Navbar from "../components/Navbar";
import { observer } from "mobx-react-lite";
import { ApolloProvider, useQuery, gql } from "@apollo/client";
import client from "../apollo-client";
import postStore from "../store/PostStore";
import Footer from "../components/Footer";

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      excerpt
    }
  }
`;

const Home = observer(() => {
  const { loading, error } = useQuery(GET_POSTS, {
    onCompleted: (data) => {
      postStore.setPosts(data.posts);
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts</p>;

  return (
    <div>
      <Navbar />
      <section className="hero">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to My Blog</h1>
        <p className="mt-4 text-gray-600">
          Explore the latest articles and insights.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {postStore.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <div>
        <Navbar />
        <section className="hero">{/* Hero content */}</section>
        {/* Posts grid */}
        <Footer />
      </div>
    </div>
  );
});

const HomeWithApollo = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);

export default HomeWithApollo;
