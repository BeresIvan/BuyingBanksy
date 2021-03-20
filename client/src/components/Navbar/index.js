import React from "react";
import "./style.css";
import {Navbar, Nav} from 'react-bootstrap';
import Logo from "./BuyingBanksy.png"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Toolbar() {
  return (
  <Navbar>
    <Navbar.Brand href="home"><img src={Logo} alt="Buying Banksy"/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="home" id="link">Home</Nav.Link>
      <Nav.Link href="gallery" id="link">Gallery</Nav.Link>
      <Nav.Link href="Reviews" id="link">Reviews</Nav.Link>
      <Nav.Link href="Cart" id="link">Cart</Nav.Link>
      <Nav.Link href="Login" id="link">Login</Nav.Link>
      <Nav.Link href="Signup" id="link">Signup</Nav.Link>
      <Nav.Link href="Payment" id="link">Payment</Nav.Link>

    </Nav>
  </Navbar>
  );
}

export default Toolbar;