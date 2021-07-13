import React from "react";
import { Link } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";

//components
import Header from "../Headers/Header";
import FooterDark from "../Footers/FooterDark";

//Imgs
import bgFourteen from "../../assets/custom-assets/homepage-slider.jpg";

const ServiceComponent = ({ title, firstText, secondText, imgSrc }) => {
  return (
    <>
      <ReactTitle title="Dosh Services - Careers" />
      <Header />
      <main>
        {/* <!-- breadcrumb-area-start --> */}
        <div
          className="breadcrumb-area pt-230 pb-235"
          // style={{ backgroundImage: `url(${bgFourteen})` }}
          style={{ backgroundImage: `url(https://res.cloudinary.com/dosh-services/image/upload/v1626160906/home_page_sliderh_rjsnyv.jpg)` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>{title}</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <span>{title}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- breadcrumb-area-ends --> */}

        {/* <!-- service-component-area-start using same styles as that of experience section--> */}
        <div className="experience-area pt-130 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7 mb-30">
                <div className="experience-text">
                  <h1>{title}</h1>
                  {firstText? <p>{firstText}</p> : null}
                  {secondText? <p>{secondText}</p> : null}
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <div className="experience-single mb-30">
                  <div className="experience-img">
                    <img src={imgSrc} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- experience-area-end --> */}
      </main>

      <FooterDark />
    </>
  );
};

export default ServiceComponent;
