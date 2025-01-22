import React from 'react'
import "./Hero.css"
import Animatedimgs from './Animation';


const Hero = () => {
  return (
    <div className="herofirst">
      <div className="herosecond">
        <div className="herowords">
          <h1>
            The Most Dependable Background Check Company <br />
            In Nigeria.
          </h1>
          <a href="request">
            <button>Free consultation</button>
          </a>
        </div>
        <div className="heropic">
          <Animatedimgs />
        </div>
      </div>
    </div>
  );
}

export default Hero