import React from "react";
import { useNavigate } from "react-router-dom";
import hands from "./Media/hands.png";
import fam from "./Media/fam.png";
import pembe from "./Media/pembe.png";
import oil from "./Media/oil.png";
function Firstpage() {
  const navigate = useNavigate();
  return (
    <div className="fpage">
      <img src={hands} alt="..." />
      <div className="about">
        <div className="Atext">
          <h4 style={{ width: "50%" }}>About us</h4>
          <h6>
            This is a platform built to allow everyone to give out a helping
            hand no matter their income or occupation. It gives the recipient
            their privacy while still ensuring that they get the help they need
            at their time of need. The denominations required range from as
            little as ksh.50 to ksh.5000. You choose what you want to donate
            towards and whatever you give will go a long way in helping out your
            fellow neighbour.
          </h6>
        </div>
        <div>
          <img src={fam} alt="..." />
        </div>
      </div>
      <div className="Iavailable">
        <h4 style={{ width: "50%", textAlign: "center" }}>
          Items available to donate towards
        </h4>
        <div className="items">
          <div className="item">
            <img src={pembe} alt="..." />
            <h5>Pembe Maize Meal 10kg</h5>
            <h6>Price:Ksh:700</h6>
            <h6>Amount Donated:Ksh:500</h6>
            <h6>Amount Available For Donation:Ksh:200</h6>
            <button onClick={() => navigate("/Signup")}>Donate Now</button>
          </div>
          <div className="item">
            <img src={oil} alt="..." />
            <h5>Salit Salad Cooking Oil 5ltrs</h5>
            <h6>Price:Ksh:1500</h6>
            <h6>Amount Donated:Ksh:1000</h6>
            <h6>Amount Available For Donation:Ksh:500</h6>
            <button onClick={() => navigate("/Signup")}>Donate Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstpage;
