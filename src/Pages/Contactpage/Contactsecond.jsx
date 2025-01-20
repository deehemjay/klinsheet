import React from "react";
import "./Contactsecond.css";

const Contactsecond = () => {
  return (
    <div className="contactone">
      <div className="contactsec">
        <div className="partone">
          <div className="contacthp">
            <h1>Let's Talk</h1>
            <p>
              We look forward to hearing from you and assisting you on your
              journey.
            </p>
          </div>
          <div className="formfill">
            <div className="indiform">
              <h6>Name</h6>
              <input type="text" />
            </div>
            <div className="indiform">
              <h6>Email</h6>
              <input type="text" />
            </div>
            <div className="indiform">
              <h6>Phone Number</h6>
              <input type="text" />
            </div>
            <div className="indiform">
              <h6>Message</h6>
              <textarea placeholder="type your message...."></textarea>
            </div>
          </div>
          <div className="but">
            <button>Submit</button>
          </div>
        </div>
        <div className="parttwo">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0149577291704!2d3.315360773993143!3d6.519789293472739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8faca6aa88b5%3A0xc5254caea85559aa!2sAbbey%20Mortgage%20Bank%20Plc!5e0!3m2!1sen!2sng!4v1737113387087!5m2!1sen!2sng"
            width="600"
            height="100%"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contactsecond;
