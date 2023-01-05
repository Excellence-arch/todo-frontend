import React from "react";
import { useNavigate } from "react-router-dom";
import { RouteButton } from "../Components/Button";

const Home = () => {
  const navigate = useNavigate();
  return <>
    <RouteButton color={"primary"} text="Login" onClick={() => navigate("/login")} />
    <RouteButton color={"primary"} text="Register" onClick={() => navigate("/register")} />
  </>
};

export default Home;
