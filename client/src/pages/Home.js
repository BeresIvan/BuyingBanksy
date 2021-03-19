import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container>
        <row>
          <div>
            <h1>Buying Banksy</h1>
          </div>
        </row>
        <row>
          <img
            src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1601196595039-74c770ae3385%3Fixlib%3Drb-1.2.1%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb%26w%3D1080%26fit%3Dmax"
            alt="Mural of boy drawing back the curtains"
          />
        </row>
      </Container>
    );
  }
}

export default Home;

