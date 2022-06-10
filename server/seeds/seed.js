const db = require('../config/connection');
const { Garden, User } = require('../models');

const gardenData = require('./gardenData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  await Garden.deleteMany({});
  await User.deleteMany({});
  
  const gardens = await Garden.insertMany(gardenData);
  const users = await User.insertMany(userData);

  console.log(gardens);
  console.log(users);
  console.log('Gardens seeded!');
  process.exit(0);
});


