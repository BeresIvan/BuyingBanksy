import React, { useContext } from "react";
import "./style.css";
import {Navbar, Nav} from 'react-bootstrap';
import Logo from "./BuyingBanksy.png"
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../LogOutButton/LogOutButton";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Toolbar() {

  const { loggedIn } = useContext(AuthContext);

  return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"><img src={Logo} alt="Buying Banksy"/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="gallery">Gallery</Nav.Link>
      <Nav.Link href="Reviews">Reviews</Nav.Link>
      <Nav.Link href="Cart">Cart</Nav.Link>
      <Nav.Link href="Customers">Customers</Nav.Link>
      <Nav.Link href="Payment">Payment</Nav.Link>
      {loggedIn === false && (
        <>
          <Nav.Link href="/Signup">Signup</Nav.Link>
          <Nav.Link href="/Login">Log in</Nav.Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Nav.Link href="/customer">Customers</Nav.Link>
          <LogOutBtn />
        </>
      )}
      <Nav.Link href="LogOutBtn">LogOutBtn</Nav.Link>
    </Nav>
  </Navbar>
  );
}

export default Toolbar;