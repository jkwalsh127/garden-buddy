const sequelize = require('../config/connection');
const { Garden } = require('../models');

const gardenData = require('./gardenData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Garden.bulkCreate(gardenData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();