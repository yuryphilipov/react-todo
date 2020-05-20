import { load } from "redux-localstorage-simple";
import { CHANGE_TITLE } from "./../constants";

let initialState = load({ namespace: "todo-list" });

if (!initialState || !initialState.title) {
  initialState = { title: "New Task List" };
}

// const initialState = {
//   title: "Task"
// };

export function titleReducer(state = initialState.title, { type, titleText }) {
  switch (type) {
    case CHANGE_TITLE:
      return titleText;
    default:
      return state;
  }
}
