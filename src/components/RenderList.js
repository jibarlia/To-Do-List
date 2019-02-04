import React from "react";
import PropTypes from "prop-types";

const RenderList = props => {
  let list = props.tasks;
  if (props.filter !== "all") {
    list = props.tasks.filter(task => {
      return task.state === props.filter;
    });
  }

  return list.map(task => {
    return (
      <div className="flex w-1/2 justify-center m-2" key={task.id}>
        <div className="flex justify-between w-5/6 rounded-lg border shadow bg-grey h-12">
          <div className="w-12 py-4 px-6 font-semibold">{task.id}</div>
          <div
            className={`py-4 px-6 w-3/5 -ml-32 ${
              task.state === "completed" ? "line-through" : ""
            }`}
            style={{ order: "0" }}
            onClick={() => props.onChecked(task.id)}
          >
            {task.name}
          </div>
          <span
            className="h-12 py-3 px-2"
            onClick={() => props.handleDelete(task.id)}
          >
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
};

RenderList.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default RenderList;
