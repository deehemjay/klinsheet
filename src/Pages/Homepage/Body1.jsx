import React from 'react'
import "./Body1.css"
import onepic from "../../images/Ellipse 2.png"
import twopic from "../../images/Ellipse 3.png"
import threepic from "../../images/Group 3.png"
import { FaArrowRightLong } from "react-icons/fa6";


const Body1 = () => {
  return (
    <div className="body1first">
      <div className="body1second">
        <div className="body1secondfirst">
          <div className="body1secondfirst2">
            <div className="arrowword">
              <div className="arrowwordone">
                <FaArrowRightLong className="arrow" />
                <p>About Us</p>
              </div>
              <div className="htwo">
                <h2>WHAT WE DO</h2>
              </div>
            </div>

            <img src={threepic} alt="" />
          </div>
        </div>

        <div className="body1secondsecond">
          <div className="bothstyling">
            <div className="inwords">
              <p>
                Lorem ipsum dolor sit amet consectetur. Neque volutpat dolor
                scelerisque quisque nunc sit. Enim diam volutpat pharetra
                varius. At dictum dui integer at. Fusce tincidunt in condimentum
                viverra est amet nunc.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Neque volutpat dolor
                scelerisque quisque nunc sit. Enim diam volutpat pharetra
                varius. At dictum dui integer at. Fusce tincidunt in condimentum
                viverra est amet nunc.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Neque volutpat dolor
                scelerisque quisque nunc sit. Enim diam volutpat pharetra
                varius. At dictum dui integer at. Fusce tincidunt in condimentum
                viverra est amet nunc.
              </p>
            </div>
            <div className="wrapper">
              <div className="indiwrapper">
                <h2>
                  12<span className="styleboth">0+</span>
                </h2>
                <p>projects</p>
              </div>
              <div className="indiwrapper">
                <h2>
                  3<span className="styleboth">2</span>
                </h2>
                <p>return Investment</p>
              </div>
              <div className="indiwrapper">
                <h2>
                  2<span className="styleboth">8+</span>
                </h2>
                <p>partners</p>
              </div>
              <div className="indiwrapper">
                <h2>
                  3<span className="styleboth">6</span>
                </h2>
                <p>National Coverage</p>
              </div>
            </div>
            <button>About Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body1