const { Garden } = require('../models');

const resolvers = {
  Query: {
    garden: async () => {
      return Garden.find({});
    },
  },
};

module.exports = resolvers;
