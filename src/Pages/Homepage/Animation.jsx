import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./Animation.css";
import pics from "../../images/slide one.png";
import picture from "../../images/slide two.png";



    const Animatedimgs = () => {
        const  [ currentImage, setCurrentImage ] = useState (1);

        useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 1 ? 2 : 1)); }, 5000);

      return () => clearInterval(interval);
  }, []);
        

  return (
    <div className="animat">
      <div className="imgcontainer">
        <img
          src={picture}
          alt="img1"
          className={`image ${currentImage === 1 ? "visible" : "hidden"}`}
        />
        <img
          src={pics}
          alt="img1"
          className={`image ${setCurrentImage === 2 ? "visible" : "hidden"}`}
        />
      </div>
    </div>
  );
}

export default Animatedimgs