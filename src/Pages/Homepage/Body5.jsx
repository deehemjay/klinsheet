import React from 'react'
import "./Body5.css"
import { FaArrowRightLong } from "react-icons/fa6";
import pic4 from "../../images/Mask group.png"


const Body5 = () => {
  return (
    <div className="body5first">
      <div className="wrappet">
        <div className="body5second">
          <div className="body5firstconti">
            <div className="leftyside">
              <div className="iwrdarrow">
                <FaArrowRightLong className="wat" />
                <p>BLOG</p>
              </div>
              <h2>News and insights</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Neque volutpat dolor
              scelerisque quisque nunc sit. Enim diam volutpat pharetra varius.
              At dictum dui integer at. Fusce tincidunt in condimentum viverra
              est amet nunc.
            </p>
          </div>
          <div className="blogsideholder">
            <div className="blog1">
              <img src={pic4} alt="" />
              <div className="wrd2">
                <p>November 26, 2024</p>
                <div>
                  <a href="">Basic Marketing and Web Development</a>
                </div>
              </div>
            </div>
            <div className="blog1">
              <img src={pic4} alt="" />
              <div className="wrd2">
                <p>November 26, 2024</p>
                <div>
                  <div>
                    <a href="">Basic Marketing and Web Development</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog1">
              <img src={pic4} alt="" />
              <div className="wrd2">
                <p>November 26, 2024</p>
                <div>
                  <a href="">Basic Marketing and Web Development</a>
                </div>
              </div>
            </div>
          </div>
          <div className="buti">
            <a href="insight">
              <button>All News</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body5