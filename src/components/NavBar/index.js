import React from "react";
import "./index.css";

const NavBar = () => {
  return (
    <div>
      <div className="topnav">
        <a className="active" href="#home">
          <img
            src="https://novisto.com/wp-content/uploads/2022/04/novisto_logo.webp"
            alt="novista-logo"
            className="novisto-logo"
          />
        </a>
        <a href="#news">Home</a>
        <a href="#contact">About</a>
        <div class="dropdown">
          <button class="dropbtn">
            Products
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#product1">Product 1</a>
            <a href="#product2">Product 2</a>
            <a href="#product3">Product 3</a>
            <a href="#product4">Product 4</a>
          </div>
        </div>
        <div className="topnav-right">
          <a href="#login">Login</a>
          <a href="#logout">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
