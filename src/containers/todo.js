import React, { Component } from "react";
import { connect } from "react-redux";
import {
  changeTitle,
  addTask,
  completeTask,
  removeTask
} from "./../actions/index";
import TodoTitle from "./../components/todo-title";
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

  handleTitleChange = ({ target: { value } }) => {
    const { changeTitle } = this.props;
    changeTitle(value);
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value
    });
  };

  render() {
    const { taskText } = this.state;
    const { title, tasks, completeTask, removeTask } = this.props;
    const isTasksExists = tasks && tasks.length > 0;
    const amountTasks =
      tasks && [...tasks].filter(task => !task.isCompleted).length;
    const sortedTasks = [...tasks].sort(
      (t1, t2) => t1.isCompleted - t2.isCompleted
    );
    return (
      <div>
        <TodoTitle titleText={title} onChange={this.handleTitleChange} />
        <TodoInput
          value={taskText}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        {isTasksExists && (
          <>
            <TodoList
              tasks={sortedTasks}
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
    title: state.title,
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeTitle: title => dispatch(changeTitle(title)),
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
