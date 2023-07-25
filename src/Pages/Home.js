import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Home.css";
import CarDetails from "./CarDetails";
import carsData from "../data";

function Home() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCars = carsData.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <button className="header-button">
        <h1> CARZ </h1>
      </button>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search car..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="car-grid">
        {filteredCars.map((car) => (
          <Link to={`/car/${car.id}?brand=${car.brand}`} className="car-tile" key={car.id}>
            <img src={car.image} alt={car.name} className="car-image" />
            <h2 className="car-name">{car.name}</h2>
            <p className="car-price"> ${car.price} </p>
          </Link>
        ))}
      </div>
      {selectedCar && (
        <CarDetails car={selectedCar} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Home;
