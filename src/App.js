import React from "react";
import "./App.css";
import Title from "./components/title";
import Todo from "./containers/todo";

function App() {
  return (
    <div className="App">
      <Title titleText="Todo List" />
      <Todo />
    </div>
  );
}

export default App;
