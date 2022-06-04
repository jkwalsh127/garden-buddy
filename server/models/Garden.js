const { Schema, model } = require('mongoose');

const gardenSchema = new Schema(
  {
    vegetable: {
      type: String,
      required: true,
    },
    variety: {
      type: String,
    },
    startedAs: {
      type: String,
    },
    sowDate: {
      type: String,
    },
    plantDate: {
      type: String,
    },
    firstHarvest: {
      type: String,
    },
    lastHarvest: {
      type: String,
    },
    notes: {
      type: String,
    }
  },
);

const Garden = model('garden', gardenSchema);

module.exports = Garden;