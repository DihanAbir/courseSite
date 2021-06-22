import React from "react";

function Banner() {
  return (
    <div className="banner  text-end">
      <div className="row container-fluid">
        <div className="col-md-6 pl-5 banner-content">
          <h1>Online Learning Platform</h1>
          <p>
            Build skills with courses, certificates, and degrees online from
            world-class universities and companies
          </p>
          <button className=" btn-custome-p">Join For Free</button>
        </div>
        <div className="col-md-6  banner-content"></div>
      </div>
    </div>
  );
}

export default Banner;
