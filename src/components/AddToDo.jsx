import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../redux/toDoSlice";

const AddToDo = () => {
  const dispatch = useDispatch();
  const oldId = useSelector((state) => state.toDo.total);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newToDo = { id: oldId + 1, desc: value, isDone: false };
    dispatch(addToDo(newToDo));
    console.log(e);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="addToDo">
        <label>Add a new todo:</label>
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  );
};

export default AddToDo;
