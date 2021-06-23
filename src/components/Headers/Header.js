import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import closeModalIcon from "../../assets/img/closeModalIcon.svg";
import doshLogo from "../../assets/custom-assets/dosh-logo-1.png";
import { Modal } from "react-bootstrap";
import JobApplication from "./JobApplication";

let url = "/";

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
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
                    <a
                      href="mailto:info@doshservices.com"
                      className="__cf_email__"
                      data-cfemail="681b1d1818071a1c280f05090104460b0705"
                    >
                      info@doshservices.com
                    </a>
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
                    <a href="https://www.facebook.com/Dosh-services-198595744310071">
                      <i className="fab fa-facebook-f"> </i>
                    </a>
                    <a href="https://www.twitter.com/doshservices">
                      <i className="fab fa-twitter"> </i>{" "}
                    </a>
                    <a href="https://www.instagram.com/doshservices">
                      <i className="fab fa-instagram"> </i>{" "}
                    </a>
                    {/* <Link to={url}>
                          <i className="fab fa-youtube"> </i>{" "}
                        </Link> */}
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
                <div>
                  <Link to="/">
                    <img className="logo-one" src={doshLogo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9">
                <div className="header-button f-right d-none d-lg-block">
                  <div className="btn" onClick={() => openModal()}>
                    <span className="btn-text">
                      CONSULTANCY <i className="far fa-long-arrow-right" />
                    </span>
                  </div>
                  {/* 
                    <Modal
                      isOpen={modalIsOpen}
                      onRequestClose={closeModal}
                      style={customStyles}
                      overlayClassName="modal-overlay"
                      contentLabel="Example Modal"
                     
                    >
                      <QuoteForm
                        ctaBtnText={"Send Message"}
                        ctaBtnStyle={"consult-btn"}
                        formTitle={"Consult with Us"}
                        formDescription={
                          "Kindly fill the form alongsides details of your project"
                        }
                      />
                    </Modal> */}
                  <Modal
                    show={modalIsOpen}
                    onHide={closeModal}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Body>
                      <div className="modal-component__wrap">
                        <div className="modal-title">
                          <h3>Consult with Us</h3>
                          <span
                            onClick={closeModal}
                            style={{ cursor: "pointer" }}
                          >
                            <img src={closeModalIcon} alt="" />
                          </span>
                        </div>
                        <p className="modal-text-two">
                          "Kindly fill the form alongsides details of your
                          project"
                        </p>
                        <JobApplication applyBtnStyle={"modalBtn"} />
                      </div>
                    </Modal.Body>
                  </Modal>
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
                            <Link to="/Mission">Mission & Vision</Link>
                          </li>
                          <li>
                            <Link to="/Portfolio">Portfolio</Link>
                          </li>
                          {/* <li>
                              <Link to="/About">Clients</Link>
                            </li> */}
                        </ul>
                      </li>

                      <li>
                        <Link to="/Services">Services</Link>
                        <ul className="sub-menu text-left">
                          <li>
                            <Link to="/TechConsult"> Tech Consultation</Link>
                          </li>
                          <li>
                            <Link to="/WebDev">Web Development </Link>
                          </li>
                          <li>
                            <Link to="/MobileDev">Mobile Development</Link>
                          </li>
                          <li>
                            <Link to="/Automation">Automation </Link>
                          </li>
                          <li>
                            <Link to="CyberSecurity">Cyber Security </Link>
                          </li>
                          <li>
                            <Link to="/TechTraining">Tech Training</Link>
                          </li>
                        </ul>
                      </li>

                      {/* <li>
                          <Link to="/CaseStudy">Projects</Link>
                          <ul className="sub-menu text-left">
                          
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
                        </li> */}

                      {/* <li>
                          <Link to="/Packages">Packages</Link>
                        </li> */}
                      <li>
                        <Link to="/Contact">Contact Us</Link>
                      </li>
                      {/* <li>
                            <Link to="/Careers">Careers</Link>
                          </li> */}
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
    </>
  );
};

export default Header;
