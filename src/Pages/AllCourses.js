import React from "react";
import featured from "../data/featured";

function AllCourses() {
  return (
    <div>
      <div className="banner2 ">
        <div className="text-light container ">
          <h1>Our Courses</h1>
          <p>Home | Courses</p>
        </div>
      </div>
      <div className="row container featured mx-auto coursesMaindiv">
        {featured.map((course) => (
          <div className="col-md-4">
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
                  <div className="btn w-100 btn-cust-primary">
                    Find Out More
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCourses;
