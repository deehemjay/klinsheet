import React from 'react'
import "./Body2.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowDownRight } from "react-icons/go";



const Body2 = () => {
  return (
    <div className="body2first">
      <div className="body2firsts">
        <div className="body2second">
          <div className="servicediv">
            <div className="leftsideservice">
              <div className="arrowservice">
                <FaArrowRightLong className="arrow" />
                <p>SERVICE</p>
              </div>
              <h2>
                WE Provide The Best Service For You
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Neque volutpat dolor
              scelerisque quisque nunc sit. Enim diam volutpat pharetra varius.
              At dictum dui integer at. Fusce tincidunt in condimentum viverra
              est amet nunc.
            </p>
          </div>
          <div className="servicediv2">
            <div className="indisservicediv2">
              <div className="indiconts">
                <h3>Job Analysis</h3>
                <div className="unallign">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Neque volutpat dolor
                    scelerisque quisque nunc sit enim Diam Volutpat .
                  </p>
                  <GoArrowDownRight />
                </div>
              </div>

              <hr className="liney" />
            </div>
            <div className="indisservicediv2">
              <div className="indiconts">
                <h3>Business adivsory</h3>
                <div className="unallign">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Neque volutpat dolor
                    scelerisque quisque nunc sit enim Diam Volutpat .
                  </p>
                  <GoArrowDownRight />
                </div>
              </div>

              <hr className="liney" />
            </div>
            <div className="indisservicediv2">
              <div className="indiconts">
                <h3 className="one">HR outsourcing</h3>
                <div className="unallign">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Neque volutpat dolor
                    scelerisque quisque nunc sit enim Diam Volutpat .
                  </p>
                  <GoArrowDownRight />
                </div>
              </div>

              <hr className="liney" />
            </div>
            <div className="indisservicediv2">
              <div className="indiconts">
                <h3>Training</h3>
                <div className="unallign">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Neque volutpat dolor
                    scelerisque quisque nunc sit enim Diam Volutpat .
                  </p>
                  <GoArrowDownRight />
                </div>
              </div>

              <hr className="liney" />
            </div>
          </div>
          <div className='buttondiv'>
            <button>All Services</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body2