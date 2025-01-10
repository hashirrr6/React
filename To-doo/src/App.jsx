import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    task: "",
    todo: [],
  };

  // Handle changes in the input field
  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  // Add a task to the list
  addTask = () => {
    const { task, todo } = this.state;
    if (task) {
      this.setState({ todo: [...todo, { task, completed: false }], task: "" });
    }
  };

  // Handle task deletion
  handleDelete = (ind) => {
    const { todo } = this.state;
    this.setState({
      todo: todo.filter((item, index) => index !== ind),
    });
  };

  // Toggle task completion (checkbox click)
  handleToggle = (ind) => {
    const { todo } = this.state;
    const updatedTodo = [...todo];
    updatedTodo[ind].completed = !updatedTodo[ind].completed;
    this.setState({ todo: updatedTodo });
  };

  // Optional: Handle task edit
  handleEdit = (ind) => {
    const { todo } = this.state;
    const newTask = prompt("Edit task:", todo[ind].task);
    if (newTask) {
      const updatedTodo = [...todo];
      updatedTodo[ind].task = newTask;
      this.setState({ todo: updatedTodo });
    }
  };

  render() {
    return (
      <div>
        <div className="head">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Task"
            value={this.state.task}
          />
          <button onClick={this.addTask}>ADD</button>
        </div>
        <ul>
          {this.state.todo.map((el, ind) => (
            <li key={ind}>
              <span
                style={{
                  textDecoration: el.completed ? "line-through" : "none", // Apply line-through if completed
                }}
              >
                {el.task}
              </span>
              <input
                type="checkbox"
                checked={el.completed}
                onChange={() => this.handleToggle(ind)} // Toggle completion status
              />{" "}
              <button onClick={() => this.handleEdit(ind)}>Edit</button>{" "}
              <button onClick={() => this.handleDelete(ind)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}CDATASection

export default App;
