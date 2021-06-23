import React from "react";
import { Link } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";

// components
import Header from "../../components/Headers/Header";
import FooterDark from "../../components/Footers/FooterDark";

// Imgs
import bgFourteen from "../../assets/img/bg/bg-14.jpg";
import pckgOne from "../../assets/img/icon/p-1.png";
import pckgTwo from "../../assets/img/icon/p-1.png";
import pckgThree from "../../assets/img/icon/p-1.png";

const Packages = () => {
  return (
    <>
      <ReactTitle title="Dosh Services - Packages" />
      <Header />
      <main>
        {/* <!-- breadcrumb-area-start --> */}
        <div
          className="breadcrumb-area pt-230 pb-235"
          style={{ backgroundImage: `url(${bgFourteen})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Our Packages</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <span>packages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- breadcrumb-area-ends --> */}

        {/* <!-- pricing-area-start --> */}
        <div className="pricing-area pt-120 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                <div className="section-title text-center ml-50 mr-50 mb-80">
                  <span className="border-left-1"></span>
                  <span>our packages</span>
                  <span className="border-right-1"></span>
                  <h1>Exclusive Dosh Packages</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="pricing-wrapper  single-pricing text-center mb-30">
                  <div className="pricing-icon">
                    <img src={pckgOne} alt="" />
                  </div>
                  <div className="pricing-top-text">
                    <h3>Standard Plan</h3>
                  </div>
                  <div className="pricing-menu">
                    <ul>
                      <li>Branding strategy & identity</li>
                      <li> Marketing campaign & PR</li>
                      <li> Video production & editing</li>
                      <li>User experience designing</li>
                      <li> Content development</li>
                    </ul>
                  </div>
                  <div className="price-count">
                    <h1>
                      <span className="usd">$</span>500
                    </h1>
                  </div>
                  <div className="pricing-button">
                    <Link to="#">
                      {" "}
                      <span className="pricings-button">
                        select plan <i className="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="pricing-wrapper single-pricing active text-center mb-30">
                  <div className="pricing-tag">
                    <span>popular plan</span>
                  </div>
                  <div className="pricing-icon">
                    <img src={pckgTwo} alt="" />
                  </div>
                  <div className="pricing-top-text">
                    <h3>premium plan</h3>
                  </div>
                  <div className="pricing-menu">
                    <ul>
                      <li> Marketing campaign & PR</li>
                      <li>Video production & editing</li>
                      <li> Branding strategy & identity</li>
                      <li> User experience designing</li>
                      <li> Data science research</li>
                      <li> Social media distribution</li>
                    </ul>
                  </div>
                  <div className="price-count">
                    <h1>
                      <span className="usd">$</span>600
                    </h1>
                  </div>
                  <div className="pricing-button active">
                    <Link to="#">
                      {" "}
                      <span className="pricings-button">
                        select plan <i className="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="pricing-wrapper single-pricing text-center mb-30">
                  <div className="pricing-icon">
                    <img src={pckgThree} alt="" />
                  </div>
                  <div className="pricing-top-text">
                    <h3>Elite plan</h3>
                  </div>
                  <div className="pricing-menu">
                    <ul>
                      <li>Website and app designing</li>
                      <li>Content development</li>
                      <li>Branding strategy & identity</li>
                      <li>User experience designing</li>
                      <li>National survey conducting</li>
                      <li>Applied science application</li>
                    </ul>
                  </div>
                  <div className="price-count">
                    <h1>
                      <span className="usd">$</span>800
                    </h1>
                  </div>
                  <div className="pricing-button">
                    <Link to="#">
                      {" "}
                      <span className="pricings-button">
                        select plan <i className="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- pricing-area-end --> */}
      </main>

      <FooterDark />
    </>
  );
};

export default Packages;
