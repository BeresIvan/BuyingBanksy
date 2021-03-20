import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Toolbar from "./components/Navbar/index.js";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home.js";
import Reviews from "./pages/Reviews.js";
import Login from "./pages/Login.js";
import Cart from "./pages/Cart.js";
import Signup from "./pages/Signup.js";
import Gallery from "./pages/Gallery.js";
import Payment from "./pages/Payment";
import paymentpage from "./components/Payment/index.js"

function App() {
  return (
    <Router>
      <div>
        <Toolbar />
        <Switch>
        <Wrapper>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
          <Route exact path="/reviews">
            <Reviews />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/payment">
            <Payment>
              <paymentpage ></paymentpage>
              </Payment>
          </Route>
        </Wrapper>
        </Switch>
      </div>
    </Router>
  );
}

export default App;