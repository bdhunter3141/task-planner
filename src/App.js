import React, { Component } from "react";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import Login from "./Login";

class App extends Component {
  state = {
    authenticated: false,
    tasks: [
      { id: 1, content: "Clean the fridge", complete: true },
      { id: 2, content: "Fire Rebecca", complete: false }
    ]
  };

  createTask = task => {
    const tasks = this.state.tasks;
    tasks.push({ id: tasks.length + 1, content: task, complete: false });
    this.setState({ tasks });
  };

  finishTask = id => {
    const tasks = this.state.tasks;

    for (let task in tasks) {
      if (tasks[task].id === id) {
        tasks[task].complete = !tasks[task].complete;
        this.setState({ tasks });
      }
    }
  };

  authenticateUser = () => {
    this.setState({ authenticated: true });
  };

  render() {
    return (
      <div className="App container">
        {this.state.authenticated ? (
          <div>
            <h1 className="center grey-text">All the Tasks!</h1>
            <Tasks finishTask={this.finishTask} tasks={this.state.tasks} />
            <AddTask createTask={this.createTask} />
          </div>
        ) : (
          <Login authenticateUser={this.authenticateUser} />
        )}
      </div>
    );
  }
}

export default App;
