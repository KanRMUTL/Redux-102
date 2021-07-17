import { COMPLETED_TODO } from "./type";

const completedTodo = (id: number) => ({
  type: COMPLETED_TODO,
  payload: {
    id,
  },
});

export default completedTodo;
