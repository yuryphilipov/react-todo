import React from "react";
import ContentEditable from "react-contenteditable";
import "./style.scss";

const TodoTitle = ({ titleText, onChange }) => {
  // return <h1>{titleText}</h1>;
  return (
    <ContentEditable
      className="todo-title"
      onChange={onChange}
      html={titleText}
    />
  );
};

export default TodoTitle;
