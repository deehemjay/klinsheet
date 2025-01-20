import React from 'react'
import "./Contactfirst.css"
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";




const Contactfirst = () => {
  return (
    <div className="firstdiv1">
      <div className="secondiv1">
        <div className="indibox1">
          <IoMdMail className="colorlogo1" />
          <p>Info@Klinsheetcom.org</p>
        </div>
        <div className="indibox1">
          <FaPhoneAlt className="colorlogo1" />
          <p>+234-9156219012</p>
        </div>
        <div className="indibox1">
          <FaLocationDot className="colorlogo1" />
          <p>Abbey Mortgage Bank Building 51, Okota Road , Okota ,Lagos.</p>
        </div>
      </div>
    </div>
  );
}

export default Contactfirst