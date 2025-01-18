import React from 'react'
import logo from "../../images/logo (1)klinsheet 1.png";
import "./Homepage.css";
import SERVICES from './Services';
import Dropdown from './Dropdown';


const Homepage = () => {
  return (
    <div className="homefirst">
      <header className="homesecond">
        <img src={logo} alt="" />
        <div className="homewords">
          <nav className="homethird">
            <a href="/">HOME</a>
            <a href="/about">ABOUT US</a>
            <SERVICES />
            <a href="/request">REQUEST A QUOTE</a>
            <a href="/insight">INSIGHT</a>
            <a href="">JOB PORTAL</a>
          </nav>

          <button className="butty">
            <a href="/contactus">CONTACT US</a>
          </button>
        </div>
        <div className="dropstyle">
          <Dropdown />
        </div>
      </header>
    </div>
  );
}

export default Homepage