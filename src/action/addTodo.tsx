import { ADD_TODO } from "./type";
import { TodoAction } from "../reducer/todoReducer";

const addTodo = (payload: TodoAction) => ({
  type: ADD_TODO,
  payload,
});

export default addTodo;
