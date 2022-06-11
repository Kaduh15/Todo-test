export const ADD_TASK = 'ADD_TASK';

export const actionAddTask = (title) => ({type: ADD_TASK, payload: {title, isCompleted: false}});