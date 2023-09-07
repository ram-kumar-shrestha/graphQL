const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    title: String!
    year: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    movies: [Movie!]!
    movie(title: String!): Movie
  }

  enum Nationality {
    AMERICAN
    CANADIAN
    BRITISH
    KOREAN
    AUSTRALIAN
    FRENCH
    SPANISH
    MEXICAN
  }
`;

module.exports = { typeDefs };
