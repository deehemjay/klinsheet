import React from 'react'
import "./Footer.css"
import fra from "../../images/Frame 11.png"
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";





const Footer = () => {
  return (
    <div className="footerfirst">
      <div className="footersecond">
        <div className="footerpart1">
          <h3>
            Stay Connected! Subscribe For The <br />
            Latest Updates
          </h3>
          <div className="inputdiv">
            <input className="styleinpu" type="text" placeholder="Email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footerpart2">
          <hr className="footerline" />
          <nav className="footernav">
            <img src={fra} alt="" />
            <div className="footerwords">
              <a href="/">HOME</a>
              <a href="/about">ABOUT US</a>
              <a href="/request">REQUEST A QUOTE</a>
              <a href="/insight">INSIGHT</a>
              <a href="/">JOB PORTAL</a>
            </div>
            <div className="footerlogo">
              <div className="indilogo">
                <a href="">
                  <IoLogoInstagram className="logo" />
                </a>
              </div>
              <div className="indilogo">
                <a href="">
                  <TiSocialFacebook className="logo" />
                </a>
              </div>
              <div className="indilogo">
                <a href="">
                  <RiTwitterXFill className="logo" />
                </a>
              </div>
              <div className="indilogo">
                <a href="">
                  <TiSocialLinkedin className="logo" />
                </a>
              </div>
            </div>
          </nav>
          <div className="footerwordsandline">
            <hr className="footerline" />
            <p>@ klinsheet 2024. All Right Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer