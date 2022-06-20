import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "./Media/Arrow 5.png";
import pembe from "./Media/pembe.png";

function Donate() {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src={arrow}
        alt="..."
        style={{ width: "2rem", margin: "2rem" }}
        onClick={() => navigate("/Items")}
      />
      <div className="Donation">
        <div className="item">
          <img src={pembe} alt="..." />
          <h5>Pembe Maize Meal 10kg</h5>
          <h6>Price:Ksh:700</h6>
          <h6>Amount Donated:Ksh:500</h6>
          <h6>Amount Available For Donation:Ksh:200</h6>
          <div className="donate">
            <div className="donateitem">
              <div></div>
              <h5>Ksh: 1000</h5>
              <button onClick={() => navigate("/Payment")}>
                Continue to donate
              </button>
            </div>
            <div className="donateitem">
              <div></div>
              <h5>Ksh: 500</h5>
              <button onClick={() => navigate("/Payment")}>
                Continue to donate
              </button>
            </div>
            <div className="donateitem">
              <div></div>
              <h5>Ksh: 250</h5>
              <button onClick={() => navigate("/Payment")}>
                Continue to donate
              </button>
            </div>
            <div className="donateitem">
              <div></div>
              <h5>Ksh: 100</h5>
              <button onClick={() => navigate("/Payment")}>
                Continue to donate
              </button>
            </div>
            <div className="donateitem">
              <div></div>
              <h5>Ksh: 50</h5>
              <button onClick={() => navigate("/Payment")}>
                Continue to donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
