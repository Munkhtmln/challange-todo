"use client";

import { useState } from "react";
import "../styles/search.css";

export default function () {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState([]);

  const addTodoHandler = () => {
    newTodo.length == 0
      ? alert("please enter a text")
      : setTodos([...todos, { title: newTodo, isCompleted: false }]);
  };

  const [buttonClassAll, setButtonClassAll] = useState("activebutton");
  const [buttonClassActive, setButtonClassActive] = useState("offline");
  const [buttonClassComplete, setButtonClassComplete] = useState("online");

  const handleonline = () => {
    setButtonClassActive("online");
    setButtonClassAll("activebutton");
    setButtonClassComplete("complete");
  };

  const handleoffline = () => {
    setButtonClassActive("online");
    setButtonClassAll("offline");
    setButtonClassComplete("activebutton");
  };

  const handleActive = () => {
    setButtonClassActive("activebutton");
    setButtonClassAll("offline");
    setButtonClassComplete("complete");
  };
  function deleteHandler(index) {
    const garbage = todos.filter((todo, idx) => idx != index);
    const isConfirmed = confirm("Are you sure you want to delete this task?");
    if (isConfirmed == true) {
      setTodos(garbage);
    } else {
    }
  }

  const toggleIsCompleted = (event) => {
    let changedTodos = todos.map((t) => {
      if (t.todo === event.todo) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(changedTodos);
  };

  return (
    <div className="Container">
      <div className="todo">
        <p>To-Do List</p>
      </div>
      <div className="Search">
        <input
          value={newTodo}
          type="text"
          placeholder="Add a new task..."
          name=""
          id=""
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodoHandler}>Add</button>
      </div>
      <div className="buttons">
        <button id={buttonClassAll} onClick={handleonline} className="all">
          All
        </button>
        <button
          id={buttonClassActive}
          onClick={handleActive}
          className="active"
        >
          Active
        </button>
        <button
          id={buttonClassComplete}
          onClick={handleoffline}
          className={"complete"}
        >
          Completed
        </button>
      </div>
      <div id="search">
        {todos.map((todo, index) => {
          return (
            <div key={index} className="checkbox">
              <input
                onChange={() => toggleIsCompleted(todo)}
                type="checkbox"
                name=""
                id=""
                checked={todo.isCompleted}
              />
              <p className={todo.isCompleted ? "compled" : ""}>{todo.title} </p>
              <button
                onClick={() => {
                  deleteHandler(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div>
        {todos.length ? (
          <div className="completed">
            <p>tasks completed</p>
            <button>Clear completed</button>
          </div>
        ) : (
          <p className="arildag">No tasks yet. Add one above</p>
        )}
      </div>
    </div>
  );
}
