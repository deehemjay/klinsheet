import React from 'react'
import "./Nyscbody.css"
import pics1 from "../../images/pexels-mizunokozuki-13801640.jpg"
import { motion, easeIn } from 'framer-motion'
const Nyscbody = () => {


  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0, y: "-100%" }} // Start from above the screen
        animate={{ opacity: 1, y: 0 }} // Slide into place and fade in
        transition={{ duration: 1,  delay: 0.5, ease: easeIn}} // Animation duration
        className="slide-in-text"
      >
        <div className="bodyfir">
          <div className="bodysecs">
            <img src={pics1} alt="" />

            <div className="body2secs">
              <h2>
                Identify candidates who have provided false information or do
                not meet the required qualifications
              </h2>
              <p>
                Klinsheet Consulting Limited offers top background check
                services in Nigeria, specializing in verifying National Youth
                Service Corps (NYSC) certificates. These certificates are vital
                for job candidates due to their mandatory one-year service in
                Nigeria.
              </p>
              <p>
                The company helps organizations identify honest and qualified
                applicants by detecting potential deception or inadequate
                qualifications.
              </p>
              <p>
                NYSC is obligatory for Nigerian graduates, fostering unity and
                selfless service. Klinsheet's services ensure accurate applicant
                information and uncover deceitful or underqualified candidates.
                This addresses the issue of fraudulent NYSC certificates used
                during recruitment, ultimately aiding organizations in making
                informed hiring decisions.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
  return (
    <div className="bodyfir">
      <div className="bodysecs">
        <img src={pics1} alt="" />

        <div className="body2secs">
          <h2>
            Identify candidates who have provided false information or do not
            meet the required qualifications
          </h2>
          <p>
            Klinsheet Consulting Limited offers top background check services in
            Nigeria, specializing in verifying National Youth Service Corps
            (NYSC) certificates. These certificates are vital for job candidates
            due to their mandatory one-year service in Nigeria.
          </p>
          <p>
            The company helps organizations identify honest and qualified
            applicants by detecting potential deception or inadequate
            qualifications.
          </p>
          <p>
            NYSC is obligatory for Nigerian graduates, fostering unity and
            selfless service. Klinsheet's services ensure accurate applicant
            information and uncover deceitful or underqualified candidates. This
            addresses the issue of fraudulent NYSC certificates used during
            recruitment, ultimately aiding organizations in making informed
            hiring decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nyscbody