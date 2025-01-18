import React from 'react'
import "./Service.css"
import { useState } from 'react'
import { FaCaretDown } from "react-icons/fa";

const Service = () => {
      const [isDropdownopens, setIsDropdownopens] = useState(false);
      const toggledropdowns = () => {
        setIsDropdownopens(!isDropdownopens);
      };

  return (
    <div
      className="dropdowns"
      onMouseEnter={toggledropdowns}
      onMouseLeave={toggledropdowns}
    >
      <a className="dropdownbosses" href="">
        SERVICES
        <FaCaretDown />
      </a>
      {isDropdownopens && (
        <div className="dropdowncontents">
          <a href="">Academic Verification</a>
          <a href="">Previous Employee Check</a>
          <a href="/guarantor">Guarantors/ ReferenceCheck</a>
          <a href="">NYSC Verification</a>
          <a href="">Address Verification</a>
          <a href="">Credit Check</a>
          <a href="">Criminal Check</a>
          <a href="">Request a Quote</a>
        </div>
      )}
    </div>
  );
}

export default Service