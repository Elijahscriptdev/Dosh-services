import React from 'react'
import { Link } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";

// css
// import "../../assets/css/main.css";
// import "../../assets/css/responsive.css";
// import "../../assets/css/slick.css";
// import "../../assets/css/magnificPopup.css";
// import "../../assets/css/meanmenu.css";
// import "../../assets/css/bootstrapMin.css";
// import "../../assets/css/owlCarouselMin.css";
// import "../../assets/css/animateMin.css";
// import "../../assets/css/themifyIcons.css";

// components
import Header from '../../components/Headers/Header';
import FooterDark from '../../components/Footers/FooterDark';

// Imgs
import bgFourteen from "../../assets/img/bg/bg-14.jpg";
import contactBg from "../../assets/img/bg/contact-bg.png";



const Contact = () => {
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
                  <h1>Contact Us</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <span>Contact Us</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- breadcrumb-area-ends --> */}

        {/* <!-- contact-area start --> */}
        <section
          className="contact-info-area"
        //   style={{ backgroundImage: `url(${bgMap})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div
                  className="contact text-center mb-30"
                  style={{ backgroundImage: `url(${contactBg})` }}
                >
                  <i className="fal fa-envelope-open"></i>
                  <h3>Email</h3>
                  <p>
                    <Link
                      to="http://Dosh Services.net/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="c9babcb9b9a6bbbd89aea4a8a0a5e7aaa6a4"
                    >
                      info@doshservices.com
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="http://Dosh Services.net/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="c9babcb9b9a6bbbd89aea4a8a0a5e7aaa6a4"
                    >
                      talk2@doshservices.com
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div
                  className="contact text-center mb-30"
                  style={{ backgroundImage: `url(${contactBg})` }}
                >
                  <i className="fal fa-map-marker-alt"></i>
                  <h3>Office</h3>
                  <p>12b MacDonald Akano street. Omole phase 1</p>
                </div>
              </div>
              <div className="col-xl-4  col-lg-4 col-md-4 ">
                <div
                  className="contact text-center mb-30"
                  style={{ backgroundImage: `url(${contactBg})` }}
                >
                  <i className="fal fa-phone"></i>
                  <h3>Call Us Now</h3>
                  <p>08094543296</p>
                  <p>01375385855</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- contact-area end --> */}

        {/* <!-- contact-us-area-start --> */}
        <div className="contact-2-area pt-120 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                <div className="section-title text-center ml-50 mr-50 mb-75">
                  <span className="border-left-1"></span>
                  <span>contact us</span>
                  <span className="border-right-1"></span>
                  <h1>Don't Hesitate To Contact Us</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="appointment-wrapper contact-form-page">
                <form className="appointment-form" action="#">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-box user-icon mb-30">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name Here"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-box email-icon mb-30">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email Here"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-box date-icon mb-30">
                        <input type="text" name="text" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box message-icon mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Write message"
                        ></textarea>
                      </div>
                      <div className="contact-btn contact-2-btn text-center">
                        <button className="btn" type="submit">
                          <span className="btn-text">
                            send message{" "}
                            <i className="far fa-long-arrow-right"></i>
                          </span>{" "}
                          <span className="btn-border"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- contact-us-area-end --> */}
      </main>

      <FooterDark />
    </>
  );
};

export default Contact;
