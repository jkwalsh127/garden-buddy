const router = require('express').Router();
const gardenRoutes = require('./gardenRoutes');

router.use('/gardens', gardenRoutes);

module.exports = router;