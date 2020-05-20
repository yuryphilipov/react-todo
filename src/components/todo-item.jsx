import React from "react";
import "./style.scss";

const TodoItem = ({ id, text, isCompleted, completeTask, removeTask }) => {
  return (
    <li className="todo-item">
      <i
        className={
          isCompleted ? "mark far fa-check-square" : "mark far fa-square"
        }
        onClick={() => {
          completeTask(id);
        }}
      />
      <span className={isCompleted ? "text completed" : "text"}>{text}</span>
      <i className="fas fa-times" onClick={() => removeTask(id)} />
    </li>
  );
};

export default TodoItem;
