import React from "react";
import ToDos from "./pages/ToDos";
import AddToDo from "./components/AddToDo";

const App = () => {
  return (
    <div className="todo-app container">
      <ToDos />
    </div>
  );
};

export default App;
