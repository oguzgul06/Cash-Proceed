import React from "react";
import "./Content.css";
import PaymentIcon from "@mui/icons-material/Payment";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useHistory } from "react-router";

const url =
  "https://news.bitcoin.com/wp-content/uploads/2018/08/bills-300x300.jpg";

const url2 =
  "https://wiki.meramaal.com/wp-content/uploads/2018/05/TSSPDCL-Bill.png";

function Content({ title }) {
  const history = useHistory();

  const showList = () => {
    history.push("/billlist");
  };

  const getBill = () => {
    history.push("/billcreate");
  };

  return (
    <div className="content">
      <div className="content__header">
        <h2>{title}</h2>
        <PaymentIcon className="icon" />
      </div>

      <div className="content__posters">
        <img
          onClick={showList}
          src={`${url}`}
          alt="bill"
          style={{ width: "100%" }}
        />
        <div className="container">
          <h4>
            <b>Bill List</b>
          </h4>
          <button>
            <DoubleArrowIcon onClick={showList} />
          </button>
        </div>
      </div>

      <div className="content__posters">
        <img
          onClick={getBill}
          src={`${url2}`}
          alt="bill"
          style={{ width: "100%" }}
        />
        <div className="container">
          <h4>
            <b>Bill Create</b>
          </h4>
          <button>
            <DoubleArrowIcon onClick={getBill} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
