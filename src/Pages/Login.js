import React, { useState } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <>
      <div className="col-6 container">
        <div className="row">
          <form onSubmit={(e) => login(e)} className="mt-5">
            <Input
              change={(e) => setEmail(e.target.value)}
              value={email}
              placeholder={"Email"}
            />
            <Input
              type={"password"}
              change={(e) => setPassword(e.target.value)}
              placeholder={"Password"}
              value={password}
            />
            <Button color={"primary"} text={"Login"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
