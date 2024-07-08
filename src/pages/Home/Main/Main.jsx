import React from 'react';

import './Main.css'; 

import HomeImage from '../../../assets/images/Home-Image.svg';
import Star from '../../../assets/images/Thrustpilot-Star.svg';
import HomeBackground from "../../../assets/images/Home-Background.svg"


function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            Beautiful food & takeaway, <span className="highlight">delivered</span> to your door
          </h1>
          <p className="home-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
          </p>
          <button className="primary-button">Place an Order</button>
          <div className="trustpilot-container">
            <img className="trustpilot-logo" alt="Trustpilot-logo" src={Star} />
            <div className="trustpilot-text">Trustpilot</div>
          </div>
          <div className="rating-text">
            <span className="highlight">4.8 out of 5</span> based on 2000+ reviews
          </div>
        </div>
        <div className="image-container">
          <img className="home-img" alt="food-img" src={HomeImage} />
        </div>
      </div>
      <div className='home-background'>
        <img src={HomeBackground} alt='background'></img>
      </div>
    </div>
  );
}

export default Home;
