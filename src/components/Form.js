import React, { Component } from "react";
import Button from "./Button";

class Form extends Component {
  state = {
    task: ""
  };
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const task = this.state.task;
    this.setState({ task: "" });
    this.props.handleList(task);
  };

  render() {
    return (
      <div>
        <form
          className="flex justify-center w-full py-8 clearfix"
          onSubmit={this.handleSubmit}
        >
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
              <Button name={"add"} buttonStyle={"styleAdd"} type="submit" />
              <Button
                name={"reset"}
                buttonStyle={"styleAdd"}
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
