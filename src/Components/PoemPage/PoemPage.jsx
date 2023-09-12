import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PoemPage.css";

import shadow1 from "../../assets/shadow-1.svg";
import shadow2 from "../../assets/shadow-2.svg";

import { BsArrowBarLeft } from "react-icons/bs";

const PoemPage = () => {
  const { title } = useParams();
  const [poemContent, setPoemContent] = useState("");

  useEffect(() => {
    // Fetch the JSON file containing poem data
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        // Find the poem with matching id
        console.log("Fetched data:", data);
        const poem = data.poems.find((p) => p.title === title);
        console.log("Selected poem:", poem);
        if (poem) {
          setPoemContent(poem.content);
        }
      })
      .catch((error) => {
        console.error("Error fetching poem data:", error);
      });
  }, [title]);

  const navigate = useNavigate();

  console.log("poemContent:", poemContent); // Debugging: Check the poemContent value

  return (
    <div className="poem-page">
      <button
        className=" btn btn-primary back-button"
        onClick={() => navigate(-1)}
      >
        <BsArrowBarLeft />
      </button>

      <h1 className="headline headline-1 section-title">
        <span className="span">{title}</span>
      </h1>
      <div className="poem">
        <div className="poemText hero-text" style={{ whiteSpace: "pre-line" }}>
          {poemContent}
        </div>
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
  );
};

export default PoemPage;
