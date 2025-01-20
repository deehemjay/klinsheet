import React from 'react'
import "./Creditbody.css"
import mgs1 from "../../images/pexels-yankrukov-7793122.jpg"
import mgs2 from "../../images/pexels-tima-miroshnichenko-5439475 (1).jpg"

const Creditbody = () => {
  return (
    <div className="bdyone">
      <div className="bdytwo">
        <div className="h2andp">
          <h2>
            Determine if an employee is qualified for a loan and help yourself
            identify individuals who are “high risk”
          </h2>
          <p>
            Prioritizing credit checks for employees is a vital HR
            responsibility, and Klinsheet Consulting Limited offers extensive
            loan validation and background check services in Nigeria, helping
            organizations make informed hiring decisions, assess loan
            eligibility, and manage potential risks associated with loans and
            mortgages, thus ensuring a secure and well-informed approach to
            employment and financial decisions.
          </p>
        </div>
        <div className="twoimgs">
          <img src={mgs1} alt="" />
          <img src={mgs2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Creditbody