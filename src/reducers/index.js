import { combineReducers } from "redux";
import { tasksReducer } from "./tasks";
import { titleReducer } from "./title";

export const rootReducer = combineReducers({
  title: titleReducer,
  tasks: tasksReducer
});
