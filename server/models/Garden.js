const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const gardenSchema = new Schema ({
    vegetable: { 
        type: String, 
        required: true, 
    }, 
    variety: { 
        type: String, 
        required: true,
    }, 
    startedAs: {
        type: String, 
        required: true, 
    }, 
    sowDate: {
        type: String, 
        default: Date.now,
        // get: (timestamp) => dateFormat(timestamp),
    },
    plantDate: {
        type: String, 
        default: Date.now,
        // get: (timestamp) => dateFormat(timestamp),
    }, 
    firstHarvest: {
        type: String, 
        default: Date.now,
        // get: (timestamp) => dateFormat(timestamp),
    }, 
    lastHarvest: {
        type: String, 
        default: Date.now,
        // get: (timestamp) => dateFormat(timestamp),
    },
    notes: { 
        type: String, 
    },
});

const Garden = model('Garden', gardenSchema);

module.exports = Garden;