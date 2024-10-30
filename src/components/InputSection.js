let InputSection = ({ trackInput, addTodo, inputValue }) => {
  return (
    <section className="search">
      <input
        className="search__input"
        type="text"
        onChange={trackInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTodo();
        }}
        value={inputValue}
      ></input>
      <input
        className="search__button"
        type="button"
        value="Add Todo"
        onClick={addTodo}
      ></input>
    </section>
  );
};

export default InputSection;
