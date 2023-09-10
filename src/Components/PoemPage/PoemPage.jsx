// PoemPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PoemPage.css";

const PoemPage = () => {
  const { title } = useParams();
  const [poemContent, setPoemContent] = useState("");

  useEffect(() => {
    // Fetch the JSON file containing poem data
    fetch("/Poems.json") // Use an absolute path from the public folder
      .then((response) => response.json())
      .then((data) => {
        // Find the poem with matching id
        console.log("Fetched data:", data);
        const poem = data.poems.find((p) => p.title === title);
        console.log("Selected poem:", poem);
        // Set the poem content
        if (poem) {
          setPoemContent(poem.content);
        }
      })
      .catch((error) => {
        console.error("Error fetching poem data:", error);
      });
  }, [title]);
  
  console.log("poemContent:", poemContent); // Debugging: Check the poemContent value
  

  return (
    <div className="poem-page">
      <h2>Poem</h2>
      <p>{poemContent}</p>
    </div>
  );
};

export default PoemPage;
