import { useState } from "react";

let InputSection = ({ addTodo }) => {
  let [inputValue, setInputValue] = useState("");

  let saveTodo = () => {
    if (inputValue.trim().length) {
      addTodo(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <section className="search">
      <input
        className="search__input"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") saveTodo();
        }}
        value={inputValue}
        placeholder="Add todo here"
      ></input>
      <input
        className="search__button"
        type="button"
        value="Add Todo"
        onClick={saveTodo}
      ></input>
    </section>
  );
};

export default InputSection;
