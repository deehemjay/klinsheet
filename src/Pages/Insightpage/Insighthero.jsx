import React from "react";
import "./Insighthero.css";
import blg from "../../images/Blog.png";
import blg1 from "../../images/Mask group (1).png";
import blg2 from "../../images/Mask group (2).png";
import blg3 from "../../images/Mask group (3).png";
import blg4 from "../../images/Mask group (4).png";
import blg5 from "../../images/Mask group (5).png";

const Insighthero = () => {
  return (
    <div className="insightherofirst">
      <div className="insightherosecond">
        <div className="blogwrapper">
          <div className="indiblog">
            <img src={blg} alt="" />
            <div className="wordys">
              <div>
                <a href="">
                  Achieving Organisational Excellence by Leveraging Cohort-based
                  Learning
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu maecenas cursus in
                morbi nulla. Tortor elit urna vitae duis lorem. Odio integer
                tristique ut mauris quisque dictumst elementum. Quisque lacinia
                cras eu tortor adipiscing fames consectetur.
              </p>

              <div className="pie">
                <p>Tuesday March 5th, 2024</p>
              </div>
            </div>
          </div>
          <div className="indiblog">
            <img src={blg1} alt="" />
            <div className="wordys">
              <div>
                <a href="">
                  The culture of continuous learning: A driver of organisational
                  success
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu maecenas cursus in
                morbi nulla. Tortor elit urna vitae duis lorem. Odio integer
                tristique ut mauris quisque dictumst elementum. Quisque lacinia
                cras eu tortor adipiscing fames consectetur.
              </p>

              <div className="pie">
                <p>Thursday March 7th, 2024</p>
              </div>
            </div>
          </div>
          <div className="indiblog">
            <img src={blg2} alt="" />
            <div className="wordys">
              <div>
                <a href="">
                  10 outsourced services your business can benefit from
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu maecenas cursus in
                morbi nulla. Tortor elit urna vitae duis lorem. Odio integer
                tristique ut mauris quisque dictumst elementum. Quisque lacinia
                cras eu tortor adipiscing fames consectetur.
              </p>

              <div className="pie">
                <p>Sunday March 10th, 2024</p>
              </div>
            </div>
          </div>
          <div className="indiblog">
            <img src={blg3} alt="" />
            <div className="wordys">
              <div>
                <a href="">
                  Achieving Organisational Excellence by Leveraging Cohort-based
                  Learning
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu maecenas cursus in
                morbi nulla. Tortor elit urna vitae duis lorem. Odio integer
                tristique ut mauris quisque dictumst elementum. Quisque lacinia
                cras eu tortor adipiscing fames consectetur.
              </p>

              <div className="pie">
                <p>Tuesday March 5th, 2024</p>
              </div>
            </div>
          </div>
          <div className="indiblog">
            <img src={blg4} alt="" />
            <div className="wordys">
              <div>
                <a href="">
                  The culture of continuous learning: A driver of organisational
                  success
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu maecenas cursus in
                morbi nulla. Tortor elit urna vitae duis lorem. Odio integer
                tristique ut mauris quisque dictumst elementum. Quisque lacinia
                cras eu tortor adipiscing fames consectetur.
              </p>

              <div className="pie">
                <p>Thursday March 7th, 2024</p>
              </div>
            </div>
          </div>
          <div className="indiblog">
            <img src={blg5} alt="" />
            <div className="wordys">
              <div>
                <a href="">
                  10 outsourced services your business can benefit from
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu maecenas cursus in
                morbi nulla. Tortor elit urna vitae duis lorem. Odio integer
                tristique ut mauris quisque dictumst elementum. Quisque lacinia
                cras eu tortor adipiscing fames consectetur.
              </p>

              <div className="pie">
                <p>Sunday March 10th, 2024</p>
              </div>
            </div>
          </div>
        </div>
        <button>Loading More ......</button>
      </div>
    </div>
  );
};

export default Insighthero;
