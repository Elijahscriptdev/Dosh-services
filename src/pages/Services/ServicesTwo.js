import React from "react";
import { Link } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";


//components
import Header from "../../components/Headers/Header";
import FooterDark from "../../components/Footers/FooterDark";

// Imgs
import servImgTen from "../../custom-assets/tech-consultancy.jpg";
import servImgNine from "../../custom-assets/web-dev.jpg";
import servImgEight from "../../custom-assets/mobile-app-dev.jpg";
import servImgSeven from "../../custom-assets/web-dev.jpg";
import servImgSix from "../../custom-assets/tech-training.jpg";
import servImgFive from "../../custom-assets/cyber-security.jpg";
import brandOne from "../../assets/img/brand/brand-01.png";
import brandTwo from "../../assets/img/brand/brand-02.png";
import brandThree from "../../assets/img/brand/brand-03.png";
import brandFour from "../../assets/img/brand/brand-04.png";
import brandFive from "../../assets/img/brand/brand-05.png";
import bgMap from "../../assets/img/bg/map.png";
import bgFourteen from "../../assets/img/bg/bg-14.jpg";


const Services = () => {
  return (
    <>
      <ReactTitle title="Dosh Services - Services" />
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
             {/* <div className="services-area pt-130 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="single-services text-center">
                                <div className="services-icon">
                                    <i className="fal fa-laptop-code"></i>
                                </div>
                                <div className="services-text">
                                    <h3>Web Development</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                    <Link to="#"> <span className="services-button">read more <i className="far fa-long-arrow-right"></i></span> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="single-services active text-center">
                                <div className="services-icon">
                                    <i className="fal fa-database"></i>
                                </div>
                                <div className="services-text">
                                    <h3>Database Analysis</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                    <Link to="#"> <span className="services-button">read more <i className="far fa-long-arrow-right"></i></span> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="single-services text-center">
                                <div className="services-icon">
                                    <i className="fal fa-server"></i>
                                </div>
                                <div className="services-text">
                                    <h3>Cyber Security</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                    <Link to="#"> <span className="services-button">read more <i className="far fa-long-arrow-right"></i></span> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- services-area-end --> */}

            {/* <!-- our-services-area-start --> */}
            <div className="our-services-area grey-bg-2 pt-120 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                            <div className="section-title text-center ml-50 mr-50 mb-85">
                                <span className="border-left-1"></span>
                                <span>what we do</span>
                                <span className="border-right-1"></span>
                                <h1>We provide exclusive services for your busainess</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="our-services-wrapper mb-30">
                                <div className="our-services-img">
                                    <img src={servImgTen} alt=""/>
                                </div>
                                <div className="our-services-content">
                                    <div className="our-services-icon">
                                        <i className="fal fa-gem"></i>
                                    </div>
                                    <div className="our-services-text">
                                        <h3>Tech Consulting</h3> 
                                        <p>Set perspiciatis unde omnis iste natus error sit voluptatem accusan tium demqu laudantium</p>
                                        <Link to="#">view more <i className="far fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="our-services-wrapper mb-30">
                                <div className="our-services-img">
                                    <img src={servImgNine} alt=""/>
                                </div>
                                <div className="our-services-content">
                                    <div className="our-services-icon">
                                        <i className="fal fa-laptop-code"></i>
                                    </div>
                                    <div className="our-services-text">
                                        <h3>Web Development</h3> 
                                        <p>Set perspiciatis unde omnis iste  natus error sit voluptatem accusan tium demqu laudantium </p>
                                        <Link to="#">view more <i className="far fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="our-services-wrapper mb-30">
                                <div className="our-services-img">
                                    <img src={servImgEight} alt=""/>
                                </div>
                                <div className="our-services-content">
                                    <div className="our-services-icon">
                                        <i className="fal fa-analytics"></i>
                                    </div>
                                    <div className="our-services-text">
                                        <h3>Mobile Apps</h3> 
                                        <p>Set perspiciatis unde omnis iste  natus error sit voluptatem accusan tium demqu laudantium </p>
                                        <Link to="#">view more <i className="far fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="our-services-wrapper mb-30">
                                <div className="our-services-img">
                                    <img src={servImgSeven} alt=""/>
                                </div>
                                <div className="our-services-content">
                                    <div className="our-services-icon">
                                        <i className="fal fa-fingerprint"></i>
                                    </div>
                                    <div className="our-services-text">
                                        <h3>Automation</h3> 
                                        <p>Set perspiciatis unde omnis iste  natus error sit voluptatem accusan tium demqu laudantium </p>
                                        <Link to="#">view more <i className="far fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="our-services-wrapper mb-30">
                                <div className="our-services-img">
                                    <img src={servImgFive} alt=""/>
                                </div>
                                <div className="our-services-content">
                                    <div className="our-services-icon">
                                        <i className="fal fa-fingerprint"></i>
                                    </div>
                                    <div className="our-services-text">
                                        <h3>Cyber Security</h3> 
                                        <p>Set perspiciatis unde omnis iste  natus error sit voluptatem accusan tium demqu laudantium </p>
                                        <Link to="#">view more <i className="fal fa-bullhorn"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="our-services-wrapper mb-30">
                                <div className="our-services-img">
                                    <img src={servImgSix} alt=""/>
                                </div>
                                <div className="our-services-content">
                                    <div className="our-services-icon">
                                        <i className="fal fa-fingerprint"></i>
                                    </div>
                                    <div className="our-services-text">
                                        <h3>Tech Training</h3> 
                                        <p>Set perspiciatis unde omnis iste  natus error sit voluptatem accusan tium demqu laudantium </p>
                                        <Link to="#">view more <i className="fal fa-cog"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="services-button text-center mt-30">
                                <Link className="btn" to="#"><span className="btn-text"> MORE ENQUIRIES... <i className="far fa-long-arrow-right"></i></span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- our-services-area-end --> */}

        {/* <!-- contact-area-start --> */}
        <div className="contact-2-area pt-130 pb-100 theme-bg ">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7 ">
                <div className="contact-wrapper mb-30">
                  <div className="section-title section-title-white mb-25">
                    <span className="b-sm-left-2"></span>
                    <span className="sub-t-left">contact us</span>
                    <h1>
                      Don't Hesitate To <br /> Contact Us
                    </h1>
                  </div>
                  <form
                    action="http://Dosh Services.net/Dosh Services/Dosh Services/assets/mail.php"
                    id="contact-form"
                  >
                    <div className="row">
                      <div className="col-xl-6 mb-10">
                        <div className="form-2-box user-icon mb-10">
                          <input
                            name="name"
                            placeholder="Full Name Here"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 mb-10">
                        <div className="form-2-box email-2-icon mb-10">
                          <input
                            name="email"
                            placeholder="Email Address"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 mb-35">
                        <div className="form-2-box sub-icon mb-10">
                          <input
                            name="subject"
                            placeholder="Subject"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 mb-30">
                        <div className="form-2-box message-2-icon mb-10">
                          <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                            id="message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <button className="btn" type="submit">
                          <span className="btn-texts">
                            send message <i className="far fa-long-arrow-right"></i>
                          </span>{" "}
                          <span className="btn-border"></span>
                        </button>
                      </div>
                    </div>
                    <p className="form-message"></p>
                  </form>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <div className="map-img mb-30">
                  <img src={bgMap} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- contact-area-end --> */}

        {/* <!-- brand-area-start --> */}
        <div className="brand-area pt-130 pb-130">
          <div className="container">
            <div className="row">
              <div className="brand-active owl-carousel">
                <div className="col-xl-12">
                  <div className="brand-img text-center">
                    <img src={brandOne} alt="" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="brand-img text-center">
                    <img src={brandTwo} alt="" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="brand-img text-center">
                    <img src={brandThree} alt="" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="brand-img text-center">
                    <img src={brandFour} alt="" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="brand-img text-center">
                    <img src={brandFive} alt="" />
                  </div>
                </div>
                <div className="col-xl-12 text-center">
                  <div className="brand-img">
                    <img src={brandTwo} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- brand-area-end --> */}
      </main>

      <FooterDark />
    </>
  );
};

export default Services;
