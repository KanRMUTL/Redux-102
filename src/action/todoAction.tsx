import { ADD_TODO, COMPLETED_TODO, DELETE_TODO } from "./type";
import { Todo } from "../reducer/todoReducer";

const addTodo = (payload: Todo) => ({
  type: ADD_TODO,
  payload,
});

const completedTodo = (id: number) => ({
  type: COMPLETED_TODO,
  payload: {
    id,
  },
});

const deleteTodo = (payload: Todo) => ({
  type: DELETE_TODO,
  payload,
});

const todoAction = {
  addTodo,
  completedTodo,
  deleteTodo,
};

export default todoAction;
