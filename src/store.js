import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/index";
import { save } from "redux-localstorage-simple";

export const store = createStore(
  rootReducer,
  applyMiddleware(save({ namespace: "todo-list" }))
);
