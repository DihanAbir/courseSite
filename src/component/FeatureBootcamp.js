import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import featured from "../data/featured";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function FeatureBootcamp() {
  return (
    <div className="text-center featured">
      <h3 className="sectionHeader">Our featured FeatureBootcamp</h3>
      <Carousel responsive={responsive} className="brandTag px-1 mx-auto">
        {featured.map((course) => (
          <div className="p-3 mt-2">
            <div className="courseCard ">
              <div className="img">
                <img className="img-fluid" src={course.image} alt="" />
              </div>
              <div className="pt-3 pb-3 px-2">
                <small className="category">{course.category}</small>
                <h4 className="title">{course.name}</h4>
                <p className="py-1 description">{course.description}</p>
                <div className="reviewcard d-flex justify-content-between">
                  <div className="review">
                    <div className="stars"></div>
                    <p>
                      <span className="perReview">({course.reviews})</span>{" "}
                      based on {course.reviews}
                    </p>
                  </div>
                  <h2 className="totalprice">${course.price}</h2>
                </div>
                <div className="btn w-100 btn-cust-primary">Find Out More</div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default FeatureBootcamp;
