import React from "react";
import "./App.css";
import logo from "./Components/Media/UMDF.png";
import burger from "./Components/Media/Group 2.png";
import Firstpage from "./Components/Firstpage";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Items from "./Components/Items";
import Donate from "./Components/Donate";
import Payment from "./Components/Payment";

function App() {
  const [show, setShow] = React.useState(false);
  return (
    <Router>
      <nav>
        <img src={logo} alt="..." className="logo" />
        <h2 className="logoname">UJIRANI MWEMA DONATION FLOW</h2>
        <img
          src={burger}
          alt="..."
          className="burger"
          onClick={() => setShow(!show)}
        />
        {show ? (
          <Link to="/Signup">
            <h6>Sign up/Sign in</h6>
          </Link>
        ) : null}
        <div></div>
      </nav>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Items" element={<Items />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
