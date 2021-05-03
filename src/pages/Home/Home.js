import React from "react";
import { Link } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";

// css
import "../../assets/css/main.css";
import "../../assets/css/responsive.css";
import "../../assets/css/slick.css";
import "../../assets/css/magnificPopup.css";
import "../../assets/css/meanmenu.css";
import "../../assets/css/bootstrapMin.css";
import "../../assets/css/owlCarouselMin.css";
import "../../assets/css/animateMin.css";
import "../../assets/css/themifyIcons.css";

// Imgs
import sliderOne from "../../assets/img/slider/slider-1.jpg";
import bgTwo from "../../assets/img/bg/bg-2.jpg";
import bgFour from "../../assets/img/bg/bg-4.jpg";
import bgFive from "../../assets/img/bg/bg-5.jpg";
import bgMap from "../../assets/img/bg/map.png";
import shapeFive from "../../assets/img/shape/05.png";
import shapeThree from "../../assets/img/shape/03.png";
import shapeTwo from "../../assets/img/shape/02.png";
import shapeOne from "../../assets/img/shape/01.png";
import shapeFour from "../../assets/img/shape/04.png";
import aboutTwo from "../../assets/img/about/about-2.png";
import serviceOne from "../../assets/img/service/ser-01.jpg";
import serviceTwo from "../../assets/img/service/ser-02.jpg";
import serviceThree from "../../assets/img/service/ser-03.jpg";
import serviceFour from "../../assets/img/service/ser-04.jpg";
import shapeShapeOne from "../../assets/img/shape/shape-1.png"
import teamOne from "../../assets/img/team/team-01.jpg";
import teamTwo from "../../assets/img/team/team-02.jpg";
import teamThree from "../../assets/img/team/team-03.jpg";
import teamFour from "../../assets/img/team/team-04.jpg";
import projOne from "../../assets/img/project/01.jpg";
import projTwo from "../../assets/img/project/02.jpg";
import projThree from "../../assets/img/project/03.jpg";
import testimonialImg from "../../assets/img/testimonial/test.png";
import brandOne from "../../assets/img/brand/brand-01.png"
import brandTwo from "../../assets/img/brand/brand-02.png"
import brandThree from "../../assets/img/brand/brand-03.png"
import brandFour from "../../assets/img/brand/brand-04.png"
import brandFive from "../../assets/img/brand/brand-05.png"
import Header from "../../components/Header";
import Footer from "../../components/Footer";



let url = "/";

