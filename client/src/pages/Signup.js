import axios from "axios";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import "./Login.scss";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";



function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function signup(e) {
    e.preventDefault();

    try {
      const signupData = {
        email,
        password,
        passwordVerify,
      };

      await axios.post("http://localhost:3000/", signupData);
      // await axios.post(
        // "https://buying-banksy.herokuapp.com/Signup",
        // signupData
      // );
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={signup}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="password"
          placeholder="Verify your password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <Button type="submit" >Signup</Button>
      </form>
    </div>
  );
}

export default Signup;