"use client";

import { useState } from "react";
import "../styles/search.css";

export default function () {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodoHandler = () => {
    setTodos([...todos, newTodo]);
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
  return (
    <div className="Container">
      <div className="todo">
        <p>To-Do List</p>
      </div>
      <div className="Search">
        <input
          type=""
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
          className="complete"
        >
          Completed
        </button>
      </div>
      <div>
        {todos.map((todo) => {
          return (
            <div className="checkbox">
              <input type="checkbox" name="" id="" />
              <p>{todo}</p>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
