import React from "react";
import { Link } from "react-router-dom";

import { BiTime } from "react-icons/bi";

const GridItem = ({
  title,
  imageSrc,
  description,
  badge,
  tags,
  readingTime,
}) => {
  const customStyles2 = {
    "--width": "271px",
    "--height": "258px",
  };

  return (
    <li>
      <div className="recent-post-card">
        <figure className="card-banner img-holder" style={customStyles2}>
          <img
            src={imageSrc}
            width="271"
            height="258"
            loading="lazy"
            alt={title}
            className="img-cover"
          />
        </figure>
        <div className="card-content">
          <a href="#" class="card-badge">
            {badge}
          </a>
          <h3 className="headline headline-3 card-title">
          
            <Link  to={`/poem/${encodeURIComponent(title)}`} className="link hover-2">
              {title}
            </Link>
          </h3>
          <p className="card-text">{description}</p>
          {/* Rest of your card content */}
          <div className="card-wrapper">
            <div className="card-tag">
              {tags.map((tag, index) => (
                <a href="#" className="span hover-2" key={index}>
                  # {tag}
                </a>
              ))}
            </div>

            <div className="wrapper">
              <ion-icon name="time-outline" aria-hidden="true"><BiTime/></ion-icon>

              <span className="span">{readingTime}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default GridItem;
