import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  const LoginSubmit = (e) => {
    // ไม่ reset ค่า ในฟอร์ม
    e.preventDefault();

    let isValid = false;

    let pwdRegex = /^(?=.{10,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#S%^!&*+=]).*$/;
    // eslint-disable-next-line no-useless-escape
    let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (mailRegex.test(email)) {
      setErrorEmail("");
      setEmailColor("green");
      isValid = true;
    } else {
      setErrorEmail("Invalid email format");
      setEmailColor("red");
      isValid = false;
    }

    if (pwdRegex.test(password)) {
      setErrorPassword("");
      setPasswordColor("green");
      isValid = true;
    } else {
      setErrorPassword(
        "have a minimum of 10 characters, allow only English characters, contain at least 1 lower and 1 upper, contain at least 1 special character and required validator"
      );
      setPasswordColor("red");
      isValid = false;
    }

    if (isValid) {
      //redirect to dashbaord
      navigate("/dashboard");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={LoginSubmit}>
        <h2>Login</h2>
        <div className="form-control">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
          />
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </div>
        <div className="form-control">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
          />
          <small style={{ color: passwordColor }}>{errorPassword}</small>
        </div>
        <div className="btn">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
