import React from "react";
import "./Footerreq.css";
import fra from "../../images/Frame 11.png";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";

const Footerone = () => {
  return (
    <div className="footerfirster">
      <div className="footerseconder">
        <div className="footerpart1er">
          <h3>Stay Connected! Subscribe For The Latest Updates</h3>
          <div className="inputdiver">
            <input className="styleinpuer" type="text" placeholder="Email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footerpart2er">
          <hr className="footerlineer" />
          <nav className="footernaver">
            <img src={fra} alt="" />
            <div className="footerwordser">
              <a href="/">HOME</a>
              <a href="/about">ABOUT US</a>
              <a href="request">REQUEST A QUOTE</a>
              <a href="insight">INSIGHT</a>
              <a href="">JOB PORTAL</a>
            </div>
            <div className="footerlogoer">
              <div className="indilogoer">
                <a href="">
                  <IoLogoInstagram className="logoer" />
                </a>
              </div>
              <div className="indilogoer">
                <a href="">
                  <TiSocialFacebook className="logoer" />
                </a>
              </div>
              <div className="indilogoer">
                <a href="">
                  <RiTwitterXFill className="logoer" />
                </a>
              </div>
              <div className="indilogoer">
                <a href="">
                  <TiSocialLinkedin className="logoer" />
                </a>
              </div>
            </div>
          </nav>
          <div className="footerwordsandlineer">
            <hr className="footerlineer" />
            <p>@ klinsheet 2024. All Right Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footerone;
