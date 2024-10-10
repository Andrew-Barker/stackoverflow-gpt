import React from "react";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import Footer from "./components/Footer"; // Import the Footer component

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="container flex">
        <Navbar />
        <div className="flex-grow py-4 ml-52">
          {/* The ml-52 ensures that the content is pushed to the right of the navbar */}
          <Question />
        </div>
      </div>
      <Footer /> {/* Add the Footer after the main content */}
    </div>
  );
}

export default App;
