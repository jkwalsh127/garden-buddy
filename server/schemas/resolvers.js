const { Garden } = require('../models');

const resolvers = {
  Query: {
    garden: async () => {
      return Garden.find({});
    },
  },
  Mutation: {
    createGarden: async (parent, args) => {
      const garden = await Garden.create(args);
      return garden;
    }
  }
};

module.exports = resolvers;
