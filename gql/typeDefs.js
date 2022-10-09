const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String!
    cake: [Cake!]!
    coffe: [Coffe!]!
  }

  type Cake {
    id: ID!
    name: String!
    price: Float!
    tag: String!
  }

  type Coffe {
    id: ID!
    name: String!
    price: String!
    tag: String!
  }

  input Product {
    name: String!
    price: String!
    tag: String!
  }

  type Bill {
    totalCost: Float!
  }

  input BillInput {
    name: String
    price: String
    quantity: String
  }

  type Mutation {
    createCake(cake: Product): Cake
    createCoffe(coffe: Product): Coffe
    createBill(input: [BillInput!]!): Bill
  }
`;

module.exports = typeDefs;
