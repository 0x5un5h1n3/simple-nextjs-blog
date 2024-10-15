// server.js
const { ApolloServer, gql } = require("apollo-server");

// Sample data
const posts = [
  { id: "1", title: "First Post", excerpt: "This is the first post." },
  { id: "2", title: "Second Post", excerpt: "This is the second post." },
];

// Type definitions
const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    excerpt: String!
  }

  type Query {
    posts: [Post]
  }
`;

// Resolvers
const resolvers = {
  Query: {
    posts: () => posts,
  },
};

// Create Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
