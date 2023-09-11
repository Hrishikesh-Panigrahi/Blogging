import React, { useState, useEffect } from "react";
import "./HotTopics.css";

import topic1 from "../../assets/topic-1.png";
import topic2 from "../../assets/topic-2.png";
import topic3 from "../../assets/topic-3.png";
import topic4 from "../../assets/topic-4.png";
import topic5 from "../../assets/topic-5.png";

import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

import SliderItem from "../SliderItem/SliderItem";

const HotTopics = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    // Fetch slider data from your API endpoint
    fetch("/Poems.json")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched slider data
        setSliderData(data.poems);
      })
      .catch((error) => {
        console.error("Error fetching slider data:", error);
      });
  }, []);

  const [currentSlideGroup, setCurrentSlideGroup] = useState(0);

  const slidesPerGroup = 3;

  const handleNextSlide = () => {
    if (
      currentSlideGroup === Math.floor((sliderData.length - 1) / slidesPerGroup)
    ) {
      // If at the last group, wrap back to the first group
      setCurrentSlideGroup(0);
    } else {
      setCurrentSlideGroup((prevSlideGroup) => prevSlideGroup + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideGroup === 0) {
      // If at the first group, go to the last group
      setCurrentSlideGroup(
        Math.floor((sliderData.length - 1) / slidesPerGroup)
      );
    } else {
      setCurrentSlideGroup((prevSlideGroup) => prevSlideGroup - 1);
    }
  };

  // Calculate the starting and ending indices for the current slide group
  const startIndex = currentSlideGroup * slidesPerGroup;
  const endIndex = startIndex + slidesPerGroup;

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
              <button
                className="btn-icon"
                aria-label="previous"
                disabled={currentSlideGroup === 0}
                onClick={handlePrevSlide}
              >
                <AiOutlineArrowLeft />
              </button>

              <button
                className="btn-icon"
                aria-label="next"
                disabled={currentSlideGroup === sliderData.length - 1}
                onClick={handleNextSlide}
              >
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>

          <div className="slider" data-slider>
            <ul
              className="slider-list"
              data-slider-container
              style={{
                transform: `translateX(-${
                  startIndex * (100 / slidesPerGroup)
                }%)`,
                transition: "transform 0.5s ease",
              }}
            >
              {sliderData.map((item, index) => (
                <SliderItem
                  key={index}
                  imageSrc={item.imageSrc}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotTopics;
