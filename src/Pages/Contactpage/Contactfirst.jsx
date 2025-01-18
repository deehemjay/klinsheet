import React from 'react'
import "./Contactfirst.css"
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";




const Contactfirst = () => {
  return (
    <div className="firstdiv">
      <div className="secondiv">
        <div className="indibox">
          <IoMdMail className="colorlogo" />
          <p>Info@Klinsheetcom.org</p>
        </div>
        <div className="indibox">
          <FaPhoneAlt className="colorlogo" />
          <p>+234-9156219012</p>
        </div>
        <div className="indibox">
          <FaLocationDot className="colorlogo" />
          <p>Abbey Mortgage Bank Building 51, Okota Road , Okota ,Lagos.</p>
        </div>
      </div>
    </div>
  );
}

export default Contactfirst