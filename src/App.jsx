import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/Hero-Section/HeroSection";
import ContactMe from "./Components/ContactMe/ContactMe";
import HotTopics from "./Components/HotTopics/HotTopics";
import PoemPage from "./Components/PoemPage/PoemPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecentPost from "./Components/RecentPost/RecentPost";

function App() {
  const [count, setCount] = useState(0);

  

  return (
    <>
      <Router>
        
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
              <Navbar />
                <HeroSection />
                <HotTopics />
                <RecentPost />
                <ContactMe />
              </>
            }
          />
          <Route path="/poem/:title" element={<PoemPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
