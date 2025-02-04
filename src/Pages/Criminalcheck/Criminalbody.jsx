import React from 'react'
import "./Criminalbody.css"
import sipc from "../../images/pexels-yankrukov-7691726.jpg"
import { motion } from 'framer-motion';
import { easeIn } from 'framer-motion/dom';

const Criminalbody = () => {

  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0, y: "100%" }} // Start from below the screen
        animate={{ opacity: 1, y: 0 }} // Slide into place and fade in
        transition={{ duration: 1, delay: 0.5, ease: easeIn}} // Animation duration
        className="slide-in-text"
      >
        <div className="criminalone">
          <div className="criminaltwo">
            <div className="criminalh2p">
              <h2>
                A wrong hire in an organization can result in significant
                consequences and impact such organization negatively
              </h2>
              <p>
                Klinsheet Consulting Limited offers top academic verification
                services in Nigeria, ensuring the best candidate selection, and
                among their range of background checks, the often underestimated
                criminal record check is vital. Running this check is crucial
                for identifying unsuitable candidates based on past records, as
                applicants rarely volunteer criminal history.
              </p>
              <p>
                A wrong hire can lead to severe consequences and liabilities,
                making such checks essential to prevent risks. Beyond
                finance-related roles, these checks safeguard against hiring
                those with abusive histories. Klinsheet's strong security agency
                ties expedite the process by capturing biometrics and revealing
                past criminal records, helping organizations filter out
                potential threats efficiently.
              </p>
            </div>
            <img src={sipc} alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
  return (
    <div className="criminalone">
      <div className="criminaltwo">
        <div className="criminalh2p">
          <h2>
            A wrong hire in an organization can result in significant
            consequences and impact such organization negatively
          </h2>
          <p>
            Klinsheet Consulting Limited offers top academic verification
            services in Nigeria, ensuring the best candidate selection, and
            among their range of background checks, the often underestimated
            criminal record check is vital. Running this check is crucial for
            identifying unsuitable candidates based on past records, as
            applicants rarely volunteer criminal history.
          </p>
          <p>
            A wrong hire can lead to severe consequences and liabilities, making
            such checks essential to prevent risks. Beyond finance-related
            roles, these checks safeguard against hiring those with abusive
            histories. Klinsheet's strong security agency ties expedite the
            process by capturing biometrics and revealing past criminal records,
            helping organizations filter out potential threats efficiently.
          </p>
        </div>
        <img src={sipc} alt="" />
      </div>
    </div>
  );
}

export default Criminalbody