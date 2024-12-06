import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from "../assets/cover.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
       <div 
        className="headerContainer" 
        style={{ backgroundImage: `url(${HeroImage})` }}  
      >
        <h1>The Comfort Your Home Deserves</h1>
        <p>Soft, cozy, and stylish furniture for your home</p>
         <Link to="/collection">
          <button>Our Collection</button>
          </Link>
      </div>
    </div>
  )
}

export default Home;
