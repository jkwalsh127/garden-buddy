const connection = require('../config/connection');
const { Garden } = require('../models');

connection.on('error', (err) => err);

const gardens = [
  {
      "vegetable": "Tomato",
      "variety": "Big Beef",
      "startedAs": "seed",
      "sowDate": "2/14/2021",
      "plantDate": "5/1/2021",
      "firstHarvest": "7/1/2021",
      "lastHarvest": "8/14/2021",
      "notes": "A staple variety. Made a lot of sauce from these."
  },
  {
      "vegetable": "Eggplant",
      "variety": "Black Beauty",
      "startedAs": "seed",
      "sowDate": "2/14/2021",
      "plantDate": "5/1/2021",
      "firstHarvest": "7/14/2021",
      "lastHarvest": "8/30/2021",
      "notes": "Really great for stuffing."
  }
];

connection.once('open', async () => {
  console.log('connected');
  console.log(gardens);

  // Drop existing gardens
  await Garden.deleteMany({});

  // Add gardensto the collection and await the results
  await Garden.collection.insertMany(gardens);

  // Log out the seed data to indicate what should appear in the database
  console.table(gardens);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
