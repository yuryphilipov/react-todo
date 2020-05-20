import React from "react";

const TodoInput = ({ value, onKeyPress, onChange }) => {
  return (
    <input
      type="text"
      className="todo-input"
      value={value}
      placeholder="Add task and press Enter"
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default TodoInput;
