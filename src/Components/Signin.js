import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "./Media/Arrow 5.png";
import group from "./Media/group.png";

function Signin() {
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
      <h2 style={{ textAlign: "center" }}>Log in to donate</h2>
      <div className="signup">
        <img src={group} alt="..." />
        <div className="sign">
          <h4>Sign in</h4>
          <form>
            <div className="names" style={{ height: "20vh" }}>
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
                <label>Password:</label>
                <input
                  type="password"
                  placeholder="....."
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                />
              </div>
            </div>
          </form>
          <button onClick={() => navigate("/Items")}>Sign up</button>
          <h6>
            Don't have an account?{" "}
            <span
              style={{ color: "#0DE278" }}
              onClick={() => navigate("/Signup")}
            >
              Sign up
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Signin;
