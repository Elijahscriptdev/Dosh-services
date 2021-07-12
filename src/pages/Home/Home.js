import React from "react";
import { Link } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";

// Imgs
import sliderOne from "../../assets/custom-assets/homepage-slider.jpg";
import bgFour from "../../assets/img/bg/bg-4.jpg";
import bgFive from "../../assets/img/bg/bg-5.jpg";
import bgMap from "../../assets/img/bg/map.png";
import shapeFive from "../../assets/img/shape/05.png";
import shapeThree from "../../assets/img/shape/03.png";
import shapeTwo from "../../assets/img/shape/02.png";
import shapeOne from "../../assets/img/shape/01.png";
import shapeFour from "../../assets/img/shape/04.png";
import aboutTwo from "../../assets/custom-assets/about-us.png";
import serviceOne from "../../assets/custom-assets/mobile-app-dev.jpg";
import cyberSecurity from "../../assets/custom-assets/cyber-security.jpg";
import webDevImg from "../../assets/custom-assets/web-dev.jpg";
import serviceTwo from "../../assets/custom-assets/tech-training.jpg";
import serviceThree from "../../assets/img/service/ser-03.jpg";
import serviceFour from "../../assets/custom-assets/tech-consultancy.jpg";

import Header from "../../components/Headers/Header";
import Footer from "../../components/Footers/Footer";

