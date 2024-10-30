import InputSection from "./InputSection";
import TodoList from "./TodoList";
import { useState } from "react";

let LeftComponent = () => {
  let [inputValue, setInputValue] = useState("");
  let [todos, setTodos] = useState([]);

  let trackInput = (event) => {
    setInputValue(event.target.value);
  };

  let addTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  let deleteTodo = () => {};
  return (
    <div className="todo__application">
      <InputSection
        trackInput={trackInput}
        addTodo={addTodo}
        inputValue={inputValue}
      />
      <TodoList todos={todos} />
    </div>
  );
};

export default LeftComponent;
