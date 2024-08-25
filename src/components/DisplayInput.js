import React from "react";

const DisplayInput = ({ value, onChange }) => {
  return (
    <input
      className="displayInput"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default DisplayInput;
