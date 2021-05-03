import React from "react";
import { Link } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";


//components
import Header from "../../components/Header";
import FooterDark from "../../components/FooterDark";

// Imgs
import iconImageOne from "../../../public/assets/img/icon/icon-01.png";
import iconImageTwo from "../../../public/assets/img/icon/icon-2.png";
import iconImageThree from "../../../public/assets/img/icon/icon-3.png";
import iconImageFour from "../../../public/assets/img/icon/icon-4.png";
import iconImageFive from "../../../public/assets/img/icon/icon-5.png";
import iconImageSix from "../../../public/assets/img/icon/icon-6.png";
import brandOne from "../../../public/assets/img/brand/brand-01.png";
import brandTwo from "../../../public/assets/img/brand/brand-02.png";
import brandThree from "../../../public/assets/img/brand/brand-03.png";
import brandFour from "../../../public/assets/img/brand/brand-04.png";
import brandFive from "../../../public/assets/img/brand/brand-05.png";
import bgOne from "../../../public/assets/img/bg/bg-1.jpg";
import bgMap from "../../../public/assets/img/bg/map.png";
import bgFourteen from "../../../public/assets/img/bg/bg-14.jpg";


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
        <div
          class="services-area pt-120 pb-100"
          style={{ backgroundImage: `url(${bgOne})` }}
        >
          <div class="container">
            <div class="row">
              <div class="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                <div class="section-title text-center ml-50 mr-50 mb-80">
                  <span class="border-left-1"></span>
                  <span>what we do</span>
                  <span class="border-right-1"></span>
                  <h1>We provide exclusive services for your business</h1>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="services-wrapper text-center">
                  <div class="services-img">
                    <img src={iconImageOne} alt="" />
                  </div>
                  <div class="services-text">
                    <h3>Mobile App Development</h3>
                    <p>
                      We are specialist when it comes to building Android, IOS,
                      and Windows Application. We at Dosh pride ourselves in
                      building apps that meet global standard with a
                      user-friendly interface.{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span class="services-button">
                        read more <i class="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="services-wrapper text-center">
                  <div class="services-img">
                    <img src={iconImageTwo} alt="" />
                  </div>
                  <div class="services-text">
                    <h3>Web Development</h3>
                    <p>
                      We develop high-end, responsive and user-friendly website
                      and Web Applications. Our websites are developed using
                      different programming languages - (Php, Python, NodeJs,
                      Java and C++). With Dosh Services.{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span class="services-button">
                        read more <i class="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="services-wrapper text-center">
                  <div class="services-img">
                    <img src={iconImageThree} alt="" />
                  </div>
                  <div class="services-text">
                    <h3>Digital Marketing</h3>
                    <p>
                      We understand how important customer perceptions is to
                      sales generation in any business. We have therefore
                      developed processes that can help position the
                      brand/products/content of our client within their target
                      audience.{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span class="services-button">
                        read more <i class="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="services-wrapper text-center">
                  <div class="services-img">
                    <img src={iconImageFour} alt="" />
                  </div>
                  <div class="services-text">
                    <h3>Tech Consulting</h3>
                    <p>
                      At Dosh Services, We are not only inventors; we also offer
                      consultations to businesses struggling to stay in
                      business. We equally work with businesses seeking to meet
                      up with the latest technology standard and trends.{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span class="services-button">
                        read more <i class="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="services-wrapper text-center">
                  <div class="services-img">
                    <img src={iconImageFive} alt="" />
                  </div>
                  <div class="services-text">
                    <h3>TECH TRAINING</h3>
                    <p>
                      We train techy and savvy youths who are ready to invent
                      and change the world with their ideas. We help bring their
                      ideas to life with technology tools in support for the
                      training.{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span class="services-button">
                        read more <i class="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="services-wrapper text-center">
                  <div class="services-img">
                    <img src={iconImageSix} alt="" />
                  </div>
                  <div class="services-text">
                    <h3>CYBER SECURITY</h3>
                    <p>
                      At Dosh technology, we help you audit and check for bugs
                      or loopholes on your mobile and web based platform.{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span class="services-button">
                        read more <i class="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- services-area-end --> */}

        {/* <!-- contact-area-start --> */}
        <div class="contact-2-area pt-130 pb-100 theme-bg ">
          <div class="container">
            <div class="row">
              <div class="col-xl-7 col-lg-7 ">
                <div class="contact-wrapper mb-30">
                  <div class="section-title section-title-white mb-25">
                    <span class="b-sm-left-2"></span>
                    <span class="sub-t-left">contact us</span>
                    <h1>
                      Don't Hesitate To <br /> Contact Us
                    </h1>
                  </div>
                  <form
                    action="http://Dosh Services.net/Dosh Services/Dosh Services/assets/mail.php"
                    id="contact-form"
                  >
                    <div class="row">
                      <div class="col-xl-6 mb-10">
                        <div class="form-2-box user-icon mb-10">
                          <input
                            name="name"
                            placeholder="Full Name Here"
                            type="text"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 mb-10">
                        <div class="form-2-box email-2-icon mb-10">
                          <input
                            name="email"
                            placeholder="Email Address"
                            type="email"
                          />
                        </div>
                      </div>
                      <div class="col-xl-12 mb-35">
                        <div class="form-2-box sub-icon mb-10">
                          <input
                            name="subject"
                            placeholder="Subject"
                            type="text"
                          />
                        </div>
                      </div>
                      <div class="col-xl-12 mb-30">
                        <div class="form-2-box message-2-icon mb-10">
                          <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                            id="message"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-xl-12">
                        <button class="btn" type="submit">
                          <span class="btn-texts">
                            send message <i class="far fa-long-arrow-right"></i>
                          </span>{" "}
                          <span class="btn-border"></span>
                        </button>
                      </div>
                    </div>
                    <p class="form-message"></p>
                  </form>
                </div>
              </div>
              <div class="col-xl-5 col-lg-5">
                <div class="map-img mb-30">
                  <img src={bgMap} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- contact-area-end --> */}

        {/* <!-- brand-area-start --> */}
        <div class="brand-area pt-130 pb-130">
          <div class="container">
            <div class="row">
              <div class="brand-active owl-carousel">
                <div class="col-xl-12">
                  <div class="brand-img text-center">
                    <img src={brandOne} alt="" />
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="brand-img text-center">
                    <img src={brandTwo} alt="" />
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="brand-img text-center">
                    <img src={brandThree} alt="" />
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="brand-img text-center">
                    <img src={brandFour} alt="" />
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="brand-img text-center">
                    <img src={brandFive} alt="" />
                  </div>
                </div>
                <div class="col-xl-12 text-center">
                  <div class="brand-img">
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
