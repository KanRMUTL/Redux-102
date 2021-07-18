import { todoReducer } from "./todoReducer";
import { combineReducers } from "redux";
import { sidebarReducer } from "./sidebarReducer";
const allReducer = combineReducers({
  todo: todoReducer,
  sidebar: sidebarReducer,
});

export default allReducer;

export type RootState = ReturnType<typeof allReducer>;
