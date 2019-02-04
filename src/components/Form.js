import React, { Component } from "react";
import Button from "./Button";

class Form extends Component {
  state = {
    task: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const task = this.state.task;
    if (task) {
      this.setState({ task: "" });
      this.props.handleList(task);
    }
  };

  render() {
    return (
      <div className="flex w-4/5 justify-center m-8">
        <form onSubmit={this.handleSubmit}>
          <div className="flex justify-center border-b border-b-2 border-black py-2 px-2 m-2">
            <input
              className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none focus:font-bold"
              type="text"
              placeholder="Enter your task"
              aria-label="Full name"
              name="task"
              onChange={this.handleChange}
              value={this.state.task}
            />
            <div className="flex justify-around w-4/5">
              <Button
                name={"add"}
                buttonStyle={this.state.task ? "style1" : "styleDisabled"}
                type="submit"
              />
              <Button
                name={"reset"}
                buttonStyle={"style1"}
                type="button"
                onClick={this.props.handleReset}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
