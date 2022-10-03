const { EventEmitter } = require("events");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const cors = require("cors");

const emitter = new EventEmitter();

emitter.setMaxListeners(90);

const typeDefs = require("./gql/typeDefs");
const resolvers = require("./gql/resolvers");

const dburl =
  "mongodb+srv://sinbad:1025Sinbad1561@cluster0.q94ur.mongodb.net/tanshiCafe?retryWrites=true&w=majority";

mongoose
  .connect(dburl)
  .then(console.log("DB connected"))
  .catch((error) => console.log(error.message));

const createServer = async () => {
  const app = express();
  app.use(cors());
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
  });
  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server is running on 4000");
  });
};

createServer();
