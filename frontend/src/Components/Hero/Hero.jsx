import React from 'react'
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import hero_image11 from '../Assets/hero_image11.jpg';


const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <p>Step into Style: Your</p>
                <p>Ultimate Fashion</p>
                <p>Destination</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right" >
            <img src={hero_image11} alt="" style={{ width: '700px', height: 'auto' }} />
        </div>
    </div>
  )
}

export default Hero