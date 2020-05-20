import React from "react";
import TodoItem from "./todo-item";
import "./style.scss";

const TodoList = ({ tasks, completeTask, removeTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map(task => {
        return (
          <TodoItem
            id={task.id}
            key={task.id}
            text={task.text}
            isCompleted={task.isCompleted}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
