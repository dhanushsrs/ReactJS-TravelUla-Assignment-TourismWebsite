import React from "react";
import "./TermsSection.css";

const TermsSection = () => {
  return (
    <div className="terms-container">
      <section className="terms-section">
        <h3 className="section-title">Terms and Conditions</h3>
        <ul className="terms-list">
          <li>
            Costs are based at 4 paxs per vehicle for game drives and 5 per
            vehicle for Internal transfers
          </li>
          <li>
            Stay at Mara would be at Zebra plains or Loyk camp or Julia river
            camp
          </li>
          <li>Last day to confirm the tour is August 14th 2023</li>
          <li>
            Guests travelling should process valid passports with a minimum of 6
            months validity from the date of return
          </li>
          <li>
            Guests traveling should be administered with Yellow fever
            vaccination and Oral polio vaccination. The vaccines should be taken
            at least 15 days prior to travel. The certificates have to be shared
            for us to send you the invite letter for VISA application
          </li>
          <li>
            Guests should intimate us on any medical ailment, and Travel
            Unbounded World Pvt Ltd is not liable for any loss or damage to the
            guests during the tour
          </li>
          <li>
            Guests should provide International travel insurance 15 days prior
            to travel
          </li>
          <li>
            Guests staying at Nairobi one day prior to the travel dates have to
            reach JKIA airport at 7AM on Nov 14th
          </li>
          <li>
            Guests staying at Nairobi on Nov 17th would have to arrange their
            transport from JKIA airport after we drop you
          </li>
          <li>Lunch on the return on Nov 17th is not a part of the package</li>
          <li>
            Meals are mentioned in brackets at the end of the Day’s itinerary
          </li>
          <li>Groups above 5 can avail special discounts</li>
          <li>
            Vehicles are provided only for internal transfers and game drives,
            they are not for another purposes or use
          </li>
          <li>
            Please refer to all the terms and conditions on{" "}
            <a
              href="http://www.travelunbounded.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.travelunbounded.com
            </a>
          </li>
        </ul>
      </section>

      <section className="payment-policy-section">
        <h3 className="section-title">Payment Terms and Cancellation Policy</h3>
        <ul className="payment-policy-list">
          <li>100% of the tour cost at the time of booking</li>
          <li>
            50% of the tour cost would be given back as credit if the tour is
            cancelled 60 days before the travel dates
          </li>
          <li>
            No refund is provided if tour is cancelled within thirty days of the
            travel dates
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TermsSection;
