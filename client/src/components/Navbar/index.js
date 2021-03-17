import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div id="navigation-bar">
    <nav>
      <ul>
      <li> <Link className="navbar-brand" to="/">Banksy </Link></li>
      {/* <li><Link to="/" className={ window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-link active" : "nav-link" }> Home </Link></li>
      <li><Link to="/" className={ window.location.pathname === "/" || window.location.pathname === "/login" ? "nav-link active" : "nav-link" }> Login </Link></li>
      <li><Link to="/reviews" className={ window.location.pathname === "/reviews" || window.location.pathname === "/reviews" ? "nav-link active" : "nav-link" }> Reviews </Link></li>
      <li className="cart"><Link  to="/cart" className={ window.location.pathname === "/cart" || window.location.pathname === "/cart" ? "nav-link active" : "nav-link" }><i className="fa fa-shopping-basket" aria-hidden="true"/> Cart: $0.00</Link></li> */}
      </ul>
    </nav>
  </div>
  );
}

export default Navbar;