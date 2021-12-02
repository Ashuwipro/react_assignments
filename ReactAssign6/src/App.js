import React from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import Headings from "./components/Headings";
import About from "./components/About";
import Songs from "./components/Songs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SongDetails from "./components/SongDetails";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <hr />
        <Info />
        <hr />
        <Headings />
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/songs/:id" element={<SongDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
