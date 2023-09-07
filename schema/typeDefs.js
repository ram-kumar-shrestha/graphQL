const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
  }

  type Query {
    users: [User!]!
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
