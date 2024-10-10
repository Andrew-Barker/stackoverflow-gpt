import React from "react";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Question from "./components/Question";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="container flex">
        <Navbar />
        <div className="flex-grow p-4">
          <Question />
        </div>
      </div>
    </div>
  );
}

export default App;
