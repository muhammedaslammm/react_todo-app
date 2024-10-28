import { useState, useRef } from "react";

let TodoComponent = () => {
  let currentInput = useRef();
  let [inputs, setInputs] = useState([]);

  let addTudo = () => {
    let userInput = currentInput.current.value.trim();
    if (userInput.length) {
      setInputs([...inputs, userInput]);
    } else {
      window.alert("invalid input");
    }
  };

  return (
    <section className="search">
      <input ref={currentInput} className="search__input" type="text"></input>
      <input
        className="search__button"
        type="button"
        value="Add Todo"
        onClick={addTudo}
      ></input>
    </section>
  );
};

export default TodoComponent;
