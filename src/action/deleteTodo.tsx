import { DELETE_TODO } from "./type";
import { Todo } from "../reducer/todoReducer";

const deleteTodo = (payload: Todo) => ({
  type: DELETE_TODO,
  payload,
});

export default deleteTodo;