const Home = () => {
  return (
    <>
      <ReactTitle title="Dosh Services - IT Solutions Service Providers" />
      <body>
        <Header />

        <main>
          {/* <!-- slider-start --> */}
          <div className="slider-area">
            <div className="slider-active">
              <div
                className="single-slider slider-height slider-overlay d-flex align-items-center"
                style={{ backgroundImage: `url(${sliderOne})` }}
              >
                <div className="container">
                  <div className="row ">
                    <div className="col-xl-8 col-lg-8">
                      <div className="slider-content">
                        <h1 data-animation="fadeInLeft" data-delay=".3s">
                          Perfect IT Solutions For Your Business
                        </h1>
                        <p data-animation="fadeInLeft" data-delay=".5s">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque
                        </p>
                        <div
                          className="slider-button"
                          data-animation="fadeInUp"
                          data-delay=".7s"
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
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-3 d-none d-lg-block">
                      <div className="slider-video text-md-right">
                        <Link
                          className="popup-video"
                          to="https://www.youtube.com/watch?v=LTXD6XZXc3U"
                        >
                          <i className="fas fa-play"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- slider-start --> */}

          {/* <!-- about-area-start --> */}
          <div className="about-area pt-130 pb-100 pos-rel">
            <div className="shape d-none d-xl-block">
              <div className="shape-item ab-01 bounce-animate">
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
                  <div className="about-1-wrapper about-2-wrapper">
                    <div className="about-text">
                      <span>about us</span>
                      <h1>
                        A leading <br />
                        Nigeria based
                        <span>Information Technology Provider</span>
                      </h1>
                      <p>
                        Since inception, we at Dosh have provided our growing
                        list of clients in the Education, Finance, Health and
                        Agriculture industry with IT solutions focused on
                        bringing their ideas to life. Our team comprises of
                        developers, software engineers, data analyst, design
                        thinkers and process analysts who are the best in their
                        field, Our customers are our only priority; this is why
                        we remain committed to delivering professional advice
                        with the goal of making sure they get a high return on
                        your investment.
                      </p>
                    </div>
                    <div className="about-button">
                      <Link className="btn" to="/About">
                        <span className="btn-text">
                          Learn More <i className="far fa-long-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
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
                    <h1>We provide exclusive services for your busainess</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="our-services-wrapper mb-30">
                    <div className="our-services-img">
                      <img src={serviceOne} alt="" />
                    </div>
                    <div className="our-services-content">
                      <div className="our-services-icon">
                        <i className="fal fa-gem"></i>
                      </div>
                      <div className="our-services-text">
                        <h3>Mobile App Development</h3>
                        <p>
                          We are specialist when it comes to building Android,
                          IOS, and Windows Application. We at Dosh pride
                          ourselves in building apps that meet global standard
                          with a user-friendly interface.
                        </p>
                        <Link to={url}>
                          view more <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="our-services-wrapper mb-30">
                    <div className="our-services-img">
                      <img src={serviceTwo} alt="" />
                    </div>
                    <div className="our-services-content">
                      <div className="our-services-icon">
                        <i className="fal fa-laptop-code"></i>
                      </div>
                      <div className="our-services-text">
                        <h3>Web Development</h3>
                        <p>
                          We develop high-end, responsive and user-friendly
                          website and Web Applications. Our websites are
                          developed using different programming languages -
                          (Php, Python, NodeJs, Java and C++). With Dosh
                          Services.
                        </p>
                        <Link to={url}>
                          view more <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="our-services-wrapper mb-30">
                    <div className="our-services-img">
                      <img src={serviceThree} alt="" />
                    </div>
                    <div className="our-services-content">
                      <div className="our-services-icon">
                        <i className="fal fa-analytics"></i>
                      </div>
                      <div className="our-services-text">
                        <h3>Digital Marketing</h3>
                        <p>
                          We understand how important customer perceptions is to
                          sales generation in any business. We have therefore
                          developed processes that can help position the
                          brand/products/content of our client within their
                          target audience.
                        </p>
                        <Link to={url}>
                          view more <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="our-services-wrapper mb-30">
                    <div className="our-services-img">
                      <img src={serviceFour} alt="" />
                    </div>
                    <div className="our-services-content">
                      <div className="our-services-icon">
                        <i className="fal fa-fingerprint"></i>
                      </div>
                      <div className="our-services-text">
                        <h3>Tech Consulting</h3>
                        <p>
                          At Dosh Services, We are not only inventors; we also
                          offer consultations to businesses struggling to stay
                          in business. We equally work with businesses seeking
                          to meet up with the latest technology standard and
                          trends.
                        </p>
                        <Link to="/Services">
                          view more <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="services-button text-center mt-30">
                    <Link className="btn" to="/Services">
                      <span className="btn-text">
                        view All Services{" "}
                        <i className="far fa-long-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- our-services-area-end --> */}

          {/* <!-- team-area-start --> */}
          <div className="team-area pt-120 pb-100 pos-rel">
            <div className="shape d-none d-xl-block">
              <div className="shape-item team-01 bounce-animate">
                <img src={shapeShapeOne} alt="" />
              </div>
            </div>
            <div className="container">
              <div className="row mb-50">
                <div className="col-xl-4 col-lg-6">
                  <div className="section-title  mb-30">
                    <span className="b-sm-left-1"></span>
                    <span className="b-sm-left-2"></span>
                    <span className="sub-t-left">our Team</span>
                    <h1>Meet Experience Team Member</h1>
                  </div>
                </div>
                <div className="col-xl-5 offset-xl-3 col-lg-6">
                  <div className="team-section mb-30">
                    <p>
                      idea of denouncing pleasure and praising pain was born and
                      I will give.
                    </p>
                    <Link className="btn" to={url}>
                      <span className="btn-text">
                        join with us <i className="far fa-long-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                  <div className="team-wrapper">
                    <div className="team-img">
                      <img src={teamOne} alt="" />
                    </div>
                    <div className="team-text">
                      <h4>Solvina D Naliz</h4>
                      <span>Web developer</span>
                      <div className="team-icon">
                        <Link to={url}>
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to={url}>
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to={url}>
                          <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to={url}>
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                  <div className="team-wrapper">
                    <div className="team-img">
                      <img src={teamTwo} alt="" />
                    </div>
                    <div className="team-text">
                      <h4>Jerry D.Silva</h4>
                      <span>UI Designer</span>
                      <div className="team-icon">
                        <Link to={url}>
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to={url}>
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to={url}>
                          <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to={url}>
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                  <div className="team-wrapper">
                    <div className="team-img">
                      <img src={teamThree} alt="" />
                    </div>
                    <div className="team-text">
                      <h4>David Walillams</h4>
                      <span>sr consultant</span>
                      <div className="team-icon">
                        <Link to={url}>
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to={url}>
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to={url}>
                          <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to={url}>
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                  <div className="team-wrapper">
                    <div className="team-img">
                      <img src={teamFour} alt="" />
                    </div>
                    <div className="team-text">
                      <h4>Michel Z. Jones</h4>
                      <span>CEO & Founder</span>
                      <div className="team-icon">
                        <Link to={url}>
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to={url}>
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to={url}>
                          <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to={url}>
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- team-area-end --> */}

          {/* <!-- cta-area-start --> */}
          <div
            className="cta-area pt-125 pb-95"
            style={{ backgroundImage: `url(${bgTwo})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-7">
                  <div className="cta-text mb-30">
                    <span>Do you have any project ?</span>
                    <h1>Let’s Talk About Your New Project</h1>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5">
                  <div className="cta-button text-lg-right mb-30">
                    <Link className="btn btn-white btn-none" to={url}>
                      <span className="btn-text">
                        Contact Us <i className="far fa-long-arrow-right"></i>
                      </span>
                    </Link>
                    <Link className="cta-link" to="#contact-area">
                      <i className="far fa-phone"></i> +234 809 454 3296
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- cta-area-end --> */}

          {/* <!-- project-area-start --> */}
          <div className="project-area pt-125 pb-185  pl-140 pr-140">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                  <div className="section-title text-center ml-50 mr-50 mb-75">
                    <span className="border-left-1"></span>
                    <span>our project</span>
                    <span className="border-right-1"></span>
                    <h1>Our Latest Case Studies</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="project-active owl-carousel">
                  <div className="col-xl-12">
                    <div className="project-wrapper">
                      <div className="project-img">
                        <Link to={url}>
                          <img src={projOne} alt="" />
                        </Link>
                        <div className="project-text">
                          <span>business strategy</span>
                          <h3>
                            <Link to={url}>Financial Solutions</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="project-wrapper">
                      <div className="project-img">
                        <Link to={url}>
                          <img src={projTwo} alt="" />
                        </Link>
                        <div className="project-text">
                          <span>business strategy</span>
                          <h3>
                            <Link to={url}>Financial Solutions</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="project-wrapper">
                      <div className="project-img">
                        <Link to={url}>
                          <img src={projThree} alt="" />
                        </Link>
                        <div className="project-text">
                          <span>business strategy</span>
                          <h3>
                            <Link to={url}>Financial Solutions</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- project-area-end --> */}

          {/* <!-- testmonial-area-start --> */}
          <div className="testimonial-area testimonial pb-100">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 mb-30">
                  <div className="section-title  mb-45">
                    <span className="b-sm-left-1"></span>
                    <span className="b-sm-left-2"></span>
                    <span className="sub-t-left">Testimonials</span>
                    <h1>
                      What Our Client’s <br />
                      Say About us
                    </h1>
                  </div>
                  <div className="testimonial-active owl-carousel">
                    <div className="testimonial-wrapper">
                      <div className="testimonial-text">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantie totam rem
                          aperiam, eaque ipsa quae ab illo inventore veritatis
                          et quasi artectbeatae vitae dicta sunt explicabo. Nemo
                          enim ipsam voluptatem quia voluptas sipernatur aut
                          odit aut fugit sed quia consequunture
                        </p>
                        <h4>Kane Willumsons</h4>
                        <span>SR Developer</span>
                      </div>
                    </div>
                    <div className="testimonial-wrapper">
                      <div className="testimonial-text">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantie totam rem
                          aperiam, eaque ipsa quae ab illo inventore veritatis
                          et quasi artectbeatae vitae dicta sunt explicabo. Nemo
                          enim ipsam voluptatem quia voluptas sipernatur aut
                          odit aut fugit sed quia consequunture
                        </p>
                        <h4>Kane Willumsons</h4>
                        <span>SR Developer</span>
                      </div>
                    </div>
                    <div className="testimonial-wrapper">
                      <div className="testimonial-text">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantie totam rem
                          aperiam, eaque ipsa quae ab illo inventore veritatis
                          et quasi artectbeatae vitae dicta sunt explicabo. Nemo
                          enim ipsam voluptatem quia voluptas sipernatur aut
                          odit aut fugit sed quia consequunture
                        </p>
                        <h4>Kane Willumsons</h4>
                        <span>SR Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 mb-30">
                  <div className="testimonial-img">
                    <img src={testimonialImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- testmonial-area-end --> */}

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
                <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                  <div className="section-title section-title-white text-center ml-50 mr-50 mb-75">
                    <span className="border-left-1"></span>
                    <span>contact us</span>
                    <span className="border-right-1"></span>
                    <h1>Don't Hesitate To Contact Us</h1>
                  </div>
                </div>
              </div>
              <div className="contact-bg">
                <div className="row">
                  <div className="col-xl-5 col-lg-5 mb-30">
                    <div className="map-wrapper">
                      <div id="contact-map" className="contact-map">
                        <div class="col-xl-5 col-lg-5">
                          <div class="map-img mb-30">
                            <img src={bgMap} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7 mb-30">
                    <div className="appointment-wrapper">
                      <form id="appointment-form" action="#">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-box user-icon mb-30">
                              <input
                                type="text"
                                name="name"
                                placeholder="Full Name Here"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-box email-icon mb-30">
                              <input
                                type="text"
                                name="email"
                                placeholder="Email Here"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-box date-icon mb-30">
                              <input
                                type="text"
                                name="text"
                                placeholder="Subject"
                              />
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
                            <div className="contact-btn">
                              <button className="btn" type="submit">
                                <span className="btn-text">
                                  send message
                                  <i className="far fa-long-arrow-right"></i>
                                </span>
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
            </div>
          </div>
          {/* <!-- contact-area-end --> */}

          {/* <!-- brand-area-start --> */}
          <div className="brand-area pb-130">
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
      </body>
    </>
  );
};

export default Home;
