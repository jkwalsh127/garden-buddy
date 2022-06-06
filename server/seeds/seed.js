const db = require('../config/connection');
const { Garden } = require('../models');

const gardenData = require('./gardenData.json');

db.once('open', async () => {
  await Garden.deleteMany({});

  const gardens = await Garden.insertMany(gardenData);

  console.log(gardens);
  console.log('Gardens seeded!');
  process.exit(0);
});
