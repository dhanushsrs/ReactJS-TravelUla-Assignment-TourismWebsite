import React from "react";
import "./Itinerary.css";
import ItinerarySection from "../../components/ItinerarySection/ItinerarySection";
import CriteriaSection from "../../components/CriteriaSection/CriteriaSection";
import TermsSection from "../../components/Terms/TermsSection";
import { Link } from "react-router-dom";

const Itinerary = () => {
  return (
    <div className="itinerary-container">
      <div className="image-container">
        <img
          src="https://www.planetware.com/wpimages/2020/02/kenya-in-pictures-beautiful-places-to-photograph-maasai-mara-national-reserve.jpg"
          alt="Maasai Mara"
          className="itinerary-image"
        />
      </div>

      <div className="overview-section">
        <h2 className="overview-title">Overview of Maasai Mara, Kenya</h2>
        <p>
          Maasai Mara is one of the most iconic wildlife reserves in Africa,
          located in southwestern Kenya. Known for its dramatic landscapes and
          rich wildlife, it’s famous for the Great Migration of wildebeest,
          zebras, and other animals, along with its large populations of big
          cats, including lions, cheetahs, and leopards. November is an
          excellent time to visit, as the plains are lush and green, and the big
          cats venture far to hunt their prey.
        </p>
      </div>

      <div className="costs-section">
        <h3 className="costs-title">Costs</h3>
        <ul className="costs-list">
          <li>
            <strong>Cost per Adult, Ex Nairobi:</strong> USD 1582/- (Inclusive
            of local taxes)
          </li>
          <li>
            <strong>Cost per Child (4 to 9 years), Ex Nairobi:</strong> USD
            1400/- (Inclusive of local taxes)
          </li>
          <li>
            <strong>
              Special Independence Day Offer (Valid for bookings made on or
              before August 14th, 2023):
            </strong>
            <ul>
              <li>
                <strong>Cost per Adult:</strong> USD 1322/-
              </li>
              <li>
                <strong>Cost per Child:</strong> USD 1127/-
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="travel">
        <h1 className="travel-title">
          Travel Dates: 14th November to 17th November 2023
        </h1>
      </div>

      <ItinerarySection />

      <CriteriaSection />

      <TermsSection />

      <div className="book-now-container">
        <Link to="/book-now" className="book-now-btn">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Itinerary;
