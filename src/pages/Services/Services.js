import React from "react";
import { Link } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";
import ReadMoreReact from "read-more-react";

//components
import Header from "../../components/Headers/Header";
import FooterDark from "../../components/Footers/FooterDark";

// Imgs
import iconImageOne from "../../assets/img/icon/icon-01.png";
import iconImageTwo from "../../assets/img/icon/icon-2.png";
import iconImageThree from "../../assets/img/icon/icon-3.png";
import iconImageFour from "../../assets/img/icon/icon-4.png";
import iconImageFive from "../../assets/img/icon/icon-5.png";
import iconImageSix from "../../assets/img/icon/icon-6.png";
import bgOne from "../../assets/img/bg/bg-1.jpg";
import bgFourteen from "../../assets/custom-assets/homepage-slider.jpg";

const cardsTexts = {
  techConsulting: "At Dosh Services, We are not only inventors; we also offer consultations to businesses struggling to stay in business. We equally work with businesses seeking to meet up with the latest technology standard and trends.",
  automation: "We understand how important customer perceptions is to sales generation in any business. We have therefore developed processes that can help position the brand/products/content of our client within their target audience." ,
  mobileDev: "We are specialist when it comes to building Android, IOS, and Windows Application. We at Dosh pride ourselves in building apps that meet global standard with a user-friendly interface.",
  webDev: "We develop high-end, responsive and user-friendly website and Web Applications. Our websites are developed using different programming languages - (Php, Python, NodeJs, Java and C++). With Dosh Services.",
  cyberSecurity: "At Dosh technology, we help you audit and check for bugs or loopholes on your mobile and web based platform.",
  techTraining: "We train techy and savvy youths who are ready to invent and change the world with their ideas. We help bring their ideas to life with technology tools in support for the training.",
};

const Services = () => {
  return (
    <>
      <ReactTitle title="Dosh Services - Services" />
      <Header />
      <main>
        {/* <!-- breadcrumb-area-start --> */}
        <div
          className="breadcrumb-area pt-230 pb-235 single-slider slider-height slider-overlay d-flex align-items-center"
          style={{ backgroundImage: `url(https://res.cloudinary.com/dosh-services/image/upload/v1626160906/home_page_sliderh_rjsnyv.jpg)` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Our Services</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <span>services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- breadcrumb-area-ends --> */}

        {/* <!-- services-area-start --> */}
        <div
          className="services-area pt-120 pb-100"
          style={{ backgroundImage: `url(${bgOne})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                <div className="section-title text-center ml-50 mr-50 mb-80">
                  <span className="border-left-1"></span>
                  <span>what we do</span>
                  <span className="border-right-1"></span>
                  <h1>We provide exclusive services for your business</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <img src={iconImageFour} alt="" />
                  </div>
                  <div className="services-text">
                    <h3>TECH CONSULTING</h3>
                    <ReadMoreReact
                      text={cardsTexts.techConsulting}
                      min={60}
                      ideal={100}
                      max={300}
                      readMoreText={
                        <Link to="#" className="link-color services-button">
                          Read more &gt;
                        </Link>
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <img src={iconImageTwo} alt="" />
                  </div>
                  <div className="services-text">
                    <h3>WEB DEVELOPMENT</h3>

                    <p>
                      <ReadMoreReact
                        text={cardsTexts.webDev}
                        min={60}
                        ideal={100}
                        max={300}
                        readMoreText={
                          <Link to="#" className="link-color services-button">
                            Read more &gt;
                          </Link>
                        }
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <img src={iconImageOne} alt="" />
                  </div>
                  <div className="services-text">
                    <h3>MOBILE DEVELOPMENT</h3>
                    <p>
                      <ReadMoreReact
                        text={cardsTexts.mobileDev}
                        min={60}
                        ideal={100}
                        max={300}
                        readMoreText={
                          <Link to="#" className="link-color services-button">
                            Read more &gt;
                          </Link>
                        }
                      />
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <img src={iconImageThree} alt="" />
                  </div>
                  <div className="services-text">
                    <h3>AUTOMATION</h3>
                    <p>
                      <ReadMoreReact
                        text={cardsTexts.automation}
                        min={60}
                        ideal={100}
                        max={300}
                        readMoreText={
                          <Link to="#" className="link-color services-button">
                            Read more &gt;
                          </Link>
                        }
                      />
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <img src={iconImageSix} alt="" />
                  </div>
                  <div className="services-text">
                    <h3>CYBER SECURITY</h3>
                    <p>
                      <ReadMoreReact
                        text={cardsTexts.cyberSecurity}
                        min={60}
                        ideal={100}
                        max={300}
                        readMoreText={
                          <Link to="#" className="link-color services-button">
                            Read more &gt;
                          </Link>
                        }
                      />
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <img src={iconImageFive} alt="" />
                  </div>
                  <div className="services-text">
                    <h3>TECH TRAINING</h3>
                    <p>
                      <ReadMoreReact
                        text={cardsTexts.techTraining}
                        min={60}
                        ideal={100}
                        max={300}
                        readMoreText={
                          <Link to="#" className="link-color services-button">
                            Read more &gt;
                          </Link>
                        }
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- services-area-end --> */}

        
      </main>

      <FooterDark />
    </>
  );
};

export default Services;
