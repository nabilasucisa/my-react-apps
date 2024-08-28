import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculator";
import QuranVerse from "./pages/QuranVerse";
import Sidebar from "./components/Sidebar";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quran" element={<QuranVerse />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
