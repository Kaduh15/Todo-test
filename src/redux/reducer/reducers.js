import { ADD_TASK, TOGGLE_COMPLETE_TASK } from '../actions';

const INITIAL_STATE_TASKS = [];

const reducerTasks = (preventState = INITIAL_STATE_TASKS, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...preventState, action.payload];
    case TOGGLE_COMPLETE_TASK:
      const taskFilter = preventState.find((task) => task.id === action.id);
      taskFilter.isComplete = !taskFilter.isComplete;
      return [...preventState];
    default:
      return preventState;
  }
};

export default reducerTasks;
