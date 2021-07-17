import { ADD_TODO } from "./type";
import { Todo } from "../reducer/todoReducer";

const addTodo = (payload: Todo) => ({
  type: ADD_TODO,
  payload,
});

export default addTodo;
