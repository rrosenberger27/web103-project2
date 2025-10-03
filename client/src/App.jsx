import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainDisplay from "./pages/MainDisplay.jsx";
import LocationView from "./pages/LocationView.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<MainDisplay />} />
          <Route path="/stadiums/:id" element={<LocationView />} />
        </Routes>
    </div>
  );
}

export default App;
