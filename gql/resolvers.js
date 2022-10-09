const Cake = require("../models/Cake");
const Coffe = require("../models/Coffe");

const resolvers = {
  Query: {
    hello: () => "Hello Tanshi",
    cake: async () => await Cake.find(),
    coffe: async () => await Coffe.find(),
  },

  Bill: {
    totalCost: async (parent, args, context, info) => {
      return parent;
    },
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
      const cost = await input.map((single) => {
        return Number(single.price) * Number(single.quantity);
      });

      const totalcost = cost.reduce((prev, cur) => prev + cur);
      console.log(totalcost);

      return totalcost;
    },
  },
};

module.exports = resolvers;
