import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Travel Ula</h1>
      <div className="about-us-content">
        <p className="about-us-text">
          Travel Ula is a travel agency focused on curating unforgettable travel
          experiences for travelers who seek adventure, culture, and
          breathtaking landscapes. Founded in 2023, we specialize in offering
          unique safari tours in Kenya, particularly to the Maasai Mara.
        </p>
        <p className="about-us-text">
          We believe in providing our clients with an exceptional experience,
          which includes not only unforgettable tours but also luxury
          accommodations, professional guides, and the opportunity to connect
          with local culture.
        </p>
      </div>

      <div className="about-us-values">
        <h2 className="about-us-values-title">Our Values</h2>
        <ul className="about-us-values-list">
          <li>
            <i className="fas fa-check-circle about-us-icon"></i> Integrity and
            Trust
          </li>
          <li>
            <i className="fas fa-leaf about-us-icon"></i> Sustainability
          </li>
          <li>
            <i className="fas fa-globe about-us-icon"></i> Adventure and
            Exploration
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
