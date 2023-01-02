import React from "react";

const Button = ({ color, text }) => {
  return (
    <>
      <input type="submit" className={`btn btn-${color}`} value={text} />
    </>
  );
};

export default Button;
