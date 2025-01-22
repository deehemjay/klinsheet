import React from 'react'
import "./Creditbody.css"
import mgs1 from "../../images/pexels-yankrukov-7793122.jpg"
import mgs2 from "../../images/pexels-tima-miroshnichenko-5439475 (1).jpg"
import { easeIn, motion } from 'framer-motion'
const Creditbody = () => {


  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0, x: "100%" }} // Start from off-screen to the right
        animate={{ opacity: 1, x: 0 }} // Slide into place and fade in
        transition={{ duration: 1, delay: 0.5, ease: easeIn }} // Animation duration
        className="slide-in-text"
      >
        <div className="bdyone">
          <div className="bdytwo">
            <div className="h2andp">
              <h2>
                Determine if an employee is qualified for a loan and help
                yourself identify individuals who are “high risk”
              </h2>
              <p>
                Prioritizing credit checks for employees is a vital HR
                responsibility, and Klinsheet Consulting Limited offers
                extensive loan validation and background check services in
                Nigeria, helping organizations make informed hiring decisions,
                assess loan eligibility, and manage potential risks associated
                with loans and mortgages, thus ensuring a secure and
                well-informed approach to employment and financial decisions.
              </p>
            </div>
            <div className="twoimgs">
              <img src={mgs1} alt="" />
              <img src={mgs2} alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
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