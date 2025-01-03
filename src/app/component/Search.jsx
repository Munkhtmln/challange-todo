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

    setNewTodo("");
  };

  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };
  // const [buttonClassAll, setButtonClassAll] = useState("activebutton");
  // const [buttonClassActive, setButtonClassActive] = useState("offline");
  // const [buttonClassComplete, setButtonClassComplete] = useState("online");

  // const handleonline = () => {
  //   setButtonClassActive("online");
  //   setButtonClassAll("activebutton");
  //   setButtonClassComplete("offline");
  // };

  // const handleoffline = () => {
  //   setButtonClassActive("online");
  //   setButtonClassAll("offline");
  //   setButtonClassComplete("activebutton");
  // };

  // const handleActive = () => {
  //   setButtonClassActive("activebutton");
  //   setButtonClassAll("offline");
  //   setButtonClassComplete("online");
  // };
  function deleteHandler(index) {
    const isConfirmed = confirm("Are you sure you want to delete this task?");
    if (isConfirmed) {
      todos.splice(index, 1);
      setTodos([...todos]);
    }
  }

  const clearCompleted = (index) => {
    const clearcomfirmed = confirm("Are you sure you want to clear tasks?");
    if (clearcomfirmed == true) {
      setTodos([]);
    } else {
    }
  };

  const filteredTasks = todos.filter((task) => {
    if (activeFilter === "active") return !task.isCompleted;
    if (activeFilter === "completed") return task.isCompleted;
    return true;
  });

  const toggleIsCompleted = (index) => {
    const changedTodos = todos.map((t, i) =>
      i === todos.findIndex((todo) => todo === filteredTasks[index])
        ? { ...t, isCompleted: !t.isCompleted }
        : t
    );
    setTodos(changedTodos);
  };
  // const toggleIsCompleted = (index) => {
  //   let changedTodos = todos.map((t, idx) => {
  //     if (idx === index) {
  //       t.isCompleted = !t.isCompleted;
  //     }
  //     return t;
  //   });
  //   setTodos(changedTodos);
  // };

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
        <button
          onClick={() => handleFilter("all")}
          className={`all ${activeFilter === "all" ? "activebutton" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => handleFilter("active")}
          className={`active ${
            activeFilter === "active" ? "activebutton" : ""
          }`}
        >
          Active
        </button>
        <button
          onClick={() => handleFilter("completed")}
          className={`complete ${
            activeFilter === "completed" ? "activebutton" : ""
          }`}
        >
          Completed
        </button>
      </div>
      <div id="search">
        {filteredTasks.map((todo, index) => {
          return (
            <div key={index} className="checkbox">
              <input
                onChange={() => toggleIsCompleted(index)}
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
            <p>
              {todos.filter((todo) => todo.isCompleted).length} of{" "}
              {todos.length} tasks completed
            </p>
            <button onClick={clearCompleted}>Clear completed</button>
          </div>
        ) : (
          <p className="arildag">No tasks yet. Add one above</p>
        )}
      </div>
    </div>
  );
}
