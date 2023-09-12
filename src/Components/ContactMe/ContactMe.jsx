import React from "react";
import "./ContactMe.css";

import profilepic from "../../assets/profile-pic.png";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail, AiOutlineArrowRight } from "react-icons/ai";
import { SiInstagram, SiGithub, SiGeeksforgeeks } from "react-icons/si";

const ContactMe = () => {
  return (
    <footer>
      <div className="container">
        <div className="card footer">
          <div className="section footer-top">
            <div className="footer-brand">
              <h2 className="logo">Hrishikesh Panigrahi</h2>

              <p className="footer-text">
                Thank you for gracing my website with your presence. I deeply
                value your time and the interest you've shown in my poetry. If
                you have any thoughts, inquiries, or suggestions, please don't
                hesitate to connect with me. I'm here to enhance your experience
                and bring more enchanting verses to your life. Stay connected
                for the latest updates and the arrival of captivating new poems!
              </p>

              <p className="footer-list-title">Address</p>

              <address className="footer-text address">
                Mumbai <br />
                Maharashtra, India
              </address>
            </div>

            <div className="footer-list">
              <p className="footer-list-title">Newsletter</p>

              <p className="footer-text">
              Have ideas or want to collaborate? Drop me a message!
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

                <ion-icon>
                  <BsFillPersonFill />
                </ion-icon>
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

                <ion-icon>
                  {" "}
                  <AiOutlineMail />
                </ion-icon>
              </div>

              <a href="#" className="btn btn-primary">
                <span className="span">Get in touch</span>

                <ion-icon aria-hidden="true">
                  <AiOutlineArrowRight />
                </ion-icon>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              &copy; Developed by{" "}
              <a
                href="https://hrishikeshpanigrahi.tech/"
                className="copyright-link"
              >
                Hrishikesh Panigrahi.
              </a>
            </p>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon>
                    <SiInstagram />
                  </ion-icon>

                  <span className="span">Instagram</span>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon>
                    <SiGithub />
                  </ion-icon>

                  <span className="span">Github</span>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon>
                    <SiGeeksforgeeks />
                  </ion-icon>

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
