import React from "react";
import "./ContactMe.css";

import profilepic from "../../assets/profile-pic.png";
import {BsFillPersonFill} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";

const ContactMe = () => {
  return (
    <footer>
      <div className="container">
        <div className="card footer">
          <div className="section footer-top">
            <div className="footer-brand">
              <h2 className="logo">Hrishikesh Panigrahi</h2>

              <p className="footer-text">
                When an unknown prnoto sans took a galley and scrambled it to
                make specimen book not only five When an unknown prnoto sans
                took a galley and scrambled it to five centurie.
              </p>

              <p className="footer-list-title">Address</p>

              <address className="footer-text address">
                123 Main Street <br />
                New York, NY 10001
              </address>
            </div>

            <div className="footer-list">
              <p className="footer-list-title">Newsletter</p>

              <p className="footer-text">
                Wanna Colaborate? or suggest changes? please free to drop a
                message!
              </p>

              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="input-field"
                  autoComplete="off"
                />

                <ion-icon ><BsFillPersonFill/></ion-icon>
              </div>

              <div className="input-wrapper">
                <input
                  type="email"
                  name="email_address"
                  placeholder="Emaill address"
                  required
                  className="input-field"
                  autoComplete="off"
                />

                <ion-icon > <AiOutlineMail/></ion-icon>
              </div>

              <a href="#" className="btn btn-primary">
                <span className="span">Get in touch</span>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              &copy; Developed by{" "}
              <a href="https://hrishikeshpanigrahi.tech/" className="copyright-link">
                Hrishikesh Panigrahi.
              </a>
            </p>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>

                  <span className="span">Instagram</span>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>

                  <span className="span">Github</span>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>

                  <span className="span">Geeks for Geeks</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactMe;
