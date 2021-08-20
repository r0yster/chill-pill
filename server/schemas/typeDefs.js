// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  scalar Date

  type User {
    _id: ID
    username: String!
    email: String!
  }

  type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Event {
    _id: ID!
    eventname: String!
    location: String!
    date: Date!
    time: String!
  }

  type Query {
    me: User
    events: [Event!]
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addComment(postId: ID!, commentBody: String!): Post
  }
`;
// export the typeDefs
module.exports = typeDefs;
