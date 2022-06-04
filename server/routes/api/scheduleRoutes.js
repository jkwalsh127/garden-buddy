const router = require('express').Router();
const {
  getGardens,
} = require('../../controllers/gardenController');

// /api/gardens
router.route('/').get(getGardens);

module.exports = router;
