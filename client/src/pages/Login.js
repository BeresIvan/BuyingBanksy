import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.scss";
import GoogleLogin from "react-google-login";
import axios from "axios";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const responseSuccessGoogle = (response) => {
      console.log(response);
      axios({
      method:"POST",
      url: "http//:localhost:8000/api/googlelogin",
      data: {tokenId: response.tokenId}
    }).then (response => {
        console.log(response)
    })
  }
  const responseErrorGoogle = (response) => {

  }


  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <GoogleLogin
          clientId="803559523817-ojv2q356hbt4hbe6si6m7bbmlmamlp2u.apps.googleusercontent.com"
          buttonText="Google Login"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </Form>
    </div>
  );
}
