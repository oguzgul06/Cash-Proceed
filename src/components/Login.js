import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
    history.push("/home");
  };

  return (
    <div className="login">
      <div className="login__logo">
        <h1>CASH PROCEED</h1>
        <img
          src="https://play-lh.googleusercontent.com/-SiOS6AFg5CxARHdnIeCJAHPjOmFEY_myH8NTgrYHjHMXxPFDUuokvs16Q__nrlOp4Q"
          alt="logo"
        />
        <Button onClick={signIn}>Sign In With Google Account</Button>
      </div>
    </div>
  );
}

export default Login;
