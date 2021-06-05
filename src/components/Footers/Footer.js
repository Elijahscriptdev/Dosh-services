import React from 'react'
import { Link } from "react-router-dom";

//Imgs
import doshLogo from "../../assets/img/logo/logo.jpg";
// import footerOne from "../../assets/img/footer/01.jpg";
// import footerTwo from "../../assets/img/footer/02.jpg";



const Footer = () => {
    return (
      <>
        <body>
          {/* <!-- footer-area-start --> */}
          <footer>
            <div className="footer-area grey-bg pt-80 pb-30">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-4">
                    <div className="footer-wrapper mb-30">
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
                      </div>
                      <div className="footer-icon">
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
                  <div className="col-xl-2 col-lg-2 col-md-4">
                    <div className="footer-wrapper mb-30">
                      <h4 className="footer-title">Our Services</h4>
                      <ul className="fotter-menu">
                        <li>
                          <Link to="/Services">Mobile Development </Link>
                        </li>
                        <li>
                          <Link to="/ServicesTwo">Web Development </Link>
                        </li>
                        <li>
                          <Link to="/ServicesThree">Tech Consultation</Link>
                        </li>
                        <li>
                          <Link to="it-management.html">Automation </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-4">
                    <div className="footer-wrapper mb-30">
                      <h4 className="footer-title">Quick Links</h4>
                      <ul className="fotter-menu">
                        <li>
                          <Link to="/About">About Us</Link>
                        </li>
                        {/* <li>
                          <Link to="#">Need a Consultant?</Link>
                        </li> */}
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
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="footer-wrapper mb-30">
                      <h4 className="footer-title">Blog</h4>
                      {/* <div className="footer-news">
                        <ul>
                          <li>
                            <div className="footer-news-img">
                              <Link to="#">
                                <img src={footerOne} alt="" />
                              </Link>
                            </div>
                            <div className="footer-news-text">
                              <h5>
                                <Link to="#">
                                  Building Real Time Charts With Grap HQL &
                                  Postgres
                                </Link>
                              </h5>
                            </div>
                          </li>
                          <li>
                            <div className="footer-news-img">
                              <Link to="#">
                                <img src={footerTwo} alt="" />
                              </Link>
                            </div>
                            <div className="footer-news-text">
                              <h5>
                                <Link to="#">
                                  How To Build An Endless Runner Or Virtual
                                  Reality
                                </Link>
                              </h5>
                            </div>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-6">
                    <div className="footer-wrapper mb-30">
                      <h4 className="footer-title">Contact Us</h4>
                      <div className="footer-info"></div>
                      <ul className="contact-link">
                        <li>
                          <div className="contact-address-icon">
                            <i className="far fa-phone"></i>
                          </div>
                          <div className="contact-address-text">
                            <h4>+234 809 454 3296</h4>
                          </div>
                        </li>
                        <li>
                          <div className="contact-address-icon">
                            <i className="far fa-envelope-open"></i>
                          </div>
                          <div className="contact-address-text">
                            <h4>
                              <Link
                                to="http://Dosh Services.net/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="d4a7a1a4a4bba6a094b3b9b5bdb8fab7bbb9"
                              >
                                info@doshservices.com
                              </Link>
                            </h4>
                          </div>
                        </li>
                        <li>
                          <div className="contact-address-icon">
                            <i className="far fa-map-marker-alt"></i>
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
              <div className="footer-bottom-area pt-50">
                <div className="container">
                  <div className="footer-bg-bottom">
                    <div className="row">
                      <div className="col-xl-8 col-lg-8 col-md-8">
                        <div className="copyright">
                          <p>
                            <i className="far fa-copyright"></i> Copyright 2020
                            Dosh Services. All rights reserved.
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
            </div>
          </footer>
          {/* <!-- footer-area-end --> */}
        </body>
      </>
    );
}

export default Footer;
