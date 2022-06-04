const router = require('express').Router();
const {
  getSingleSchedule,
} = require('../../controllers/scheduleController');

// /api/schedule/:scheduleId
router.route('/:studentId').get(getSingleSchedule);

module.exports = router;
