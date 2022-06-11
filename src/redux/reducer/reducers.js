import { ADD_TASK, TOGGLE_COMPLETE_TASK, UPDATE_DESCRIPTION, DELETE_TASK } from '../actions';

const INITIAL_STATE_TASKS = [];

const reducerTasks = (preventState = INITIAL_STATE_TASKS, action) => {
  const taskFilter = preventState.find((task) => task.id === action.id);
  switch (action.type) {
    case ADD_TASK:
      return [...preventState, action.payload];
    case TOGGLE_COMPLETE_TASK:
      taskFilter.isComplete = !taskFilter.isComplete;
      return [...preventState];
    case UPDATE_DESCRIPTION:
      taskFilter.description = action.description;
      return [...preventState];
    case DELETE_TASK:
      const taskFilterDelete = preventState.filter(task => task.id !== action.id);
      return [
        ...taskFilterDelete
      ]
    default:
      return preventState;
  }
};

export default reducerTasks;
