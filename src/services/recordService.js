const Record = require('../database/Record')

const getRecordForWorkout = (workoutId) => {
  try {
    const record = Record.getRecondForWorkout(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getRecordForWorkout,
}