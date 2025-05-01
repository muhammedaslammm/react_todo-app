import Todo from "./Todo";

let TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <section className="todos">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </section>
  );
};

export default TodoList;
