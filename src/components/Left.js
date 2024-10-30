import InputSection from "./InputSection";
import TodoList from "./TodoList";
import { useState } from "react";

let LeftComponent = () => {
  let [todos, setTodos] = useState([]);

  let addTodo = (inputValue) => {
    setTodos([...todos, inputValue]);
  };

  let updateTodo = (index, newValue) => {
    let updatedTodos = todos.map((todo, i) => {
      return i === index ? newValue : todo;
    });
    setTodos(updatedTodos);
  };

  let deleteTodo = (index) => {
    let newTodoList = todos.filter((todo, i) => {
      if (i !== index) return todo;
    });
    setTodos(newTodoList);
  };

  return (
    <div className="todo__application">
      <InputSection addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default LeftComponent;
