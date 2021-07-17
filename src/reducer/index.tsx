import { todoReducer } from "./todoReducer";
import { combineReducers } from "redux";
const allReducer = combineReducers({
  todo: todoReducer,
});

export default allReducer;

export type RootState = ReturnType<typeof allReducer>;
