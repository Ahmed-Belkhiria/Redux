import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo, validateToDo } from "../redux/toDoSlice";

const Task = ({ todo }) => {
  const dispatch = useDispatch();
  const handleValidate = (todo) => dispatch(validateToDo(todo));
  const handleDelete = (todo) => dispatch(deleteToDo(todo));
  return (
    <>
      <div className="toDo">
        <div className="toDoData">
          <span className="toDoDetails id">{todo.id}</span>
          <span className="toDoDetails desc">{todo.desc}</span>
        </div>
        <div className="status">
          <span className="toDoDetails status">
            {todo.isDone ? "Completed" : "Pending"}
          </span>
          {!todo.isDone && (
            // <img onClick={handleValidate(todo.id)} src="/check.png" alt="" />
            <img src="/check.png" onClick={() => handleValidate(todo)} alt="" />
          )}
          <img src="/delete.jpg" onClick={() => handleDelete(todo)} alt="" />
        </div>
      </div>
    </>
  );
};

export default Task;
