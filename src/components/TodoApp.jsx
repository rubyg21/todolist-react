import React from "react";
import { useState } from "react";
import Todo from "./Todo";
import './TodoApp.css'

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  function handelChange(event) {
    const value = event.target.value;
    setTitle(value);
  }

  function hadleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    const temp = [...todos];
    temp.unshift(newTodo);

    setTodos(temp);
    setTitle("");
  }

  function hadleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={hadleSubmit}>
        <input onChange={handelChange} className="todoInput" value={title} />

        <input
          onClick={hadleSubmit}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />
      </form>
      <div className="todosContainer">
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={hadleUpdate}
            onDelete={handleDelete}
            
          >
          
          </Todo>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
