import React, {useState, useEffect} from "react";
import "./HeroSection.css";

import { BsArrowBarRight } from "react-icons/bs";

import {AiOutlineArrowRight} from "react-icons/ai";

import patter2 from "../../assets/pattern-2.svg";
import patter3 from "../../assets/pattern-3.svg";
import shadow1 from "../../assets/shadow-1.svg";
import shadow2 from "../../assets/shadow-2.svg";
import profilepic from "../../assets/profile-pic.png";

import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    

  return (
    <section className="hero" id="home" aria-label="home">
      <div  className="container">
        <div data-aos="fade-up" className="hero-content">
          <p className="hero-subtitle">Welcome to my creative corner!</p>

          <h1 className="headline headline-1 section-title">
            I’m <span className="span">Hrishikesh Panigrahi</span>
          </h1>

          <p className="hero-text">
            Welcome to a world of poetic expression and creativity. Discover the
            power of words as we share heartfelt verses, soulful poems, and
            meaningful stories. Join our community of poets and enthusiasts,
            where emotions flow freely, and every word is a brushstroke on the
            canvas of emotions. Start your poetic journey with us today.
          </p>

          <h2 className="title">Interested in Collaboration?</h2>

          <div className="input-wrapper">
            <input
              type="email"
              name="email_address"
              placeholder="Type your email address"
              required
              className="input-field"
              autocomplete="off"
            />

            <button className="btn btn-primary">
              <span className="span">Get in Touch</span>

             <AiOutlineArrowRight/>
            </button>
          </div>
        </div>

        <div className="hero-banner">
          <img
            data-aos="fade-left"
            src={profilepic}
            width="327"
            height="490"
            alt="Hrishikesh Panigrahi"
            className="w-100"
          />

          <img
            src={patter2}
            width="27"
            height="26"
            alt="shape"
            className="shape shape-1"
          />

          <img
            src={patter3}
            width="27"
            height="26"
            alt="shape"
            className="shape shape-2"
          />
        </div>

        <img
          src={shadow1}
          width="500"
          height="800"
          alt=""
          className="hero-bg hero-bg-1"
        />

        <img
          src={shadow2}
          width="500"
          height="500"
          alt=""
          className="hero-bg hero-bg-2"
        />

        <img
          src={shadow2}
          width="500"
          height="500"
          alt=""
          className="bg3 hero-bg hero-bg-2"
        />
      </div>
    </section>
  );
};

export default HeroSection;
