import React from 'react'
import "./Aboutbody1.css"
import grp from "../../images/Group 22.png"

const Aboutbody1 = () => {
  return (
    <div className="aboutbodyfirst">
      <div className="aboutbody2">
        <div className="aboutleftyside">
          <h3>WHO WE ARE</h3>
          <p>
            Quality, Speed, Due Diligence and Transparency. Klinsheet Consulting
            Limited is a registered HR firm in Nigeria.We are the top
            background check company in Nigeria.We deliver exceptional value to
            our clients in area of Background Check services, Recruitment,
            Training, Business Advisory and Outsourcing. We have built capacity
            in delivering value to all our customers. With Our experience of
            over 6 years in all kinds ofbackground check services, we are
            confident that we will help you to get the right candidates at all
            times.We leverage automated processesin all our projects, and we
            have the internal capabilities to deliver innovative IT
            interventions for HR problems. Becoming your servicesprovider, we
            will support your projects, processes and people with our expertise
          </p>
        </div>
        <div className='rightside'>
<img src={grp} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Aboutbody1