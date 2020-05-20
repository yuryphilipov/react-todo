import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask, completeTask, removeTask } from "./../actions/index";
import TodoList from "./../components/todo-list";
import TodoInput from "./../components/todo-input";
import TodoFooter from "../components/todo-footer";

class Todo extends Component {
  state = {
    taskText: ""
  };

  handleKeyPress = ({ key }) => {
    const { taskText } = this.state;
    if (key === "Enter") {
      const { addTask } = this.props;
      addTask(new Date().getTime(), taskText, false);
      this.setState({
        taskText: ""
      });
    }
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value
    });
  };

  render() {
    const { taskText } = this.state;
    const { tasks, completeTask, removeTask } = this.props;
    const isTasksExists = tasks && tasks.length > 0;
    const amountTasks =
      tasks && [...tasks].filter(task => !task.isCompleted).length;
    return (
      <div>
        <TodoInput
          value={taskText}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        {isTasksExists && (
          <>
            <TodoList
              tasks={tasks}
              completeTask={completeTask}
              removeTask={removeTask}
            />
            <TodoFooter amountTasks={amountTasks} />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: (id, text, isCompleted) =>
      dispatch(addTask(id, text, isCompleted)),
    completeTask: id => dispatch(completeTask(id)),
    removeTask: id => dispatch(removeTask(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
