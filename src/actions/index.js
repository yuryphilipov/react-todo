import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from "./../constants";

export const addTask = (id, text, isCompleted) => {
  return {
    type: ADD_TASK,
    id,
    text,
    isCompleted
  };
};

export const completeTask = id => {
  return {
    type: COMPLETE_TASK,
    id
  };
};

export const removeTask = id => {
  return {
    type: REMOVE_TASK,
    id
  };
};
