import React from 'react'
import "./Body3.css"
import { FaArrowRightLong } from "react-icons/fa6";
import pic1 from "../../images/Group 8.png"
import pic2 from "../../images/Group 7.png"
import pic3 from "../../images/Group 6.png"


const Body3 = () => {
  return (
    <div className="body3first">
      <div className="body3second">
        <div className="body3firstcontent">
          <div className="firstright">
            <div className="wrdarr">
              <FaArrowRightLong color="#FE5925" />
              <p>TEAM</p>
            </div>
            <h3>Our smart people</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Neque volutpat dolor
            scelerisque quisque nunc sit. Enim diam volutpat pharetra varius. At
            dictum dui integer at. Fusce tincidunt in condimentum viverra est
            amet nunc.
          </p>
        </div>

        <div className="pictureside">
          <div className="firstpicture">
            <img src={pic1} alt="" />
            <h5>Adesope Tomilola</h5>
            <p>HR</p>
          </div>
          <div className="secondpicture">
            <img src={pic2} alt="" />
            <h5>Godwin Victoria</h5>
            <p>CEO</p>
          </div>
          <div className="thirdpicture">
            <img src={pic3} alt="" />
            <h5>EDEN EMMANUEL</h5>
            <p>HR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body3