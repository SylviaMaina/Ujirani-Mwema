import React from "react";
import pembe from "./Media/pembe.png";
import oil from "./Media/oil.png";
import matress from "./Media/matress.png";
import diapers from "./Media/diapers.png";
import book from "./Media/book.png";
import { useNavigate } from "react-router-dom";

function Items() {
  const navigate = useNavigate();
  return (
    <div>
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
            <button onClick={() => navigate("/Donate")}>Donate Now</button>
          </div>
          <div className="item">
            <img src={oil} alt="..." />
            <h5>Salit Salad Cooking Oil 5ltrs</h5>
            <h6>Price:Ksh:1500</h6>
            <h6>Amount Donated:Ksh:1000</h6>
            <h6>Amount Available For Donation:Ksh:500</h6>
            <button onClick={() => navigate("/Donate")}>Donate Now</button>
          </div>
          <div className="item">
            <img src={matress} alt="..." />
            <h5>Faraja High Density Matress</h5>
            <h6>Price:Ksh:18000</h6>
            <h6>Amount Donated:Ksh:10000</h6>
            <h6>Amount Available For Donation:Ksh:8000</h6>
            <button onClick={() => navigate("/Donate")}>Donate Now</button>
          </div>
          <div className="item">
            <img src={diapers} alt="..." />
            <h5>Softcare Premium Jumbo Maxi l56</h5>
            <h6>Price:Ksh:1300</h6>
            <h6>Amount Donated:Ksh:500</h6>
            <h6>Amount Available For Donation:Ksh:800</h6>
            <button onClick={() => navigate("/Donate")}>Donate Now</button>
          </div>
          <div className="item">
            <img src={book} alt="..." />
            <h5>Kasuku Exercise book square line 200pgs * 10</h5>
            <h6>Price:Ksh:1200</h6>
            <h6>Amount Donated:Ksh:600</h6>
            <h6>Amount Available For Donation:Ksh:700</h6>
            <button onClick={() => navigate("/Donate")}>Donate Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
