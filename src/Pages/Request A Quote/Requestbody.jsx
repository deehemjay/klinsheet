import React from "react";
import "./Requestbody.css";

const Requestbody = () => {
  return (
    <div className="firstdiver">
      <div className="seconddiver">
        <div className="thirddiver">
          <div className="firstparter">
            <h4>Which Service Are You Interested In?</h4>
            <div className="allboxes">
              <div className="boxwrds">
                <input type="checkbox" />
                <p>Academic Verification</p>
              </div>
              <div className="boxwrds">
                <input type="checkbox" />
                <p>Personal Employee Check</p>
              </div>
              <div className="boxwrds">
                <input type="checkbox" />
                <p>Guarantors/ Reference Check</p>
              </div>
              <div className="boxwrds">
                <input type="checkbox" />
                <p>NYSC Verification</p>
              </div>
              <div className="boxwrds">
                <input type="checkbox" />
                <p>Address Verification</p>
              </div>
              <div className="boxwrds">
                <input type="checkbox" />
                <p>Credit Check</p>
              </div>
              <div className="boxwrds">
                <input type="checkbox" />
                <p>Criminal Check</p>
              </div>
              <div className="boxwrds">
                <input type="checkbox" />
                <p>Request a Quote</p>
              </div>
            </div>
          </div>
          <div className="secondparter">
            <h2>fill the form</h2>
            <div className="formbelow">
              <div className="indiformer">
                <h6>Your Name</h6>
                <input type="text" />
              </div>
              <div className="indiformer">
                <h6>Email</h6>
                <input type="text" />
              </div>
              <div className="indiformer">
                <h6>Phone Number</h6>
                <input type="text" />
              </div>
              <div className="indiformer">
                <h6>Country</h6>
                <input type="text" />
              </div>
            </div>
            {/* <div className="uploadspot">
              <h6>Upload File</h6>
              <input className="file" type="file" placeholder="none" />
            </div> */}

            <div className="uploadspot">
              <h6>Upload File</h6>
              <div class="upload-container">
                <p>Drag File Here Or Click The Button Below</p>
                <label for="file-upload" class="upload-btn">
                  Upload File
                </label>
                <input type="file" id="file-upload" hidden />
              </div>
            </div>
            <div className="messageside">
              <h6>Message</h6>
              <textarea></textarea>
            </div>
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Requestbody;
