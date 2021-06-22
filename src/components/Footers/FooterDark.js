import React from 'react'
import { Link } from "react-router-dom";

//Imgs
import doshLogo from "../../assets/custom-assets/dosh-logo-2.png";
import bgSeven from "../../assets/img/bg/bg-7.jpg";




const FooterDark = () => {
    return (
      <>
          {/* <!-- footer-area-start --> */}
          <footer>
            <div
              className="footer-area pt-80"
              style={{ backgroundImage: `url(${bgSeven})` }}
            >
              <div className="container">
                {/* <div className="newsletter-bg pb-50 mb-80">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7 mb-30">
                      <div className="single-newsletter ">
                        <div className="newsletter-form">
                          <form action="#">
                            <input
                              placeholder="Enter Your Email :"
                              type="email"
                            />
                            <button className="btn" type="submit">
                              <span className="btn-text">
                                subscribe{" "}
                                <i className="far fa-long-arrow-right"></i>
                              </span>{" "}
                              <span className="btn-border"></span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-5 mb-30">
                      <div className="footer-2-icon text-lg-right">
                        <Link to="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-xl-5 col-lg-5 col-md-6">
                    <div className="footer-wrapper footer-2-wrapper mb-30">
                      <div className="footer-logo">
                        <Link to="/">
                          <img src={doshLogo} alt="" />
                        </Link>
                      </div>
                      <div className="footer-text">
                        <p>
                          Your business is our business, working with us will
                          provide you with the opportunity to access new and
                          leading technological innovations that will help
                          increase your sales, grow your customer base and
                          ultimately keep you in business.
                        </p>
                        {/* <Link className="btn" to="#" tabindex="0">
                          <span className="btn-text">
                            learn more{" "}
                            <i className="far fa-long-arrow-right"></i>
                          </span>{" "}
                        </Link> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-6">
                    <div className="footer-wrapper footer-2-wrapper mb-30">
                      <h4 className="footer-title footer-title-dark">
                        Our Services
                      </h4>
                      <ul className="fotter-menu">
                        <li>
                          <Link to="/MobileDev">Mobile Development </Link>
                        </li>
                        <li>
                          <Link to="/WebDev">Web Development </Link>
                        </li>
                        <li>
                          <Link to="/TechConsult">Tech Consultation</Link>
                        </li>
                        <li>
                          <Link to="Automation">Automation </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="footer-wrapper footer-2-wrapper mb-30 pl-50">
                      <h4 className="footer-title footer-title-dark">
                        Quick Links
                      </h4>
                      <ul className="fotter-menu">
                        <li>
                          <Link to="About">About Us</Link>
                        </li>
                        {/* <li>
                          <Link to="#">Need a Consultant?</Link>
                        </li> */}
                        <li>
                          <Link to="/Services">Our Services</Link>
                        </li>
                        {/* <li>
                          <Link to="#">Have Any Questions?</Link>
                        </li>
                        <li>
                          <Link to="#">Meet Our Team</Link>
                        </li> */}
                        <li>
                          <Link to="/Contact">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-6">
                    <div className="footer-wrapper footer-2-wrapper mb-30">
                      <h4 className="footer-title footer-title-dark">
                        Contact Us
                      </h4>
                      {/* <div className="footer-info">
                        <p>But I must explain to you how all this mistaken</p>
                      </div> */}
                      <ul className="contact-link">
                        <li>
                          <div className="contact-address-icon">
                            <i
                              className="far fa-phone"
                              style={{ color: "white" }}
                            ></i>
                          </div>
                          <div className="contact-address-text">
                            <h4>+234 809 454 3296</h4>
                          </div>
                        </li>
                        <li>
                          <div className="contact-address-icon">
                            <i
                              className="far fa-envelope-open"
                              style={{ color: "white" }}
                            ></i>
                          </div>
                          <div className="contact-address-text">
                            <h4>
                              <a
                                href="mailto:info@doshservices.com"
                                className="__cf_email__"
                                data-cfemail="681b1d1818071a1c280f05090104460b0705"
                              >
                                info@doshservices.com
                              </a>
                            </h4>
                          </div>
                        </li>
                        <li>
                          <div className="contact-address-icon">
                            <i
                              className="far fa-map-marker-alt"
                              style={{ color: "white" }}
                            ></i>
                          </div>
                          <div className="contact-address-text">
                            <h4>12b MacDonald Akano street. Omole phase 1</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom-area footer-2-bottom mt-50 pb-25 pt-25">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8">
                      <div className="copyright">
                        <p>
                          <i className="far fa-copyright"></i> Copyright 2020
                          <Link to="/" style={{ color: "white" }}>
                            {" "}
                            Dosh Services
                          </Link>
                          . All rights reserved.
                        </p>
                      </div>
                    </div>
                    {/* <div className="col-xl-4 col-lg-4 col-md-4">
                      <div className="footer-bottem-text text-md-right">
                        <p>
                          Design By <Link to="#">Dosh Services</Link>
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* <!-- footer-area-end --> */}
      </>
    );
}

export default FooterDark;
