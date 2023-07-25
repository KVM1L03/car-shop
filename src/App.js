import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import Home from "./Pages/Home";
import CarDetails from "./Pages/CarDetails";
import carsData from "./data";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home carsData={carsData} />} />
        <Route path="/car/:id" element={<CarDetails carsData={carsData} />} />
      </Routes>
    </Router>
  );
}

export default App;
