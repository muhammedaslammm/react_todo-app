import { useState } from "react";

let Todo = ({ index, todo, updateTodo, deleteTodo }) => {
  let [editStatus, setEditStatus] = useState(false);
  let [newTodo, setNewTodo] = useState(todo);

  let saveChange = () => {
    updateTodo(index, newTodo);
    setEditStatus(false);
  };
  return (
    <section className="todo">
      {editStatus ? (
        <>
          <input
            className="todo__input"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveChange();
            }}
          ></input>
          <div className="todo__input-button--save" onClick={saveChange}>
            save
          </div>
        </>
      ) : (
        <>
          <div className="todo__name" onClick={() => setEditStatus(true)}>
            {todo}
          </div>
          <div className="todo__delete" onClick={() => deleteTodo(index)}>
            <i class="fa-solid fa-circle-xmark"></i>
          </div>
        </>
      )}
    </section>
  );
};

// delete todo, but list of todos are in the left component. (component were the todos are present)

export default Todo;
