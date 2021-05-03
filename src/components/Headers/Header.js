import React from 'react'
import { Link } from "react-router-dom";


import doshLogo from "../../assets/img/logo/logo.jpg";



let url = "/"

const Header = () => {
    return (
      <>
        <body>
          <header>
            <div className="header-top-area grey-bg d-none d-md-block">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-8 col-md-6 d-flex align-items-center">
                    <div className="header-info">
                      <span>
                        <i className="far fa-map-marker-alt"> </i>12b MacDonald
                        Akano street. Omole phase 1
                      </span>
                      <span className="header-ph">
                        <i className="far fa-phone"> </i> +234 809 454 3296
                      </span>
                      <span className="header-en">
                        <i className="far fa-envelope-open"> </i>
                        <Link
                          to={url}
                          className="__cf_email__"
                          data-cfemail="20535550504f525460474d41494c0e434f4d"
                        >
                          {" "}
                          info@doshservices.com
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="header-right f-right ">
                      <div className="header-lang  pos-rel f-right">
                        <div className="lang-icon">
                          {/* <img src="assets/img/icon/flag.png" alt="" /> */}
                          <Link to={url} />
                        </div>
                      </div>
                      <div className="header-icon f-right">
                        <Link to={url}>
                          <i className="fab fa-facebook-f"> </i>{" "}
                        </Link>
                        <Link to={url}>
                          <i className="fab fa-twitter"> </i>{" "}
                        </Link>
                        <Link to={url}>
                          <i className="fab fa-instagram"> </i>{" "}
                        </Link>
                        <Link to={url}>
                          <i className="fab fa-youtube"> </i>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="sticky-header" className="main-menu-area">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 d-flex align-items-center">
                    <div className="logo">
                      <Link to="/">
                        <img src={doshLogo} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9">
                    <div className="header-button f-right d-none d-lg-block">
                      <Link className="btn" to="/Contact">
                        <span className="btn-text">
                          Contact US <i className="far fa-long-arrow-right" />
                        </span>
                      </Link>
                    </div>
                    <div className="main-menu text-right">
                      <nav id="mobile-menu">
                        <ul>
                          <li className="active">
                            <Link to="/">home</Link>
                          </li>

                          <li>
                            <Link to="/About">About</Link>
                            <ul className="sub-menu text-left">
                              <li>
                                <Link to="/Goals">Industries </Link>
                              </li>
                              <li>
                                <Link to="/SingleTeam">Our Team</Link>
                              </li>
                              <li>
                                <Link to="/Goals">Mission & Vision</Link>
                              </li>
                              <li>
                                <Link to="/About">Clients</Link>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <Link to="/Services">Services</Link>
                            <ul className="sub-menu text-left">
                              <li>
                                <Link to="/Services">Mobile Development </Link>
                              </li>
                              <li>
                                <Link to="/ServicesTwo">Web Development </Link>
                              </li>
                              <li>
                                <Link to="/ServicesThree">
                                  Tech Consultation
                                </Link>
                              </li>
                              <li>
                                <Link to="it-management.html">Automation </Link>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <Link to="/CaseStudy">Case Studies</Link>
                            <ul className="sub-menu text-left">
                              <li>
                                <Link to="/CaseStudy">case study</Link>
                              </li>
                              <li>
                                <Link to="case-study-02.html">
                                  case study 02
                                </Link>
                              </li>
                              <li>
                                <Link to="case-carousel.html">
                                  case carousel
                                </Link>
                              </li>
                              <li>
                                <Link to="case-details.html">case details</Link>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <Link to="/Packages">Packages</Link>
                          </li>
                          <li>
                            <Link to="/Careers">Careers</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile-menu"></div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </body>
      </>
    );
}

export default Header
