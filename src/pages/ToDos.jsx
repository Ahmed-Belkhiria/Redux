import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddToDo from "../components/AddToDo";
import Task from "../components/Task";
import { validateToDo } from "../redux/toDoSlice";

const ToDos = () => {
  const dispatch = useDispatch();
  // const handleValidate = (id) => {
  //   dispatch(validateToDo(id));
  // };
  const todos = useSelector((state) => state.toDo.toDos);
  console.log(todos);
  return (
    <div className="toDoContainer">
      <h1>Todo's</h1>
      <div className="toDoWrapper">
        {todos.map((todo) => (
          <>
            <Task todo={todo} />
          </>
        ))}
      </div>
      <AddToDo />
    </div>
  );
};

export default ToDos;
