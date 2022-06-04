const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema(
  {
    scheduleName: String,
    imageURL: String,
    img:
    {
      data: Buffer,
      contentType: String
    }
  },
);

module.exports = new mongoose.model('Schedule', scheduleSchema)