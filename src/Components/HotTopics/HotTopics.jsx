import React from "react";
import "./HotTopics.css";

import topic1 from "../../assets/topic-1.png";
import topic2 from "../../assets/topic-2.png";
import topic3 from "../../assets/topic-3.png";
import topic4 from "../../assets/topic-4.png";
import topic5 from "../../assets/topic-5.png";

import {AiOutlineArrowRight} from "react-icons/ai";
import {AiOutlineArrowLeft} from "react-icons/ai";


const HotTopics = () => {
    
    const customStyles = {
      "--width": "507px",
      "--height": "618px",

    };

  return (
    <section className="topics" id="topics" aria-labelledby="topic-label">
      <div className="container">
        <div className="card topic-card">
          <div className="card-content">
            <h2
              className="headline headline-2 section-title card-title"
              id="topic-label"
            >
              Hot topics
            </h2>

            <p className="card-text">
              Don't miss out on the latest poems about a lot o stuufs ...
            </p>

            <div className="btn-group">
              <button className="btn-icon" aria-label="previous" data-slider-prev >
                <AiOutlineArrowLeft />
              </button>

              <button className="btn-icon" aria-label="next" data-slider-next >
                <AiOutlineArrowRight/>
              </button>
            </div>
          </div>

          <div className="slider" data-slider>
            <ul className="slider-list" data-slider-container >
                
              <li className="slider-item">
                <a href="#" className="slider-card">
                  <figure className="slider-banner img-holder">
                    <img
                      src={topic5}
                      width="507"
                      height="618"
                      loading="lazy"
                      alt="Sport"
                      className="img-cover"
                    />
                  </figure>

                  <div className="slider-content">
                    <span className="slider-title">Mom</span>

                    <p className="slider-subtitle">--Hrishikesh Panigrahi</p>
                  </div>
                </a>
              </li>

              <li className="slider-item">
                <a href="#" className="slider-card">
                  <figure className="slider-banner img-holder">
                    <img
                      src={topic1}
                      width="507"
                      height="618"
                      loading="lazy"
                      alt="Travel"
                      className="img-cover"
                    />
                  </figure>

                  <div className="slider-content">
                    <span className="slider-title">Mom</span>

                    <p className="slider-subtitle">--Hrishikesh Panigrahi</p>
                  </div>
                </a>
              </li>

              <li className="slider-item">
                <a href="#" className="slider-card">
                  <figure className="slider-banner img-holder">
                    <img
                      src={topic2}
                      width="507"
                      height="618"
                      loading="lazy"
                      alt="Design"
                      className="img-cover"
                    />
                  </figure>

                  <div className="slider-content">
                    <span className="slider-title">Mom</span>

                    <p className="slider-subtitle">--Bhavya Panwar</p>
                  </div>
                </a>
              </li>

              <li className="slider-item">
                <a href="#" className="slider-card">
                  <figure className="slider-banner img-holder">
                    <img
                      src={topic3}
                      width="507"
                      height="618"
                      loading="lazy"
                      alt="Movie"
                      className="img-cover"
                    />
                  </figure>

                  <div className="slider-content">
                    <span className="slider-title">Mom</span>

                    <p className="slider-subtitle">--Bhavya Panwar</p>
                  </div>
                </a>
              </li>

              <li className="slider-item">
                <a href="#" className="slider-card">
                  {/* style="--width: 507; --height: 618;"  ---> for every figure */}
                  <figure className="slider-banner img-holder" style={customStyles}>
                    <img
                      src={topic4}
                      width="507"
                      height="618"
                      loading="lazy"
                      alt="Lifestyle"
                      className="img-cover"
                    />
                  </figure>

                  <div className="slider-content">
                    <span className="slider-title">Lifestyle</span>

                    <p className="slider-subtitle">78 Articles</p>
                  </div>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotTopics;
