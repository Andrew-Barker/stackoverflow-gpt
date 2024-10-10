import React from "react";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import InfoBar from "./components/InfoBar"; // Import InfoBar
import Footer from "./components/Footer"; // Import the Footer component

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="container flex">
        <Navbar />
        <div className="flex-grow py-4 ml-52 flex">
          {/* Main Content */}
          <div className="w-3/4">
            <Question />
          </div>

          {/* InfoBar Component with a smaller width */}
          <div className="w-1/4 pl-4">
            <InfoBar />
          </div>
        </div>
      </div>
      <Footer /> {/* Add the Footer after the main content */}
    </div>
  );
}

export default App;
