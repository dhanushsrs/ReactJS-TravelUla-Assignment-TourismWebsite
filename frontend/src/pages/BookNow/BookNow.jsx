import React, { useState } from "react";
import "./BookNow.css";

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adults: "",
    children: "",
    travel_date: "",
    additional_info: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="book-now-contain">
      <div className="form-container">
        <h2>Book Your Dream Holiday Today!</h2>
        <form onSubmit={handleSubmit} className="book-now-form">
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Number of Adults Field */}
          <div className="form-group">
            <label htmlFor="adults">Number of Adults*</label>
            <input
              type="number"
              id="adults"
              name="adults"
              placeholder="Number of Adults"
              min="1"
              value={formData.adults}
              onChange={handleChange}
              required
            />
          </div>

          {/* Number of Children Field */}
          <div className="form-group">
            <label htmlFor="children">Number of Children</label>
            <input
              type="number"
              id="children"
              name="children"
              placeholder="Number of Children (4-9 years)"
              min="0"
              value={formData.children}
              onChange={handleChange}
            />
          </div>

          {/* Travel Date Field */}
          <div className="form-group">
            <label htmlFor="travel_date">Travel Date*</label>
            <input
              type="date"
              id="travel_date"
              name="travel_date"
              placeholder="Select your travel date"
              value={formData.travel_date}
              onChange={handleChange}
              required
            />
          </div>

          {/* Additional Information (Textarea) */}
          <div className="form-group">
            <label htmlFor="additional_info">Additional Information</label>
            <textarea
              id="additional_info"
              name="additional_info"
              placeholder="Any special requests or additional information?"
              value={formData.additional_info}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
