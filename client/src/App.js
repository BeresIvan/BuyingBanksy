import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
    <div>
      <h1>Buying Banksy</h1>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
      </Wrapper>
    </div>
  </Router>
  );
}

export default App;
