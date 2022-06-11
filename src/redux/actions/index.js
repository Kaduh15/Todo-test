import { nanoid } from 'nanoid';
export const ADD_TASK = 'ADD_TASK';

export const actionAddTask = (text) => ({
  type: ADD_TASK,
  payload: {
    id: nanoid(),
    title: text,
    isComplete: false,
    description: 'Click em Editar para Adicionar uma Descrição',
  },
});
