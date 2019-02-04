import React from "react";
import Button from "./Button";
import propTypes from "prop-types";

const ButtonList = props => {
  return props.buttonList.map((b, index) => {
    return (
      <Button
        name={b}
        state={props.buttonActive === b.toLowerCase() ? "disabled" : null}
        buttonStyle={"style1"}
        onClick={props.onClick}
        value={b.toLowerCase()}
        key={index + 1}
      />
    );
  });
};

ButtonList.propsTypes = {
  buttonList: propTypes.array.isRequired,
  buttonActive: propTypes.string.isRequired
};

export default ButtonList;
