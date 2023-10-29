import React from "react";
import style from "./Button.module.css";
const Button = ({
  onClick,
  color,
  textColor,
  ...props
}) => {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: style.button,
    style: {
      background: color,
      color: textColor
    }
  }, props.children);
};
export default Button;