import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../CSS/Details.css";
import ModelCanvas from "./Model";
import carsData from "../data";

const CarDetails = ({ carsData }) => {
  const { id } = useParams();
  const car = carsData.find((car) => car.id === parseInt(id));
  const [showDetails, setShowDetails] = useState(true);

  if (!car) {
    return <div>Car not found!</div>;
  }

  const handleToggleDetails = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  return (
    <div className="car-details-container">
      <div className="model-container">
        <ModelCanvas modelPath={car.model} />
      </div>
      <aside className={`car-details-panel ${showDetails ? "show" : ""}`}>
        <button className="close-button" onClick={handleToggleDetails}>
          X
        </button>
        <img src={car.brand} alt={car.name} className="car-image2" />
        <h1 className="h1">{car.name}</h1>
        <p className="car-description">{car.description}</p>
        <div className="car-info">
          <h3>Max speed: </h3>
          <h3 style={{color:'red', marginLeft:10}}>{car.max}</h3>
        </div>
        <div className="car-info">
          <h3>Weight: </h3>
          <h3 style={{color:'#212121', marginLeft:10}}>{car.weight} kg</h3>
        </div>
        <div className="car-info">
          <h3>Seats: </h3>
          <h3 style={{color:'#212121', marginLeft:10}}>{car.seats} </h3>
        </div>
        
        <h3 className="h1">{car.price} USD</h3>
        <div className="buy-button">
          <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/buy.png" alt="buy" />
          <h3 className="car-description">BUY NOW</h3>
        </div>
      </aside>
      {!showDetails && (
        <button className="show-button" onClick={handleToggleDetails}>
          Show Details
        </button>
      )}
    </div>
  );
};

export default CarDetails;
