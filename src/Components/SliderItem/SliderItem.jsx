import React from "react";
import { Link } from "react-router-dom";

const SliderItem = ({ imageSrc, title, subtitle }) => {
  const customStyles = {
    "--width": "507px",
    "--height": "618px",
  };

  return (
    <Link to={`/poem/${encodeURIComponent(title)}`} className="slider-item">
      <div className="slider-card">
        <figure className="slider-banner img-holder" style={customStyles}>
          <img
            src={imageSrc}
            width="507"
            height="618"
            loading="lazy"
            alt={title}
            className="img-cover"
          />
        </figure>

        <div className="slider-content">
          <span className="slider-title">{title}</span>
          <p className="slider-subtitle">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default SliderItem;
