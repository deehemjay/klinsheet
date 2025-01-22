import React from 'react'
import "./Academicbody.css"
import grp2 from "../../images/Mask group (6).png"
import ecl5 from "../../images/Ellipse 3 (2).png"
import { useState } from 'react'
import { motion } from 'framer-motion'

const Academicbody = () => {

  // const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0, x: "-100%" }} // Initial position off-screen (left)
        animate={{ opacity: 1, x: 0 }} // Move to final position (center) and fade in
        transition={{ duration: 1, delay: 0.5, ease: easeIn }} // Duration of the animation
        className="slide-in-text"
      >
        <div className="firstlydiv">
          <div className="secondlydiv">
            <h2>VERIFICATION OF ACADEMIC CREDENTIALS</h2>
            <p>
              Klinsheet Consulting Limited provides the best academic
              verification in Nigeria, which allows us ensure that an
              organization employs the best and most suitable candidate for a
              position. The importance of academic verification in Nigeria
              cannot be over stated owning to the fact that the information
              submitted by candidates is often times incomplete or inaccurate,
              not detecting these errors can lead to an organization making a
              wrong hire wrong hire in an organization can result in significant
              consequences and impact such organization negatively.
            </p>
            <img src={grp2} alt="" />
            <p>
              In the world we live today, Degree verification has become a key
              aspect in reviewing job applicants as it is no longer a secret
              that applicants may engage in unlawful acts such as forging names,
              dates, education history, details on certificate etc. When
              applying for a position. Educational certificate verification is
              essential in identifying and helping to rule out such applicants
              there by preventing an organization from hiring an unqualified
              individual to fill a position. Over the years, we have been able
              to establish tiles and build a strong network among universities,
              polytechnics, colleges of education and various educational
              providers which gives us first hand access to educational records
              and enables us to obtain accurate data on an applicant or
              employee's full academic transcript. Our degree verification
              service includes verifying foreign academic certificates and
              education history.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="firstlydiv">
      <div className="secondlydiv">
        <h2>VERIFICATION OF ACADEMIC CREDENTIALS</h2>
        <p>
          Klinsheet Consulting Limited provides the best academic verification
          in Nigeria, which allows us ensure that an organization employs the
          best and most suitable candidate for a position. The importance of
          academic verification in Nigeria cannot be over stated owning to the
          fact that the information submitted by candidates is often times
          incomplete or inaccurate, not detecting these errors can lead to an
          organization making a wrong hire wrong hire in an organization can
          result in significant consequences and impact such organization
          negatively.
        </p>
        <img src={grp2} alt="" />
        <p>
          In the world we live today, Degree verification has become a key
          aspect in reviewing job applicants as it is no longer a secret that
          applicants may engage in unlawful acts such as forging names, dates,
          education history, details on certificate etc. When applying for a
          position. Educational certificate verification is essential in
          identifying and helping to rule out such applicants there by
          preventing an organization from hiring an unqualified individual to
          fill a position. Over the years, we have been able to establish tiles
          and build a strong network among universities, polytechnics, colleges
          of education and various educational providers which gives us first
          hand access to educational records and enables us to obtain accurate
          data on an applicant or employee's full academic transcript. Our
          degree verification service includes verifying foreign academic
          certificates and education history.
        </p>
      </div>
    </div>
  );
}

export default Academicbody