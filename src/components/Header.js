import React from "react";
import "./Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { auth } from "../firebase";
import { useHistory } from "react-router";

function Header() {
  const history = useHistory();

  const userInfo = () => {
    history.push("/userInfo");
  };

  const homePage = () => {
    history.push("/home");
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://play-lh.googleusercontent.com/-SiOS6AFg5CxARHdnIeCJAHPjOmFEY_myH8NTgrYHjHMXxPFDUuokvs16Q__nrlOp4Q"
          alt="logo"
        />
        <h2 onClick={homePage}>Cash Proceed</h2>
      </div>

      <div className="header__right">
        <AccountCircleIcon onClick={userInfo} className="header__icon" />
        <ExitToAppIcon
          onClick={() => auth.signOut()}
          className="header__icon"
        />
      </div>
    </div>
  );
}

export default Header;
