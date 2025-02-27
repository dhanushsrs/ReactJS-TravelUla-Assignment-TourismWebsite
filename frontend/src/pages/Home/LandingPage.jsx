import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.ytimg.com/vi/gTEXJsw62iU/maxresdefault.jpg"
              className="d-block w-100"
              alt="First slide"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://justnature.travel/wp-content/uploads/2024/05/Free-Use-31.jpg"
              className="d-block w-100"
              alt="Second slide"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://www.kenyatourism.in/images/elephant-in-maasai-mara-kenya.jpg"
              className="d-block w-100"
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="landing-section">
        <h1 className="landing-heading">Kenya Tourism</h1>
        <p className="landing-lead">
          One can trace the beginning of Kenya Tourism to the turn of the 20th
          century in the early 1930s, during the era when Kenya was under
          British Colonial rule, when the very first wildlife Safaris on the
          African continent were taking place in the country, more in the form
          of expeditions into the unexplored wilderness, teeming with
          magnificent wild animals. Today, Kenya is the home of the Safari
          package, a destination where one can experience seeing an animal
          paradise in truly amazing places such as Masai Mara and Amboseli.
        </p>
        <p>
          Blessed with breathtaking landscapes, a friendly local population,
          pleasant year round weather and the rich collection of wildlife, it is
          little surprise then that Kenya Tourism offers one of the most desired
          travel experiences in the world. This website Travel Ula, is meant to
          be your guide to planning a Safari to Kenya and making the most of
          your visit to East Africa.
        </p>

        <p>Join us on this unforgettable journey of your lifetime.</p>

        <div className="button-container">
          <Link to="/kenya-trip" className="explore-btn">
            Explore Kenya
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
