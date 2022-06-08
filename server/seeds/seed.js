const db = require('../config/connection');
const { Garden, User } = require('../models');

const gardenData = require('./gardenData.json');

db.once('open', async () => {
  await Garden.deleteMany({});
  await User.deleteMany({});
  
  const gardens = await Garden.insertMany(gardenData);

  console.log(gardens);
  console.log('Gardens seeded!');
  process.exit(0);
});


