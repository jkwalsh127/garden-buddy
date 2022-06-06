const { Garden, User } = require('../models');

const resolvers = {
  Query: {
    gardens: async () => {
      const gardens = Garden.find()
      console.log(gardens);
      return gardens;
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('gardens');
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    createGarden: async (parent, { vegetable, variety, startedAs, sowDate, plantDate, firstHarvest, lastHarvest, notes }) => {
      return await Garden.create({ vegetable, variety, startedAs, sowDate, plantDate, firstHarvest, lastHarvest, notes });
    }
  }
};

module.exports = resolvers;
