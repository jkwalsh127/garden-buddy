const { Garden } = require('../models/Garden');

module.exports = {
  // Get all gardens
  getGardens(req, res) {
    Garden.find()
      .then(async (gardens) => {
        const gardenObj = {
          gardens,
        };
        return res.json(gardenObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
};