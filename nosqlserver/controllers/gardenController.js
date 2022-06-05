const { Garden } = require('../models');

module.exports = {
  // Get all gardens
  getGardens(req, res) {
    Garden.find()
      .then((gardens) => res.json(gardens))
      .catch((err) => res.status(500).json(err));
  },
};
