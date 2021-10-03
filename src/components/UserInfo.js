import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./UserInfo.css";
import ContactsIcon from "@mui/icons-material/Contacts";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

function UserInfo() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios(url).then((data) => {
      setUsers(data.data);
    });
  }, []);

  console.log(users);

  return (
    <div className="userInfo">
      <Header />
      <div className="userInfo__header">
        <h2>User Info</h2>
        <ContactsIcon className="icon" />
      </div>

      {users.map((item) => (
        <div className="lists">
          <div className="userInfo__list">
            <img
              src="https://www.pngarts.com/files/5/Cartoon-Avatar-PNG-Image-Transparent.png"
              alt="person"
              style={{ width: "100%" }}
            />

            <div className="container__info">
              <b>Name: </b>
              <h4>{item.name}</h4>
            </div>
            
            <div className="container__info">
              <b>UserName: </b>
              <h4>{item.username}</h4>
            </div>

            <div className="container__info">
              <b>Email: </b>
              <h4>{item.email}</h4>
            </div>

            <div className="container__info">
              <b>City: </b>
              <h4>{item.address.city}</h4>
            </div>

            <div className="container__info">
              <b>Phone: </b>
              <h4>{item.phone}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserInfo;
