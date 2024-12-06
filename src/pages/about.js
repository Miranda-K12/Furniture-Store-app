import React from "react";
import Company from "../assets/company.jpg";
import "../styles/about.css";
function About() {
  return (
    <div className="about">
      <div className="aboutText">
        <h1> Welcome to Modern Living Furniture!</h1>
        <p>Discover timeless designs and unmatched quality for every room in your home. From sleek,
          modern sofas to rustic dining tables, we offer a curated selection to elevate your space.
        </p>
        <p>Whether you’re seeking comfort, style, or functionality, our handcrafted pieces are designed to fit
          your lifestyle. Browse our collections and find your perfect match.
        </p>
        <p>Transform your house into a home with Modern Living Furniture. Your dream space starts here!</p>
      </div>
      <div
        className="aboutImage">
                <img src={Company} alt="Contact Us" />
  </div>
    </div>
  );
}

export default About;