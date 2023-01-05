import React from "react";

const Button = ({ color, text }) => {
  return (
    <>
      <input type="submit" className={`btn btn-${color}`} value={text} />
    </>
  );
};

const RouteButton = ({color, text, onClick}) => {
  return<>
  <input type="button" className={`btn btn-${color}`} value={text} onClick={onClick}/>
  </>
}

export {Button, RouteButton};
