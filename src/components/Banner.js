import React from "react";
import "./Banner.css";
import { useHistory } from "react-router";

function Banner() {
  const history = useHistory();

  const userInfo = () => {
    history.push("/userInfo");
  };

  const pay = () => {
    history.push("/billcreate");
  };

  return (
    <div className="navbar">
      <header className="banner">
        <div className="banner__buttons">
          <button onClick={pay} className="banner__button">
            Pay
          </button>
          <button onClick={userInfo} className="banner__button">
            My Account
          </button>
        </div>
        {/* <div className="banner__footerBottom" /> */}
      </header>
    </div>
  );
}

export default Banner;