const Home = () => {
  return (
    <>
      <ReactTitle title="Dosh Services - IT Solutions Service Providers" />
        <Header />

        <main>
          {/* <!-- slider-start --> */}
          <div className="slider-area">
            <div className="slider-active">
              <div
                className="single-slider slider-height slider-overlay d-flex align-items-center"
                style={{ backgroundImage: `url(https://res.cloudinary.com/dosh-services/image/upload/v1626092424/WhatsApp_Image_2021-07-09_at_12.27.42_AM_niym7r.jpg)` }}
              >
                <div className="container">
                  <div className="row ">
                    <div className="col-xl-8 col-lg-8">
                      <div className="slider-content">
                        <h1 data-animation="fadeInLeft" data-delay=".5s">
                         The Perfect IT Solutions For Your Business
                        </h1>
                        <p data-animation="fadeInLeft" data-delay=".8s">
                          Dosh is a technology company that offers valuable business solutions via understanding the client's needs and designing the best solution towards the business goals.
                        </p>
                        {/* <div
                          className="slider-button"
                          data-animation="fadeInUp"
                          data-delay="1s"
                        >
                          <Link className="btn" to={url}>
                            <span className="btn-text">
                              learn more{" "}
                              <i className="far fa-long-arrow-right"></i>
                            </span>
                          </Link>
                          <Link className="text-link" to={url}>
                            How It Works
                          </Link>
                        </div> */}
                      </div>
                    </div>
                    {/* <div className="col-xl-4 col-lg-3 d-none d-lg-block">
                      <div className="slider-video text-md-right">
                        <Link
                          className="popup-video"
                          to="https://www.youtube.com/watch?v=LTXD6XZXc3U"
                        >
                          <i className="fas fa-play"></i>
                        </Link>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- slider-start --> */}

          {/* <!-- about-area-start --> */}
          <div className="about-area pt-200 pb-140 pos-rel">
            <div className="shape d-none d-xl-block">
              <div className="mt-80 shape-item ab-01 bounce-animate">
                <img src={shapeFive} alt="" />
              </div>
              <div className="shape-item ab-02 bounce-animate">
                <img src={shapeThree} alt="" />
              </div>
              <div className="shape-item ab-03 bounce-animate">
                <img src={shapeTwo} alt="" />
              </div>
              <div className="shape-item ab-04 bounce-animate">
                <img src={shapeOne} alt="" />
              </div>
              <div className="shape-item ab-05 rotateme">
                <img src={shapeFour} alt="" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-5 mb-30">
                  <div className="about-2-img">
                    <img src={aboutTwo} alt="" />
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 mb-30">
                  <div className=" about-2-wrapper">
                    <div className="about-text">
                      <span>about us</span>
                      <h1>
                        <span>A Leading <br/> Nigeria-based Information Technology Provider</span>
                      </h1>
                      <p>
                        Since inception, we have provided outstanding IT solutions including Web Applications and Security services that takes businesses to the next level and bring our clients ideas to life. Our Team is comprised of experienced IT professionals to give you the best experience in information technology, Web Development and Customer services. We are the technology partner you need to accomplish your business goals.
                      </p>
                    </div>
                    {/* <div className="about-button">
                      <Link className="btn" to="/About">
                        <span className="btn-text">
                          Learn More <i className="far fa-long-arrow-right"></i>
                        </span>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- about-area-end --> */}

          {/* <!-- our-services-area-start --> */}
          <div className="our-services-area grey-bg-2 pt-120 pb-130 pr-45 pl-45">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                  <div className="section-title text-center ml-50 mr-50 mb-85">
                    <span className="border-left-1"></span>
                    <span>what we do</span>
                    <span className="border-right-1"></span>
                    <h1>We provide exclusive services for your business</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 mb-60">
                  <div className="our-services-wrapper mb-30">
                    <div className="our-services-img">
                      <img src={serviceFour} alt="" />
                    </div>
                    <div className="our-services-content">
                      <div className="our-services-icon">
                        <i className="fal fa-fingerprint"></i>
                      </div>
                      <div className="our-services-text ">
                        <h3>Tech Consulting</h3>
                      </div>
                      <div className="our-services-text">
                        <p className="pt-25">
                          From requirement assembling to IT framework strategy, we furnish our clients with fair-minded and target perspective to adjust technology to their business goals. We can help you in accomplishing your business goals using technology and... 
                        </p>
                        <Link to="/TechConsult" className="">
                          view more <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-60">
                  <div className="our-services-wrapper mb-30">
                    <div className="our-services-img">
                      <img src={webDevImg} alt="" />
                    </div>
                    <div className="our-services-content">
                      <div className="our-services-icon">
                        <i className="fal fa-laptop-code"></i>
                      </div>
                      <div className="our-services-text">
                        <h3>Web Development</h3>
                      </div>
                      <div className="our-services-text">
                        <p className="pt-25">
                          We build top notch, responsive and user-friendly website that create credibility for your business and give you optimum result. Our websites are developed using different programming languages; (React Js, Php, Python, Node Js, Java and C++). 
                        </p>
                        <Link to="/WebDev">
                          view more <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-60">
                  <div className="our-services-wrapper mb-30">
                    <div className="our-services-img">
                      <img src={serviceOne} alt="" />
                    </div>
                    <div className="our-services-content">
                      <div className="our-services-icon">
                        <i className="fal fa-gem"></i>
                      </div>
                      <div className="our-services-text">
                        <h3>Mobile Development</h3>
                      </div>
                      <div className="our-services-text">
                        <p className="pt-25">
                  We pride ourselves in building stellar applications that helps your business connect with your current and prospective customers, thus, driving high engagement levels for your business. We are specialist when it comes to building Android, iOS and Windows Applications.
                        </p>
                        <Link to="/MobileDev">
                          view more <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="our-services-wrapper mb-30">
                    <div className="our-services-img">
                      <img src={serviceThree} alt="" />
                    </div>
                    <div className="our-services-content">
                      <div className="our-services-icon">
                        <i className="fal fa-analytics"></i>
                      </div>
                      <div className="our-services-text">
                        <h3>Automation</h3>
                      </div>
                      <div className="our-services-text">
                        <p className="pt-25">
                          Automation manages business processes for uniformity and transparency, it can also deliver new insights into business challenges and suggest solutions. High information accuracy is guaranteed whereby... 
                        </p>
                        <Link to="/Automation">
                          view more <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="our-services-wrapper mb-30">
                    <div className="our-services-img">
                      <img src={cyberSecurity} alt="" />
                    </div>
                    <div className="our-services-content">
                      <div className="our-services-icon">
                        <i className="fal fa-gem"></i>
                      </div>
                      <div className="our-services-text">
                        <h3>Cyber Security</h3>
                      </div>
                      <div className="our-services-text">
                        <p className="pt-25">
                          We provide digital protection and improve security strategy by checking for bugs and loopholes on your mobile and web platform. We design, install and support complete and progressive solutions.
                        </p>
                        <Link to="/CyberSecurity">
                          view more <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 ">
                  <div className="our-services-wrapper mb-30">
                    <div className="our-services-img">
                      <img src={serviceTwo} alt="" />
                    </div>
                    <div className="our-services-content">
                      <div className="our-services-icon">
                        <i className="fal fa-laptop-code"></i>
                      </div>
                      <div className="our-services-text">
                        <h3>Tech Training</h3>
                      </div>
                      <div className="our-services-text">
                        <p className="pt-25">
                          We train tech savvy youths and equip them with skills needed to help them bring their ideas to life and kick start their career in tech. Flexible structure and curriculum have been put in place for...
                        </p>
                        <Link to="/TechTraining">
                          view more <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- our-services-area-end --> */}

          {/* <!-- video-area-start --> */}
          <div
            className="video-area pt-130"
            style={{ backgroundImage: `url(${bgFour})` }}
          >
            <div className="container">
              <div className="row"></div>
            </div>
          </div>
          {/* <!-- video-area-end --> */}

          {/* <!-- contact-area-start --> */}
          <div className="contact-area">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 mb-200">
                  <div className="map-wrapper">
                    <div id="contact-map" className="contact-map">
                      <div className="col-xl-4 col-lg-4">
                        <div className="map-img mb-30">
                          <img src={bgMap} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="section-title section-title-white text-center ml-50 mr-30 mt-130">
                    <span className="border-left-1"></span>
                    <span>contact us</span>
                    <span className="border-right-1"></span>
                    <h1>Don't Hesitate To Contact Us</h1>
                    <div className="col-lg-12 mt-5">
                      <div
                        className="contact-btn"
                        onClick={(e) => {
                          window.location = "mailto:info@doshservices.com";
                          e.preventDefault();
                        }}
                      >
                        <button className="btn" type="submit">
                          <span className="btn-text">
                            <a target="_" href="mailto: info@doshservices.com">
                              Send message
                              <i className="far fa-long-arrow-right"></i>
                            </a>
                          </span>
                          <span className="btn-border"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="contact-bg">
                <div className="row"></div>
              </div> */}
            </div>
          </div>
          {/* <!-- contact-area-end --> */}

          {/* <!-- newsletter-area-start --> */}
          <div
            className="newsletter-area pt-75 pb-40"
            style={{ backgroundImage: `url(${bgFive})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-5 mb-30">
                  <div className="newsletter-text">
                    <h1>
                      Subscribe Our Newsletter <br />
                      To Get More Update
                    </h1>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7 mb-30">
                  <div className="single-newsletters ">
                    <div className="newsletter-form">
                      <form action="#">
                        <input placeholder="Enter Your Email :" type="email" />
                        <button className="btn" type="submit">
                          <span className="btn-text">
                            subscribe{" "}
                            <i className="far fa-long-arrow-right"></i>
                          </span>
                          <span className="btn-border"></span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- newsletter-area-end --> */}
        </main>
        <Footer />
    </>
  );
};

export default Home;
