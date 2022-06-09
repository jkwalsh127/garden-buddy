const { AuthenticationError } = require('apollo-server-express');
const { Garden, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    gardens: async () => {
      const gardens = Garden.find()
      console.log(gardens);
      return gardens;
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('gardens');
    },
    users: async () => {
      const users = User.find()
      console.log(users);
      return users;
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      console.log("addUser");
      try {
        const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
      }
      catch (error) {
        console.log(error);
      }
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
    },
    updateGarden: async (_id, args) => {
   
      return await Garden.findByIdAndUpdate( { _id: id }, args, { new: true });
    },
    removeGarden: async (parent, args , context) => {
      if (context.gardens) {
        return Garden.findByIdAndDelete({ _id: context.gardens._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
