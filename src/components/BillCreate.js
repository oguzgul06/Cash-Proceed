import React from "react";
import "./BillCreate.css";
import Header from "./Header";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Button } from "@material-ui/core";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function BillCreate() {
  const user = useSelector(selectUser);

  /*  const createBill = (event) => {
    event.preventDefault();
    db.collection("posts").add({
      Name: user.displayName,
      Username: user.displayName,
      Email: user.email,
      City: user.city,
      Phone: user.phone,
    });
  };
 */
  return (
    <div className="billcreate">
      <Header />
      <div className="billcreate__header">
        <h2>Bill Create</h2>
        <BorderColorIcon className="icon" />
      </div>

      <div className="billcreate__form">
        <div className="input">
          <b>Name </b> <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <b>UserName </b> <input type="text" placeholder="UserName" />
        </div>
        <div className="input">
          <b>Email </b> <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <b>City </b> <input type="text" placeholder="City" />
        </div>
        <div className="input">
          <b>Phone </b> <input type="text" placeholder="Phone" />
        </div>
        <div className="input">
          <b>BillID </b> <input type="text" placeholder="BillID" />
        </div>
        <Button>Bill Create</Button>
      </div>
    </div>
  );
}

export default BillCreate;
