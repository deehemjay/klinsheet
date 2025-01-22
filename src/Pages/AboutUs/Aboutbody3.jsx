import React from 'react'
import "./Aboutbody3.css"
import grp1 from "../../images/Group 25.png"

const Aboutbody3 = () => {
  return (
    <div className="aboutbody3first">
      <div className="aboutbody3second">
        <div className="imagepart">
          <img src={grp1} alt="" />
        </div>
        <div className="wordpart">
          <div className="twodiv">
            <h1>OUR MISSION</h1>
            <p>
              Our mission is to help instill integrity in the employment process
              of our clients, using our competitive prices to provide the best
              and qualitative background check process and ensuring the right
              people are on their payroll at all times.
            </p>
          </div>
          <div className="twodiv">
            <h1>OUR VISION</h1>
            <p>
              By 2025, we will be the most responsive and most preferred HR
              consulting firm when it comes to quality talent hunts and employee
              verification process in Nigeria.
            </p>
          </div>
          <button>Download Brochure</button>
        </div>
      </div>
    </div>
  );
}

export default Aboutbody3