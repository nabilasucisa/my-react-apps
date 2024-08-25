import React from "react";

const getButtonName = (name) => {
  const className = {
    "=": "equals",
    "+": "operation",
    "-": "operation",
    "/": "operation",
    "*": "operation",
    "%": "operation",
    "(": "operation",
    ")": "operation",
    "^": "operation",
    "√": "operation",
    AC: "delete",
    DEL: "delete",
  };
  return className[name];
};

const Button = ({ value, onClick }) => {
  return (
    <button className={`${getButtonName(value)} button`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
