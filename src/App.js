import React, { Component, Fragment } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import RenderList from "./components/RenderList";
import ButtonList from "./components/ButtonList";

class App extends Component {
  state = {
    list: [
      { id: 1, name: "Learn more react", state: "active" },
      { id: 2, name: "Make the merges", state: "active" },
      { id: 3, name: "Create a new branch", state: "completed" }
    ],
    filterAction: "all"
  };

  handleList = taskName => {
    const newList = [...this.state.list];
    newList.push({
      id: this.state.list.length + 1,
      name: taskName,
      state: "active"
    });
    console.log("push", newList);
    this.setState({
      list: newList
    });
  };

  onChecked = id => {
    const newList = this.state.list.map(task => {
      if (task.id === id) task.state = "completed";
      return task;
    });
    this.setState({
      list: newList
    });
  };

  handleDelete = id => {
    const newList = this.state.list.filter(task => task.id !== id);
    this.setState({
      list: newList
    });
  };

  handleFilter = e => {
    const filter = e.target.value;
    this.setState({
      filterAction: filter.toLowerCase()
    });
  };

  resetHandler = () => {
    const newList = this.state.list.map(task => {
      task.state = "active";
      return task;
    });
    this.setState({
      list: newList
    });
  };

  render() {
    return (
      <Fragment>
        <Nav />
        <main className="container mx-auto flex flex-col items-center w-full">
          <Form handleList={this.handleList} handleReset={this.resetHandler} />
          {this.state.list.length > 0 && (
            <RenderList
              tasks={this.state.list}
              filter={this.state.filterAction}
              onChecked={this.onChecked}
              handleDelete={this.handleDelete}
            />
          )}
          <div className="flex items-center m-8 justify-center">
            <ButtonList
              buttonList={["all", "active", "completed"]}
              buttonActive={this.state.filterAction}
              onClick={this.handleFilter}
            />
          </div>
        </main>
      </Fragment>
    );
  }
}

export default App;
