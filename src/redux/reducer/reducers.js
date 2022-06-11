import { ADD_TASK } from '../actions';

const INITIAL_STATE_TASKS = [
];

const reducerTasks = (preventState = INITIAL_STATE_TASKS, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...preventState,
        action.payload
      ]
    default:
      return preventState;
  }
};

export default reducerTasks;
