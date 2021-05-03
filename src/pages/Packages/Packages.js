import React from 'react'
import { Link } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";

// css
// import "../../../public/assets/css/main.css";
// import "../../../public/assets/css/responsive.css";
// import "../../../public/assets/css/slick.css";
// import "../../../public/assets/css/magnificPopup.css";
// import "../../../public/assets/css/meanmenu.css";
// import "../../../public/assets/css/bootstrapMin.css";
// import "../../../public/assets/css/owlCarouselMin.css";
// import "../../../public/assets/css/animateMin.css";
// import "../../../public/assets/css/themifyIcons.css";

// components
import Header from '../../components/Header';
import FooterDark from '../../components/FooterDark';

// Imgs
import bgFourteen from "../../../public/assets/img/bg/bg-14.jpg";
import pckgOne from "../../../public/assets/img/icon/p-1.png";
import pckgTwo from "../../../public/assets/img/icon/p-1.png";
import pckgThree from "../../../public/assets/img/icon/p-1.png";


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
            <div class="pricing-area pt-120 pb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div class="section-title text-center ml-50 mr-50 mb-80">
                                <span class="border-left-1"></span>
                                <span>our packages</span>
                                <span class="border-right-1"></span>
                                <h1>Exclusive Dosh Packages</h1>
                            </div>
                        </div>
                    </div> 
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="pricing-wrapper  single-pricing text-center mb-30">
                                <div class="pricing-icon">
                                    <img src={pckgOne} alt=""/>
                                </div>
                                <div class="pricing-top-text">
                                    <h3>Standard Plan</h3>
                                </div>
                                <div class="pricing-menu">
                                    <ul>
                                        <li>Branding strategy & identity</li>
                                        <li> Marketing campaign & PR</li>
                                        <li> Video production & editing</li>
                                        <li>User experience designing</li>
                                        <li> Content development</li>
                                    </ul>
                                </div>
                                <div class="price-count">
                                    <h1><span class="usd">$</span>500</h1>
                                </div>
                                <div class="pricing-button">
                                    <Link to="#"> <span class="pricings-button">select plan <i class="far fa-long-arrow-right"></i></span> </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="pricing-wrapper single-pricing active text-center mb-30">
                                <div class="pricing-tag">
                                    <span>popular plan</span>
                                </div>
                                <div class="pricing-icon">
                                    <img src={pckgTwo} alt=""/>
                                </div>
                                <div class="pricing-top-text">
                                    <h3>premium plan</h3>
                                </div>
                                <div class="pricing-menu">
                                    <ul>
                                       <li> Marketing campaign & PR</li>
                                        <li>Video production & editing</li>
                                       <li> Branding strategy & identity</li>
                                       <li> User experience designing</li>
                                       <li> Data science research</li>
                                       <li> Social media distribution</li>
                                    </ul>
                                </div>
                                <div class="price-count">
                                    <h1><span class="usd">$</span>600</h1>
                                </div>
                                <div class="pricing-button active">
                                    <Link to="#"> <span class="pricings-button">select plan <i class="far fa-long-arrow-right"></i></span> </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="pricing-wrapper single-pricing text-center mb-30">
                                <div class="pricing-icon">
                                    <img src={pckgThree} alt=""/>
                                </div>
                                <div class="pricing-top-text">
                                    <h3>Elite plan</h3>
                                </div>
                                <div class="pricing-menu">
                                    <ul>
                                        <li>Website and app designing</li>
                                        <li>Content development</li>
                                        <li>Branding strategy & identity</li>
                                        <li>User experience designing</li>
                                        <li>National survey conducting</li>
                                        <li>Applied science application</li>
                                    </ul>
                                </div>
                                <div class="price-count">
                                    <h1><span class="usd">$</span>800</h1>
                                </div>
                                <div class="pricing-button">
                                    <Link to="#"> <span class="pricings-button">select plan <i class="far fa-long-arrow-right"></i></span> </Link>
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
