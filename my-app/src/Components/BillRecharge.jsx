import React from "react";
import { FaMobileAlt, FaLightbulb, FaSatelliteDish, FaTint, FaGasPump, FaUmbrella } from "react-icons/fa";
import { FaPlane, FaBus, FaTrain, FaHotel, FaCar } from "react-icons/fa6";
import "./BillRecharge.css";

const billServices = [
  { name: "Mobile", icon: <FaMobileAlt style={{ color: "#ff6600" }} /> }, // Orange
  { name: "Electricity", icon: <FaLightbulb style={{ color: "#ffd700" }} /> }, // Yellow
  { name: "DTH", icon: <FaSatelliteDish style={{ color: "#800080" }} /> }, // Purple
  { name: "Water", icon: <FaTint style={{ color: "#0088ff" }} /> }, // Blue
  { name: "Gas", icon: <FaGasPump style={{ color: "#ff4500" }} /> }, // Red-Orange
  { name: "Insurances", icon: <FaUmbrella style={{ color: "#006400" }} /> }, // Green
];

const travelServices = [
  { name: "Flight", icon: <FaPlane style={{ color: "#ff0000" }} />, extra: "Powered by Easemytrip.com" }, // Red
  { name: "Bus", icon: <FaBus style={{ color: "#228b22" }} />, extra: "Affordable Rides" }, // Green
  { name: "Train", icon: <FaTrain style={{ color: "#8b4513" }} /> }, // Brown
  { name: "Hotel", icon: <FaHotel style={{ color: "#4b0082" }} />, extra: "Budget-friendly Stay" }, // Indigo
  { name: "Car Rental", icon: <FaCar style={{ color: "#4682b4" }} />, extra: "Drive Easy Anywhere" }, // Steel Blue
];

const Services = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="section">
          <div className="left-content">
            <h2 className="section-title">Bills & Recharge</h2>
            <p className="description">Pay your bills & recharge instantly with Justdial</p>
            <h5>Explore More</h5>
          </div>
          <div className="icons-grid">
            {billServices.map((item, idx) => (
              <div key={idx} className="service-item">
                <div className="icon-box">
                  <span className="icon">{item.icon}</span>
                </div>
                <p className="icon-text">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Center Horizontal Line */}
        <div className="divider"></div>

        {/* Travel Bookings Section */}
        <div className="section">
          <div className="left-content">
            <h2 className="section-title">Travel Bookings</h2>
            <p className="description">Instant ticket bookings for your best travel experience</p>
            <h5>Explore More</h5>
          </div>
          <div className="icon-grid">
            {travelServices.map((item, idx) => (
              <div key={idx} className="service-item1">
                <div className="icon-box">
                  <span className="icon">{item.icon}</span>
                </div>
                <p className="icon-text">{item.name}</p>
                {item.extra && <small className="extra">{item.extra}</small>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;