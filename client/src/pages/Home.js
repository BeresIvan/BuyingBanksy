import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../pages/css/home.css";


class Home extends Component {
  render() {
    return (
      <Container class="homeContainer">
          <row class="container">
            <p class="title">BUYING BANKSY
            <p class="subtext">bringing ART to the masses</p>
            </p>
        </row>
      </Container>
    );
  }
}

export default Home;
