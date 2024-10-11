import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import QuestionsSummaries from "./components/QuestionsSummaries";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <SearchBar />
        <div className="container flex flex-grow">
          <Navbar />
          <div className="flex-grow py-4 ml-52">
            <Routes>
              <Route path="/" element={<QuestionsSummaries />} />
              <Route path="/questions" element={<QuestionsSummaries />} />
              <Route path="/questions/:id" element={<Question />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
