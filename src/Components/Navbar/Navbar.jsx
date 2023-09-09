import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Import your CSS file with styles

import logo from "../../assets/react.svg";

function Navbar() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  useEffect(() => {
    // Delay the button visibility using setTimeout
    const buttonTimeout = setTimeout(() => {
      setIsButtonVisible(true);
    }, 750); // Adjust the delay as needed

    return () => {
      clearTimeout(buttonTimeout); // Clear the timeout when the component unmounts
    };
  }, []);

  return (
    <header className="header">
      <a href="#" className="logo">
        <img src={logo} width="119" height="37" alt="Wren logo" />
      </a>

      <div className="navbar">
        <ul className="menu">
          <li>
            <a href="#home" className="navbar-link hover-1">
              Home
            </a>
          </li>

          <li>
            <a href="#topics" className="navbar-link hover-1">
              Topics
            </a>
          </li>

          <li>
            <a href="#featured" className="navbar-link hover-1">
              Featured Post
            </a>
          </li>

          <li>
            <a href="#recent" className="navbar-link hover-1">
              Recent Post
            </a>
          </li>

          <li>
            <a href="#" className="navbar-link hover-1">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <a
        href="#"
        className={`sign-in btn btn-primary ${
          isButtonVisible ? "" : "btn-primary-hidden"
        }`}
      >
        Sign in
      </a>
    </header>
  );
}

export default Navbar;
