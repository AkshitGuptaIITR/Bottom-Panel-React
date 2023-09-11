import React from 'react';
import style from "./Button.module.css";

const Button = ({ onClick, color, textColor, ...props }) => {
  return (
    <button onClick={onClick} className={style.button} style={{ background: color, color: textColor }}>
      {props.children}
    </button>
  )
}

export default Button