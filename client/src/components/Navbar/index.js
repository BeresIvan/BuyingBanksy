import React from "react";
import "./style.css";
import {Navbar, Nav} from 'react-bootstrap';
import Logo from "./BuyingBanksy.png"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Toolbar() {
  return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="home"><img src={Logo} alt="Buying Banksy"/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="gallery">Gallery</Nav.Link>
      <Nav.Link href="Reviews">Reviews</Nav.Link>
      <Nav.Link href="Cart">Cart</Nav.Link>
      <Nav.Link href="Login">Login</Nav.Link>
      <Nav.Link href="Signup">Signup</Nav.Link>
      <Nav.Link href="Payment">Payment</Nav.Link>

    </Nav>
  </Navbar>
  );
}

export default Toolbar;