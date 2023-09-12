import React, { useState, useEffect } from "react";
import "./RecentPost.css";

import img from "../../assets/topic-1.png";

import GridItem from "../GridItem/GridItem";
import Comments from "../Comments/Comments";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import axios from "axios";

const RecentPost = () => {
  const [gridData, setGridData] = useState([]);
  const [commentData, setCommentData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1); // Current page
  const itemsPerPage = 3; // Number of items to show per page

  // const [newComment, setNewComment] = useState("");

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToDisplay = gridData.slice(startIndex, endIndex);

  useEffect(() => {
    fetch("https://json-file-theta.vercel.app/poems")
      .then((response) => response.json())
      .then((data) => {
        setGridData(data);
      })
      .catch((error) => {
        console.error("Error fetching slider data:", error);
      });

    fetch("https://json-file-theta.vercel.app/comments")
      .then((response) => response.json())
      .then((data) => {
        setCommentData(data);
      })
      .catch((error) => {
        console.error("Error fetching slider data:", error);
      });
  }, []);

  // const handleInputChange = (e) => {
  //   setNewComment(e.target.value);
  // };

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Create a new comment object
  //   const newCommentObject = {
  //     id: commentData.length + 1, // Generate a unique ID (you may want to use a more robust approach)
  //     author: "User", // You can set the author to the user's name or handle
  //     comment: newComment,
  //     date: new Date().toISOString(), // Use the current date and time
  //   };

  //   try {
  //     // Send a POST request to your API endpoint for comments
  //     const response = await axios.post(
  //       "https://json-file-theta.vercel.app/comments",
  //       newCommentObject
  //     );

  //     // Check the response status and handle it accordingly
  //     if (response.status === 201) {
  //       // Comment successfully added to the API, do any additional actions here if needed
  //     } else {
  //       // Handle the error or unexpected response status
  //       console.error("Failed to add comment to the API");
  //     }

  //     // Update the local state with the new comment
  //     setCommentData([...commentData, newCommentObject]);

  //     // Clear the input field
  //     setNewComment("");
  //   } catch (error) {
  //     // Handle any network errors or exceptions here
  //     console.error("Error adding comment to the API:", error);
  //   }
  // };
  const totalPages = Math.ceil(gridData.length / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

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
            {itemsToDisplay.map((item, index) => (
              <>
                <GridItem
                  title={item.title}
                  imageSrc={item.imageSrc}
                  description={item.description}
                  badge={item.badge}
                  tags={item.tags}
                  readingTime={item.readingTime}
                />
              </>
            ))}
          </ul>

          <nav aria-label="pagination" className="pagination">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="pagination-btn"
              aria-label="previous page"
              disabled={currentPage === 1}
            >
              <ion-icon name="arrow-back" aria-hidden="true">
                <AiOutlineArrowLeft />
              </ion-icon>
            </button>

            {pageNumbers.map((pageNumber) => (
              <a
                key={pageNumber}
                href="#"
                className={`pagination-btn ${
                  pageNumber === currentPage ? "active" : ""
                }`}
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </a>
            ))}

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="pagination-btn"
              aria-label="next page"
              disabled={endIndex >= gridData.length}
            >
              <ion-icon name="arrow-forward" aria-hidden="true">
                <AiOutlineArrowRight />
              </ion-icon>
            </button>
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
{
  /* <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                name="email_address"
                placeholder="Add your comment..."
                required
                className="input-field"
                autoComplete="off"
                onChange={handleInputChange}
                value={newComment}
              />

              <button className="btn btn-primary">
                <span className="span">Have Your Say</span>

                <AiOutlineArrowRight />
              </button>
            </div>
          </form> */
}
