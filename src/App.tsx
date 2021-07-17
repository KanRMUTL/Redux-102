import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./reducer/";
import { Todo } from "./reducer/todoReducer";
import { addTodo, completedTodo, deleteTodo } from "./action";
function App() {
  // const todo = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  const newTodo: Todo = {
    id: 1,
    title: "New todo",
    completed: false,
  };
  useEffect(() => {
    dispatch(addTodo(newTodo));
    dispatch(completedTodo(1));
    // dispatch(deleteTodo(newTodo));
  }, []);

  return <></>;
}

export default App;
