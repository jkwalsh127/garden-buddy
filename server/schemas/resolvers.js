const { Garden } = require('../models');

const resolvers = {
  Query: {
    garden: async () => {
      return Garden.find({});
    }
  },
  Mutation: {
    createGarden: async (parent, { vegetable, variety, startedAs, sowDate, plantDate, firstHarvest, lastHarvest, notes }) => {
      return await Garden.create({ vegetable, variety, startedAs, sowDate, plantDate, firstHarvest, lastHarvest, notes });
    }
  }
};

module.exports = resolvers;
