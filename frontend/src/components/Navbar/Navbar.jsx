import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-top">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">
          <p className="brand">Travel Ula</p>
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link className="navbar-link" to="/">
              Home
            </Link>
          </li>

          <li className="navbar-item">
            <Link className="navbar-link" to="/kenya-trip">
              Kenya Trip
            </Link>
          </li>

          <li className="navbar-item">
            <Link className="navbar-link" to="/about">
              About Us
            </Link>
          </li>

          <li className="navbar-item">
            <Link className="navbar-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <Link className="book-now-btn" to="/book-now">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
