import React from "react";
import "./KenyaTrip.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const KenyaTrip = () => {
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
              src="https://i.ytimg.com/vi/mbqCXpmo15A/maxresdefault.jpg"
              className="d-block w-100"
              alt="First slide"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Masai_Mara_at_Sunset.jpg/1280px-Masai_Mara_at_Sunset.jpg"
              className="d-block w-100"
              alt="Second slide"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Cheetah_with_cubs.jpg/1024px-Cheetah_with_cubs.jpg"
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
        <h1 className="landing-heading">
          Big Cats Week at Maasai Mara - Diwali 2023 Special
        </h1>
        <p className="landing-lead">
          November is one of the Best times to visit Kenya, especially to visit
          its prime park, Maasai Mara. This is because the large migratory herds
          would have returned to Tanzania and now the Big cats have to venture
          long distances to hunt their prey.
        </p>
        <p>
          November is also the season of short rains. This makes the plains of
          Maasai Mara lush green. The skies are truly dramatic and colourful.
          The Sun rise and Sun sets during November at Mara is simply
          breathtaking.
        </p>
        <p>
          November is also a time for holidaying and getting together with our
          families. And the icing on the cake is we have curated this itinerary
          for such affordable costs without compromising on any of the services.
          This is to commemorate our first-year anniversary of opening
          operations at Nairobi.
        </p>
        <p>Join us on this unforgettable journey of your lifetime.</p>

        <div className="button-container">
          <Link to="/itinerary" className="itinerary-btn">
            View Itinerary
          </Link>

          <Link to="/book-now" className="book-now-btn">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default KenyaTrip;
