import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/index";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <Router>
      <div>
        <h1>Buying Banksy</h1>
        <Navbar />
        <Switch>
        <Wrapper>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/reviews">
            <Reviews />
          </Route>
        </Wrapper>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
