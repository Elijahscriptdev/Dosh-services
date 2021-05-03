import React from 'react'
import { Link } from "react-router-dom";

// css
import "../assets/css/main.css";
import "../assets/css/responsive.css";
import "../assets/css/slick.css";
import "../assets/css/magnificPopup.css";
import "../assets/css/meanmenu.css";
import "../assets/css/bootstrapMin.css";
import "../assets/css/owlCarouselMin.css";
import "../assets/css/animateMin.css";
import "../assets/css/themifyIcons.css";
import doshLogo from "../assets/img/logo/logo.jpg";

import bgSeven from "../assets/img/bg/bg-7.jpg";




const FooterDark = () => {
    return (
      <>
        <body>
          {/* <!-- footer-area-start --> */}
          <footer>
            <div
              class="footer-area pt-80"
              style={{ backgroundImage: `url(${bgSeven})` }}
            >
              <div class="container">
                <div class="newsletter-bg pb-50 mb-80">
                  <div class="row">
                    <div class="col-xl-6 col-lg-7 mb-30">
                      <div class="single-newsletter ">
                        <div class="newsletter-form">
                          <form action="#">
                            <input
                              placeholder="Enter Your Email :"
                              type="email"
                            />
                            <button class="btn" type="submit">
                              <span class="btn-text">
                                subscribe{" "}
                                <i class="far fa-long-arrow-right"></i>
                              </span>{" "}
                              <span class="btn-border"></span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-5 mb-30">
                      <div class="footer-2-icon text-lg-right">
                        <Link to="#">
                          <i class="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="#">
                          <i class="fab fa-twitter"></i>
                        </Link>
                        <Link to="#">
                          <i class="fab fa-instagram"></i>
                        </Link>
                        <Link to="#">
                          <i class="fab fa-google"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-md-6">
                    <div class="footer-wrapper footer-2-wrapper mb-30">
                      <div class="footer-logo">
                        <Link to="/">
                          <img src={doshLogo} alt="" />
                        </Link>
                      </div>
                      <div class="footer-text">
                        <p>
                          Your business is our business, working with us will
                          provide you with the opportunity to access new and
                          leading technological innovations that will help
                          increase your sales, grow your customer base and
                          ultimately keep you in business.
                        </p>
                        <Link class="btn" to="#" tabindex="0">
                          <span class="btn-text">
                            learn more <i class="far fa-long-arrow-right"></i>
                          </span>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-2 col-lg-2 col-md-6">
                    <div class="footer-wrapper mb-30">
                      <h4 class="footer-title">Our Services</h4>
                      <ul class="fotter-menu">
                        <li>
                          <Link to="/Services">Mobile Development </Link>
                        </li>
                        <li>
                          <Link to="services-02.html">Web Development </Link>
                        </li>
                        <li>
                          <Link to="services-03.html">Tech Consultation</Link>
                        </li>
                        <li>
                          <Link to="it-management.html">Automation </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-6">
                    <div class="footer-wrapper footer-2-wrapper mb-30 pl-50">
                      <h4 class="footer-title">Quick Links</h4>
                      <ul class="fotter-menu">
                        <li>
                          <Link to="#">About Us</Link>
                        </li>
                        <li>
                          <Link to="#">Need a Consultant?</Link>
                        </li>
                        <li>
                          <Link to="#">Our Services</Link>
                        </li>
                        <li>
                          <Link to="#">Have Any Questions?</Link>
                        </li>
                        <li>
                          <Link to="#">Meet Our Team</Link>
                        </li>
                        <li>
                          <Link to="#">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-xl-2 col-lg-2 col-md-6">
                    <div class="footer-wrapper footer-2-wrapper mb-30">
                      <h4 class="footer-title">Contact Us</h4>
                      <div class="footer-info">
                        <p>But I must explain to you how all this mistaken</p>
                      </div>
                      <ul class="contact-link">
                        <li>
                          <div class="contact-address-icon">
                            <i class="far fa-phone"></i>
                          </div>
                          <div class="contact-address-text">
                            <h4>+234 809 454 3296</h4>
                          </div>
                        </li>
                        <li>
                          <div class="contact-address-icon">
                            <i class="far fa-envelope-open"></i>
                          </div>
                          <div class="contact-address-text">
                            <h4>
                              <Link
                                to="http://Dosh Services.net/cdn-cgi/l/email-protection"
                                class="__cf_email__"
                                data-cfemail="681b1d1818071a1c280f05090104460b0705"
                              >
                                info@doshservices.com
                              </Link>
                            </h4>
                          </div>
                        </li>
                        <li>
                          <div class="contact-address-icon">
                            <i class="far fa-map-marker-alt"></i>
                          </div>
                          <div class="contact-address-text">
                            <h4>12b MacDonald Akano street. Omole phase 1</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer-bottom-area footer-2-bottom mt-50 pb-25 pt-25">
                <div class="container">
                  <div class="row">
                    <div class="col-xl-8 col-lg-8 col-md-8">
                      <div class="copyright">
                        <p>
                          <i class="far fa-copyright"></i> Copyright 2019{" "}
                          <Link to="#">Dosh Services</Link>. All rights
                          reserved.
                        </p>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4">
                      <div class="footer-bottem-text text-md-right">
                        <p>
                          Design By <Link to="#">Dosh Services</Link>
                        </p>
                      </div>
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

export default FooterDark;
