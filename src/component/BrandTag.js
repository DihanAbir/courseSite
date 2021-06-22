import React from "react";
import { ImBooks, ImAlarm, ImUserCheck } from "react-icons/im";

function BrandTag() {
  return (
    <div className="brandTag ">
      <div className="row  container">
        <div className="col-md-4">
          <div className="bdiv ">
            <div className="row">
              <div className="col-md-3">
                <h1 className="icons">
                  <ImBooks />
                </h1>
              </div>
              <div className="col-md-9">
                <h5>60+ UX courses</h5>
                <p>The automated process all your website tasks.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bdiv ">
            <div className="row">
              <div className="col-md-3">
                <h1 className="icons">
                  <ImAlarm />
                </h1>
              </div>
              <div className="col-md-9">
                <h5>Life time access</h5>
                <p>The automated process all your website tasks.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bdiv ">
            <div className="row">
              <div className="col-md-3">
                <h1 className="icons">
                  <ImUserCheck />
                </h1>
              </div>
              <div className="col-md-9">
                <h5>Expert instructors</h5>
                <p>The automated process all your website tasks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandTag;
