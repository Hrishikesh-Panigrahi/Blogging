import React, { useState, useEffect } from "react";
import "./RecentPost.css";

import img from "../../assets/topic-1.png";

import GridItem from "../GridItem/GridItem";

import Comments from "../Comments/Comments";

const RecentPost = () => {
  const [gridData, setGridData] = useState([]);
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch("https://json-file-theta.vercel.app/poems")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched slider data
        setGridData(data);
      })
      .catch((error) => {
        console.error("Error fetching slider data:", error);
      });
  }, []);

  useEffect(() => {
    fetch("https://json-file-theta.vercel.app/comments")
      .then((response) => response.json())
      .then((data) => {
        setCommentData(data);
      })
      .catch((error) => {
        console.error("Error fetching slider data:", error);
      });
  }, []);

  const customStyles2 = {
    "--width": "271px",
    "--height": "258px",
  };

  return (
    <section
      className="section recent-post"
      id="recent"
      aria-labelledby="recent-label"
    >
      <div class="container">
        <div className="post-main">
          <h2 className="headline headline-2 section-title">
            <span className="span">Recent posts</span>
          </h2>

          <p className="section-text">Don't miss the latest trends</p>

          <ul className="grid-list">
            {gridData.map((item, index) => (
              <ul className="grid-list" key={index}>
                <GridItem
                  title={item.title}
                  imageSrc={item.imageSrc}
                  description={item.description}
                  badge={item.badge}
                  tags={item.tags}
                  readingTime={item.readingTime}
                />
              </ul>
            ))}
          </ul>

          <nav aria-label="pagination" className="pagination">
            <a href="#" className="pagination-btn" aria-label="previous page">
              <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
            </a>

            <a href="#" className="pagination-btn">
              1
            </a>
            <a href="#" className="pagination-btn">
              2
            </a>
            <a href="#" className="pagination-btn">
              3
            </a>
            <a href="#" className="pagination-btn" aria-label="more page">
              ...
            </a>

            <a href="#" className="pagination-btn" aria-label="next page">
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>
          </nav>
        </div>

        <div className="post-aside grid-list">
          <div class="card aside-card">
            <h3 class="headline headline-2 aside-title">
              <span class="span">Last Comment</span>
            </h3>

            <ul class="comment-list">
              {commentData.map((item, index) => (
                <>
                  <Comments
                    author={item.author}
                    date={item.date}
                    content={item.content}
                    imgSrc={img}
                  />
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPost;
