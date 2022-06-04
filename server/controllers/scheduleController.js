const { Schedule } = require('../models/Schedule');

module.exports = {
  // Get a single schedule
  getSingleSchedule(req, res) {
    Schedule.findOne({ _id: req.params.scheduleId })
      .select('-__v')
      .then((schedule) =>
        !schedule
          ? res.status(404).json({ message: 'No schedule with that ID' })
          : res.json(schedule)
      )
      .catch((err) => res.status(500).json(err));
  },
};