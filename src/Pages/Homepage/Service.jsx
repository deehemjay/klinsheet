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
          <a href="/academic">Academic Verification</a>
          <a href="/previousemployee">Previous Employee Check</a>
          <a href="/guarantor">Guarantors/ ReferenceCheck</a>
          <a href="/nyscverification">NYSC Verification</a>
          <a href="/addressverification">Address Verification</a>
          <a href="/creditcheck">Credit Check</a>
          <a href="/criminalcheck">Criminal Check</a>
          <a href="/request">Request a Quote</a>
        </div>
      )}
    </div>
  );
}

export default Service