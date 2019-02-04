import React from "react";
import propTypes from "prop-types";

const buttonStyles = {
  style1:
    "flex-no-shrink bg-grey-darker hover:bg-grey-darker border-grey hover:border-grey-dark text-sm border-4 text-white py-1 px-2 rounded capitalize w-1/2 mr-1 ml-1",
  styleDisabled:
    "flex-no-shrink bg-grey-darker hover:bg-grey-darker border-grey hover:border-grey-dark text-sm border-4 text-white py-1 px-2 rounded capitalize w-1/2 mr-1 ml-1 opacity-50 cursor-not-allowed"
  // style2:
  //   "bg-transparent hover:bg-grey-darkest text-grey-darkest font-semibold hover:text-white py-2 px-4 m-2 border border-grey-darkest m- hover:border-transparent rounded capitalize"
};

const Button = props => {
  let bStyle =
    props.state !== undefined && props.state !== null
      ? buttonStyles[props.state]
      : buttonStyles[props.buttonStyle];
  bStyle = bStyle === undefined ? props.classes : bStyle;

  return (
    <button
      className={bStyle}
      type={props.type}
      onClick={props.onClick}
      value={props.value}
    >
      {props.name}
    </button>
  );
};

Button.propTypes = {
  name: propTypes.string.isRequired,
  classes: propTypes.string,
  state: propTypes.string,
  buttonStyle: propTypes.string
};

export default Button;
