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
    price: String!
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
    id: ID!
    product1: Float
    product2: Float
    product3: Float
    product4: Float
    product5: Float
    product6: Float
  }

  input BillInput {
    product1: Float
    product2: Float
    product3: Float
    product4: Float
    product5: Float
    product6: Float
  }

  type Mutation {
    createCake(cake: Product): Cake
    createCoffe(coffe: Product): Coffe
    createBill(input: BillInput): Bill
  }
`;

module.exports = typeDefs;
