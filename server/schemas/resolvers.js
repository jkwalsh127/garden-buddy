const { AuthenticationError } = require('apollo-server-express');
const { Garden, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('gardens');
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('gardens');
    },
    gardens: async () => {
      return Garden.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('gardens');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
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
        throw new AuthenticationError('Incorrect password');
      }
      const token = signToken(user);
      return { token, user };
    },
    addGarden: async (parent, { vegetable, variety, startedAs, sowDate, plantDate, firstHarvest, lastHarvest, notes }, context) => {
      if (context.user) {
        const garden = await Garden.create({
          vegetable, 
          variety, 
          startedAs, 
          sowDate, 
          plantDate, 
          firstHarvest, 
          lastHarvest, 
          notes
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { gardens: garden._id} }
        );

      return garden;
    }
    throw new AuthenticationError('You must be logged in to create a new garden!');
  }, 
  // updateGarden: async (parent, { gardenId, vegetable, variety, startedAs, sowDate, plantDate, firstHarvest, lastHarvest, notes }) => {
  //   return Garden.findOneAndUpdate{
  //     { _id: gardenId  }, 
  //     {
  //       $addToSet: { gardens: { vegetable,  variety, startedAs, sowDate, plantDate, firstHarvest, lastHarvest, notes } }
  //     },
  //     {
  //       new: true, 
  //       runValidators: true, 
  //     }
  //   }
      // return await Garden.findByIdAndUpdate( { _id: _id }, args, { new: true });
  // },
  removeGarden: async (parent, { gardenId }, context) => {
    if (context.user) {
      const garden = await Garden.findOneAndDelete({ _id: gardenId });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { gardens: garden._id } }
      );

      return garden;
    }
    throw new AuthenticationError('You need to be logged in to delete a garden!');
    }  
  },
};

module.exports = resolvers;
