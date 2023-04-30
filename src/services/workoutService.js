const { v4: uuid } = require('uuid')
const Workout = require('../database/Workout')

const getAllWorkouts = (filterParams) => {
  try {
    const allWorkouts = Workout.getAllWorkouts(filterParams);
    return allWorkouts;
  } catch (error) {
    throw error;
  }
}
const getOneWorkout = (workoutID) => {
  try {
		const workout = Workout.getOneWorkout(workoutID);
		return workout;
	} catch (error) {
		throw error;
	}
}
const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
		...newWorkout,
		id: uuid(),
		createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
		updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
	};
  try {
		const createdWorkout = Workout.createNewWorkout(workoutToInsert);
		return createdWorkout;
	} catch (error) {
		throw error;
	}
}
const updateOneWorkout = (workoutID, changes) => {
  try {
		const updatedWorkout = Workout.updateOneWorkout(workoutID, changes);
		return updatedWorkout;
	} catch (error) {
		throw error;
	}
}
const deleteOneWorkout = (workoutID) => {
  try {
		Workout.deleteOneWorkout(workoutID);
	} catch (error) {
		throw error;
	}
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
}
