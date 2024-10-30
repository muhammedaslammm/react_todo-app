import Todo from "./Todo";

let TodoList = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map((todo, index) => (
        <Todo key={index} userTodo={todo} />
      ))}
    </section>
  );
};

export default TodoList;
