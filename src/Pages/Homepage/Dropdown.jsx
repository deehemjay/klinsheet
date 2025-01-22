import React from "react";
import { useState } from "react";
import "./Dropdown.css";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
import { CgCloseR } from "react-icons/cg";
import Service from "./Service";


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdownfirst">
      <div className="dropping" onClick={toggleMenu}>
        {isOpen ? (
          <CgCloseR style={{ fontSize: "30px" }} />
        ) : (
          <MdOutlineAutoAwesomeMotion style={{ fontSize: "30px" }} />
        )}
      </div>
      <div className={`slidingmenu ${isOpen ? "open" : ""}`}>
        <a href="/">HOME</a>
        <a href="about">ABOUT US</a>
        <div className="responsiveservices">
          <Service />
        </div>
        <a href="request">REQUEST A QUOTE</a>
        <a href="insight">INSIGHT</a>
        <a href="/">JOB PORTAL</a>

        <button className="butty">
          <a href="/contactus">CONTACT US</a>
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
