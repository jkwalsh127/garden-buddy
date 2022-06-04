const router = require('express').Router();
const {
  getSingleSchedule,
} = require('../../controllers/studentController');

// /api/schedule/:scheduleId
router.route('/:studentId').get(getSingleSchedule);

module.exports = router;
