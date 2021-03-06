import { nanoid } from 'nanoid';
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_COMPLETE_TASK = 'TOGGLE_COMPLETE_TASK';
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
export const DELETE_TASK = 'DELETE_TASK';

export const actionDeleteTask = (id = '') => ({
  type: DELETE_TASK,
  id,
});

export const actionUpdateDescription = (id = '', description = '') => ({
  type: 'UPDATE_DESCRIPTION',
  id,
  description,
});

export const actionToggleCompleteTask = (id = '') => ({
  type: TOGGLE_COMPLETE_TASK,
  id,
});

export const actionAddTask = (text) => {
  if(!text) {
    text = 'Tarefa'
  }
  return {
    type: ADD_TASK,
    payload: {
      id: nanoid(),
      title: text,
      isComplete: false,
      description: 'Click em Editar para Adicionar uma Descrição',
    },
  };
};
