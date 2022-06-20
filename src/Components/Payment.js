import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "./Media/Arrow 5.png";
import pembe from "./Media/pembe.png";

function Payment() {
  const navigate = useNavigate();

  return (
    <div>
      <img
        src={arrow}
        alt="..."
        style={{ width: "2rem", margin: "2rem" }}
        onClick={() => navigate("/Donate")}
      />
      <div className="Payment">
        <div className="item">
          <img src={pembe} alt="..." />
          <h5>Pembe Maize Meal 10kg</h5>
          <h6>Amount Choosen :Ksh:100</h6>
        </div>
        <div className="pInfo">
          <h5>Choose Payment Method</h5>
          <h6>M-Pesa:</h6>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
