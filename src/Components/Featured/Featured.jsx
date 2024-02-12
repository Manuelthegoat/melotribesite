import React from "react";
import "./Featured.css";

const Featured = () => {
  // Function to handle hover event
  const handleHover = (event) => {
    // Toggle the visibility of the text by adding/removing a class
    event.target.classList.toggle("show-text");
  };

  return (
    <>
      <div className="featured">
        <div className="featured-title">
          <p>Featured</p>
        </div>
        <div className="featured-grid">
          <div
            className="featured-grid-item"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <img src="./assets/image.png" alt="" />
            <div className="overlay">
              <p className="hover-text">Radio Romania Actualitati</p>
            </div>{" "}
          </div>
          <div
            className="featured-grid-item"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <img src="./assets/image3.png" alt="" />
            <div className="overlay">
              <p className="hover-text">Happier</p>
            </div>
          </div>
          <div
            className="featured-grid-item"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <img src="./assets/image2.png" alt="" />
            <div className="overlay">
              <p className="hover-text">Thunderclouds</p>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
