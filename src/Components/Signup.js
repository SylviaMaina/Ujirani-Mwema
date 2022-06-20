import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "./Media/Arrow 5.png";
import group from "./Media/group.png";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: "",
    idnumber: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div>
      <img
        src={arrow}
        alt="..."
        style={{ width: "2rem", margin: "2rem" }}
        onClick={() => navigate("/")}
      />
      <h2 style={{ textAlign: "center" }}>Log in or sign up to donate</h2>
      <div className="signup">
        <img src={group} alt="..." />
        <div className="sign">
          <h4>Sign up</h4>
          <form>
            <div className="names">
              <div className="name">
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="John"
                  onChange={handleChange}
                  name="name"
                  value={formData.name}
                />
              </div>
              <div className="name">
                <label>ID Number:</label>
                <input
                  type="text"
                  placeholder="123456"
                  onChange={handleChange}
                  name="idnumber"
                  value={formData.idnumber}
                />
              </div>

              <div className="name">
                <label>Email:</label>
                <input
                  className="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                />
              </div>
              <div className="name">
                <label>Phone Number</label>
                <input
                  className="phoneNumber"
                  type="text"
                  placeholder="+254712345678"
                  onChange={handleChange}
                  name="phoneNumber"
                  value={formData.phoneNumber}
                />
              </div>

              <div className="name">
                <label>Password:</label>
                <input
                  type="password"
                  placeholder="....."
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                />
              </div>
              <div className="name">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  placeholder="....."
                  onChange={handleChange}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                />
              </div>
            </div>
          </form>
          <button onClick={() => navigate("/Items")}>Sign up</button>
          <h6>
            Already have an account?{" "}
            <span
              style={{ color: "#0DE278" }}
              onClick={() => navigate("/Signin")}
            >
              Sign in
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Signup;
