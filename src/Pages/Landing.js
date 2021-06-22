import React from "react";
import Banner from "../component/Banner";
import BrandTag from "../component/BrandTag";
import FeatureBootcamp from "../component/FeatureBootcamp";
import FeatureCourses from "../component/FeatureCourses";

function Landing() {
  return (
    <div>
      <Banner />
      <BrandTag />
      <FeatureCourses />
      <FeatureBootcamp />
    </div>
  );
}

export default Landing;
