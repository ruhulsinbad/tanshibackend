const Bill = require("../models/Bill");
const Cake = require("../models/Cake");
const Coffe = require("../models/Coffe");

const resolvers = {
  Query: {
    hello: () => "Hello Tanshi",
    cake: async () => await Cake.find(),
    coffe: async () => await Coffe.find(),
  },

  Mutation: {
    createCake: async (_, { cake }) => {
      const newCake = await Cake.create({ ...cake });
      return newCake;
    },

    createCoffe: async (_, { coffe }) => {
      const newCoffe = await Coffe.create({ ...coffe });
      return newCoffe;
    },

    createBill: async (parent, { input }) => {
      const newBill = await Bill.create({ ...input });
      return newBill;
    },
  },
};

module.exports = resolvers;
