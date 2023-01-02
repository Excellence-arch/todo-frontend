import React from "react";

const Input = ({ change, value, type, placeholder }) => {
  return (
    <>
      <input
        type={type || "text"}
        className="form-control my-3"
        onChange={change}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
