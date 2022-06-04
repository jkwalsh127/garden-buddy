const { Schema, Types } = require('mongoose');

const scheduleSchema = new Schema(
  {
    scheduleId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    scheduleName: {
      type: String,
      required: true,
    },
    imageURL: {
      type: string,
      required: true,
    }
  },
);

const Schedule = model('schedule', scheduleSchema);

module.exports = Schedule;
