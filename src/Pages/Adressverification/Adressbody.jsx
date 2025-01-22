import React from 'react'
import "./Adressbody.css"
import pex from "../../images/pexels-rdne-9034789.jpg"
import { easeIn, motion } from 'framer-motion'
const Adressbody = () => {


  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0, x: "-100%" }} // Initial position off-screen (left)
        animate={{ opacity: 1, x: 0 }} // Move to final position (center) and fade in
        transition={{ duration: 1, delay: 0.5, ease: easeIn }} // Duration of the animation
        className="slide-in-text"
      >
        <div className="adressone">
          <div className="adresstwo">
            <img src={pex} alt="" />
            <div className="adresstwo1">
              <h2>
                Tracking employees in the circumstance of disciplinary issues,
                absenteeism or any violations
              </h2>
              <p>
                Validating residential addresses of employees or applicants
                safeguards organizations from potential disruptions caused by
                individuals with malicious intentions, including theft of
                sensitive information. Address verification is a crucial part of
                background screening, helping track employees for disciplinary
                issues and confirming their authenticity.
              </p>
              <p>
                With rising competition in recruitment, some candidates resort
                to unfair means. Instances of providing fake addresses are not
                uncommon. This can be driven by organizations preferring local
                candidates or specific geographical backgrounds for certain
                roles.
              </p>
              <p>
                Candidates might manipulate their addresses to hide past
                incidents and secure desired positions. Confirming addresses is
                pivotal in filtering out candidates with false information,
                ensuring a more accurate selection process.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
  return (
    <div className="adressone">
        <div className="adresstwo">
        <img src={pex} alt="" />
      <div className="adresstwo1">
        <h2>
          Tracking employees in the circumstance of disciplinary issues,
          absenteeism or any violations
        </h2>
        <p>
          Validating residential addresses of employees or applicants safeguards
          organizations from potential disruptions caused by individuals with
          malicious intentions, including theft of sensitive information.
          Address verification is a crucial part of background screening,
          helping track employees for disciplinary issues and confirming their
          authenticity.
        </p>
        <p>
          With rising competition in recruitment, some candidates resort to
          unfair means. Instances of providing fake addresses are not uncommon.
          This can be driven by organizations preferring local candidates or
          specific geographical backgrounds for certain roles.
        </p>
        <p>
          Candidates might manipulate their addresses to hide past incidents and
          secure desired positions. Confirming addresses is pivotal in filtering
          out candidates with false information, ensuring a more accurate
          selection process.
        </p>
      </div>
      </div>
    </div>
  );
}

export default Adressbody