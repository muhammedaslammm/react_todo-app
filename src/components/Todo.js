let Todo = (data) => {
  let todo = data.userTodo;
  return (
    <section className="todo">
      <div className="todo__name">{todo}</div>
      <div className="todo__delete">x</div>
    </section>
  );
};

// delete todo, but list of todos are in the left component. (component were the todos are present)

export default Todo;
