import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Import your CSS file with styles

import logo from "../../assets/react.svg";

import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [navbar, Setnavbar] = useState("navbar");

  const showNavbar = () => {
    Setnavbar("navbar showNavbar");
  };

  const removeNavbar = () => {
    Setnavbar("navbar");
  };

  const [header, setHeader] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 20) {
      setHeader("header addBg");
    } else {
      setHeader("header");
    }
  };

  window.addEventListener("scroll", addBg);

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
    <header className={header}>
      <a href="#" className="logo">
        <img src={logo} width="119" height="37" alt="Wren logo" />
      </a>

      <div className={navbar}>
        <div className="menu">
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
        </div>
        <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>

      <div
        href="#"
        className={`sign-in btn btn-primary ${
          isButtonVisible ? "" : "btn-primary-hidden"
        }`}
      >
        Sign in
      </div>
      <AiOutlineMenu className="icon toggleNavbarIcon" onClick={showNavbar} />
    </header>
  );
}

export default Navbar;
