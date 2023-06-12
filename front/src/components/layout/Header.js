import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header id="header" class="header d-flex align-items-center sticky-top">

        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" class="logo d-flex align-items-center">
            <img src="./images/logo.png" alt="The Ark"/></a>
          <nav id="navbar" class="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Services">Services</Link></li>
              <li><Link to="/Team">Team</Link></li>
              <li><Link to="/News">News</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </nav>
    
        </div>
      </header>
    )
}

export default Header