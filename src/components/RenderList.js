import React from "react";
import PropTypes from "prop-types";

const RenderList = props => {
  if (props.tasks.length === 0) {
    return null;
  } else {
    let toRender = [...props.tasks];
    switch (props.filter) {
      case "active":
        toRender = toRender.filter(task => task.state === "active");
        break;
      case "completed":
        toRender = toRender.filter(task => task.state === "completed");
        break;
      default:
        break;
    }
    const taskStyle = "bg-grey h-12 py-4 px-6 mb-4";
    const taskStyleCompleted = "bg-grey h-12 py-4 px-6 mb-4 line-through";
    return toRender.map(task => {
      return (
        <div className="flex -mx-2 w-1/2" key={task.id}>
          <div className="w-12 px-2">
            <div className="bg-grey-light h-12 py-4 px-6">{task.id}</div>
          </div>
          <div className="w-5/6 pl-4" onClick={() => props.onChecked(task.id)}>
            <div className={
                task.state === "completed" ? taskStyleCompleted : taskStyle
              }
            >
              {task.name}
            </div>
          </div>
          <div >
            <span className="h-12 normal-case text-white inline-block bg-grey py-3 px-4 text-sm font-semibold text-grey-darker" onClick={() => props.handleDelete(task.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
              </svg>
            </span>
          </div>
        </div>
      );
    });
  }
};

RenderList.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default RenderList;
