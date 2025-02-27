import React from "react";
import "./CriteriaSection.css";

const CriteriaSection = () => {
  return (
    <div>
      <div className="inclusions-exclusions-container">
        <div className="inclusions">
          <h3 className="section-title">Inclusions</h3>
          <ul className="inclusions-list">
            <li>
              Internal transfers from JKIA airport to Maasai Mara and back by
              Landcruiser on shared basis
            </li>
            <li>
              Stay on twin sharing basis at Maasai Mara either at Zebra Plains
              or similar accommodations
            </li>
            <li>
              Game drives in Landcruisers on a shared basis - minimum 4 pax per
              vehicle
            </li>
            <li>Water during game drives</li>
            <li>All meals as mentioned in the itinerary</li>
            <li>Park Fees</li>
            <li>Guide Fees</li>
            <li>English speaking guides/drivers</li>
          </ul>
        </div>

        <div className="exclusions">
          <h3 className="section-title">Exclusions</h3>
          <ul className="exclusions-list">
            <li>Any airfare or VISA charges</li>
            <li>Personal and medical expenses during the tour</li>
            <li>Tips and gratuities</li>
            <li>Anything other than mentioned in the Inclusions section</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CriteriaSection;
