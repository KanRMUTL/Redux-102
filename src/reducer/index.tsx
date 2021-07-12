import { todoReducer } from "./todoReducer";
import { combineReducers } from "redux";

const allReducer = {
  todo: todoReducer,
};

export default allReducer;
