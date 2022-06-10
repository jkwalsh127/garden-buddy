const { Schema, model } = require('mongoose');

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
    },
});

const Garden = model('Garden', gardenSchema);

module.exports = Garden;