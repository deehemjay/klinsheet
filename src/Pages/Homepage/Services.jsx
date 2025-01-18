import React from 'react'
import { useState } from 'react'
import "./Services.css"

const SERVICES = () => {

    const [ isDropdownopen, setIsDropdownopen ] = useState (false);

    const toggledropdown = () => {
   setIsDropdownopen (!isDropdownopen)
    };
  return (
    <div
      className="dropdown"
      onMouseEnter={toggledropdown}
      onMouseLeave={toggledropdown}
    >
      <a className="dropdownboss" href="">
        SERVICES
      </a>
      {isDropdownopen && (
        <div className="dropdowncontent">
          <a href="/academic">Academic Verification</a>
          <a href="/previousemployee">Previous Employee Check</a>
          <a href="/guarantor">Guarantors/ ReferenceCheck</a>
          <a href="/nyscverification">NYSC Verification</a>
          <a href="addressverification">Address Verification</a>
          <a href="/creditcheck">Credit Check</a>
          <a href="/criminalcheck">Criminal Check</a>
          <a href="request">Request a Quote</a>
        </div>
      )}
    </div>
  );
}

export default SERVICES