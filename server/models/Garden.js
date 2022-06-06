const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
        type: Number, 
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    plantDate: {
        type: Number, 
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    }, 
    firstHarvest: {
        type: Number, 
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    }, 
    lastHarvest: {
        type: Number, 
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    noteText: { 
        type: String, 
    }, 
});

const Garden = model('Garden', gardenSchema);

module.exports = Garden;