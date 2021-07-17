import { ADD_TODO, DELETE_TODO, COMPLETED_TODO } from "../action/type";

export interface Todo {
  id: number;
  title?: string;
  completed?: boolean;
}

export interface TodoAction {
  type: string;
  payload: Todo;
}

export const todoReducer = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.map((todo) => todo.id !== action.payload.id);
    case COMPLETED_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) todo.completed = !todo.completed;
        return todo;
      });
    default:
      return state;
  }
};
