import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "react-google-login";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: "",
    };
    this.changeUserName = this.changeUserName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeUserName(event) {
    console.log(event.target.value);
    this.setState({
      userName: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:4000/app/signup", registered)
      .then((response) => console.log(response.data));

    this.setState({
      userName: "",
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <form onSubmit={(e) => this.onSubmit(e)}>
              <input
                type="text"
                placeholder="User Name"
                onChange={(e) => this.changeUserName(e)}
                value={this.state.userName}
                className="form-control form-group"
              />

              <input
                type="text"
                placeholder="email"
                onChange={(e) => this.changeEmail(e)}
                value={this.state.email}
                className="form-control form-group"
              />

              <input
                type="text"
                placeholder="password"
                onChange={(e) => this.changePassword(e)}
                value={this.state.password}
                className="form-control form-group"
              />

              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const responseSuccessGoogle = (response) => {
  console.log(response);
  axios({
    method: "POST",
    url: "http://localhost:8000/api/googlelogin",
    data: { tokenId: response.tokenId },
  }).then((response) => {
    console.log(response);
  });
};

const responseErrorGoogle = (response) => {
  console.log(response);
};

function App() {


  return (
    <div className="App">
      <GoogleLogin
        clientId="803559523817-ojv2q356hbt4hbe6si6m7bbmlmamlp2u.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

<Router>
  <div>
    <Navbar />
    <Wrapper>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
    </Wrapper>
  </div>
</Router>;

export default App;