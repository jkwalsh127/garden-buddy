const { Schema, model } = require('mongoose');

const scheduleSchema = new Schema(
  {
    scheduleName: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    }
  },
);

const Schedule = model('schedule', scheduleSchema);

module.exports = Schedule;
