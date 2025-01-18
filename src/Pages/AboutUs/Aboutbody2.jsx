import React from 'react'
import "./Aboutbody2.css"
import { IoSettingsOutline } from "react-icons/io5";
import { FaRecycle } from "react-icons/fa";
import { TbCaptureFilled } from "react-icons/tb";




const Aboutbody2 = () => {
  return (
    <div className="aboutbody2first">
      <div className="aboutbody2second">
        <h2>OUR VALUES</h2>
        <div className="fourboxes">
          <div className="indi4box">
            <div className="first">
              <IoSettingsOutline className="logos" />
              <h6>STEP-UP</h6>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Id ac et enim</p>
          </div>
          <div className="indi4box">
            <div className="first">
              <FaRecycle className="logos" />
              <h6>OPERATIONAL FLOW</h6>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Id ac et enim</p>
          </div>
          <div className="indi4box">
            <div className="first">
              <TbCaptureFilled className="logos" />
              <h6>CUSTOMER FOCUS</h6>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Id ac et enim</p>
          </div>
          <div className="indi4box">
            <div className="first">
              <IoSettingsOutline className="logos" />
              <h6>GROWTH MINDSET</h6>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Id ac et enim</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutbody2