import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from "../constants";
import { load } from "redux-localstorage-simple";

let initialState = load({ namespace: "todo-list" });

if (!initialState || !initialState.tasks) {
  initialState = { tasks: [] };
}
// const initialState = {
//   tasks: [
//     {
//       id: 1,
//       text: "Learn ReactJS",
//       isCompleted: true
//     },
//     {
//       id: 2,
//       text: "Learn Redux",
//       isCompleted: false
//     }
//   ]
// };

export function tasksReducer(
  state = initialState.tasks,
  { type, id, text, isCompleted }
) {
  switch (type) {
    case ADD_TASK:
      return [...state, { id, text, isCompleted }];
    case COMPLETE_TASK:
      return [...state].map(task => {
        if (id === task.id) task.isCompleted = !task.isCompleted;
        return task;
      });
    case REMOVE_TASK:
      return [...state].filter(task => id !== task.id);
    default:
      return state;
  }
}
