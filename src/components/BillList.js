import React, { useState, useEffect } from "react";
import "./BillList.css";
import Header from "./Header";
import ListAltIcon from "@mui/icons-material/ListAlt";
import axios from "axios";

const url2 = "https://jsonplaceholder.typicode.com/posts";

function BillList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(url2).then((data) => {
      setData(data.data.slice(0, 15));
    });
  }, []);

  /* console.log(data); */

  return (
    <div className="billlist">
      <Header />
      <div className="billlist__header">
        <h2>Bill List View</h2>
        <ListAltIcon className="icon" />
      </div>

      <div className="list__info">
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              {item.body}
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BillList;
