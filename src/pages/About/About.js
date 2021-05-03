import React from 'react'
import { Link } from 'react-router-dom';
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
import Header from '../../components/Header';
import FooterDark from '../../components/FooterDark';

// Imgs
import bgFourteen from "../../assets/img/bg/bg-14.jpg";
import bgFifteen from "../../assets/img/bg/bg-15.jpg";
import bgC from "../../assets/img/bg/c.jpg";
import bgTwo from "../../assets/img/bg/bg-2.jpg";
import aboutTwo from "../../assets/img/about/02.png";
import teamFourImg from "../../assets/img/team/team-04.jpg";
import teamThreeImg from "../../assets/img/team/team-03.jpg";
import teamTwoImg from "../../assets/img/team/team-02.jpg";
import teamOneImg from "../../assets/img/team/team-01.jpg";
import shapeOneAbout from "../../assets/img/shape/shape-1.png";
import testimonialImgOne from "../../assets/img/testimonial/01.png";
import testimonialImgTwo from "../../assets/img/testimonial/02.png";
import testimonialImgThree from "../../assets/img/testimonial/03.png";
import brandOne from "../../assets/img/brand/01.png";
import brandTwo from "../../assets/img/brand/02.png";
import brandThree from "../../assets/img/brand/03.png";
import brandFour from "../../assets/img/brand/04.png";
import brandFive from "../../assets/img/brand/05.png";




const About = () => {
    return (
      <>
        <ReactTitle title="Dosh Services - About Page" />
        <body>
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
                      <h1>About Us</h1>
                      <ul className="breadcrumb-menu">
                        <li>
                          <Link to="/">home</Link>
                        </li>
                        <li>
                          <span>About Us</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- breadcrumb-area-ends --> */}

            {/* <!-- about-area-start --> */}
            <div className="about-area pt-130 pb-100">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 mb-30">
                    <div className="about-2-img">
                      <img src={aboutTwo} alt="" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 mb-30">
                    <div className="about-1-wrapper">
                      <div className="about-text">
                        <span>about us</span>
                        <h1>
                          {" "}
                          A leading <br />
                          Nigeria based{" "}
                          <span>Information Technology Provider</span>
                        </h1>
                        <p>
                          Since inception, we at Dosh have provided our growing
                          list of clients in the Education, Finance, Health and
                          Agriculture industry with IT solutions focused on
                          bringing their ideas to life. Our team comprises of
                          developers, software engineers, data analyst, design
                          thinkers and process analysts who are the best in
                          their field, Our customers are our only priority; this
                          is why we remain committed to delivering professional
                          advice with the goal of making sure they get a high
                          return on your investment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- about-area-end --> */}

            {/* <!-- choose-area-start --> */}
            <div
              className="choose-area pt-130 pb-130"
              style={{ backgroundImage: `url(${bgFifteen})` }}
            >
              <div className="choose-bg">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 mb-30">
                      <div className="faq-wrapper">
                        <div className="section-title mb-45">
                          <span className="b-sm-left-1"></span>
                          <span className="b-sm-left-2"></span>
                          <span className="sub-t-left">why choose us</span>
                          <h1>We Are Expert In IT Solutions Services</h1>
                        </div>
                        <div className="faq-box faq-2-box">
                          <div id="accordion">
                            <div className="card">
                              <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                  <Link
                                    to="#"
                                    className="btn-link"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                                  >
                                    Our Mission{" "}
                                  </Link>
                                </h5>
                              </div>
                              <div
                                className="collapse show"
                                id="collapseOne"
                                aria-labelledby="headingOne"
                                data-parent="#accordion"
                              >
                                <div className="card-body">
                                  <p>
                                    At Dosh Technology, we are professionals at
                                    powering your business ideas and challenges
                                    into world acceptable solutions which would
                                    be fit for purposes. Dosh Technology is
                                    focused on providing a long term I.T.
                                    partnership with our clients from far and
                                    wide. We believe we can provide
                                    cost-effective service and support which
                                    allows you to get the best from your I.T.
                                    investment. DOSH Email:
                                    Info@doshservices.com. Innovate, create,
                                    experience IT Dosh Technology is focused on
                                    providing a long term I.T. partnership with
                                    our clients from far and wide. Been in
                                    existence for over four years. These
                                    smooth-sailing relationships allow us to
                                    understand our clients’ We believe we can
                                    provide cost-effective service and support
                                    which allows you to get the best from your
                                    I.T. investment.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">
                                  <Link
                                    to="#"
                                    className="btn-link collapsed"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                  >
                                    {" "}
                                    Widen The Working Scope{" "}
                                  </Link>
                                </h5>
                              </div>
                              <div
                                id="collapseTwo"
                                className="collapse"
                                aria-labelledby="headingTwo"
                                data-parent="#accordion"
                              >
                                <div className="card-body">
                                  <p>
                                    Dosh Technology is one of the leading
                                    information technology providers here in
                                    Nigeria. It has majored in providing IT
                                    solutions and products in different spheres
                                    of life ranging from Education, Business,
                                    Finance, Agriculture and Medicine to mention
                                    a few.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingThree">
                                <h5 className="mb-0">
                                  <Link
                                    to="#"
                                    className="btn-link collapsed"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                  >
                                    Our History
                                  </Link>
                                </h5>
                              </div>
                              <div
                                id="collapseThree"
                                className="collapse"
                                aria-labelledby="headingThree"
                                data-parent="#accordion"
                              >
                                <div className="card-body">
                                  <p>
                                    Over the years of existence, we have
                                    partnered with some of the leading
                                    technologies. This has been possible because
                                    we are extremely committed to delivering
                                    quality advice, sales and support to assist
                                    our clients to achieve the maximum
                                    satisfaction from their I.T. investment
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingFour">
                                <h5 className="mb-0">
                                  <Link
                                    to="#"
                                    className="btn-link collapsed"
                                    data-toggle="collapse"
                                    data-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                  >
                                    Our Skill Set
                                  </Link>
                                </h5>
                              </div>
                              <div
                                id="collapseFour"
                                className="collapse"
                                aria-labelledby="headingFour"
                                data-parent="#accordion"
                              >
                                <div className="card-body">
                                  <p>
                                    We are equipped with an integrated team of
                                    process-design thinkers, software engineers,
                                    business and process analysts and
                                    developers. Our collaboration with you
                                    avails us the opportunity to get to know
                                    your business, understand your industry and
                                    incorporate your big ideas into solutions
                                    that extensively grow your customer base
                                    and, as a result, keep you in business.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingFour">
                                <h5 className="mb-0">
                                  <Link
                                    to="#"
                                    className="btn-link collapsed"
                                    data-toggle="collapse"
                                    data-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                  >
                                    Why You Need Dosh{" "}
                                  </Link>
                                </h5>
                              </div>
                              <div
                                id="collapseFour"
                                className="collapse"
                                aria-labelledby="headingFour"
                                data-parent="#accordion"
                              >
                                <div className="card-body">
                                  <p>
                                    Not to blow our horns, but our team is made
                                    of some of the best developers and
                                    programmers in this part of the world. We
                                    are committed to providing our customers
                                    with; - IT Solutions tailored to resolve
                                    your business challenges - Computer support
                                    and networking services - End-to-end IT
                                    solutions for individuals We provide
                                    continual superior, responsive and timely
                                    technical support even after delivery of
                                    project or service. We will never leave you
                                    hanging.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 mb-30">
                      <div className="choose-wrapper">
                        <div className="choose-text">
                          <p>
                            We are an Information Technology company located in
                            Lagos, Nigeria, servicing clients Worldwide.Your
                            business is our business, working with us will
                            provide you with the opportunity to access new and
                            leading technological innovations that will help
                            increase your sales, grow your customer base and
                            ultimately keep you in business.
                          </p>
                        </div>
                        <div className="choose-img">
                          <img src={bgC} alt="" />
                          <div className="choose-video">
                            <Link
                              className="popup-video"
                              to="https://www.youtube.com/watch?v=LTXD6XZXc3U"
                              tabindex="0"
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
            </div>
            {/* <!-- choose-area-end --> */}

            {/* <!-- team-area-start --> */}
            <div className="team-area pt-120 pb-100 pos-rel">
              <div className="shape d-none d-xl-block">
                <div className="shape-item team-01 bounce-animate">
                  <img src={shapeOneAbout} alt="" />
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
                        {" "}
                        idea of denouncing pleasure and praising pain was born
                        and I will give.
                      </p>
                      <Link className="btn" to="#">
                        <span className="btn-text">
                          join with us{" "}
                          <i className="far fa-long-arrow-right"></i>
                        </span>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                    <div className="team-wrapper">
                      <div className="team-img">
                        <img src={teamOneImg} alt="" />
                      </div>
                      <div className="team-text">
                        <h4>Solvina D Naliz</h4>
                        <span>Web developer</span>
                        <div className="team-icon">
                          <Link to="#">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-youtube"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                    <div className="team-wrapper">
                      <div className="team-img">
                        <img src={teamTwoImg} alt="" />
                      </div>
                      <div className="team-text">
                        <h4>Jerry D.Silva</h4>
                        <span>UI Designer</span>
                        <div className="team-icon">
                          <Link to="#">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-youtube"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                    <div className="team-wrapper">
                      <div className="team-img">
                        <img src={teamThreeImg} alt="" />
                      </div>
                      <div className="team-text">
                        <h4>David Walillams</h4>
                        <span>sr consultant</span>
                        <div className="team-icon">
                          <Link to="#">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-youtube"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                    <div className="team-wrapper">
                      <div className="team-img">
                        <img src={teamFourImg} alt="" />
                      </div>
                      <div className="team-text">
                        <h4>Michel Z. Jones</h4>
                        <span>CEO & Founder</span>
                        <div className="team-icon">
                          <Link to="#">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                          <Link to="#">
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
                  <div className="col-xl-7 col-lg-6">
                    <div className="cta-text mb-30">
                      <span>do you have any project ?</span>
                      <h1>Let’s Talk About Business Soluations With Us</h1>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6">
                    <div className="cta-button text-lg-right mb-30">
                      <Link className="btn btn-white btn-none" to="#">
                        <span className="btn-text">
                          contact us <i className="far fa-long-arrow-right"></i>
                        </span>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- cta-area-end --> */}

            {/* <!-- client-area-start --> */}
            <div className="client-area dark pt-120 pb-100 grey-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7">
                            <div className="section-title  mb-70">
                                <span className="b-sm-left-2"></span>
                                <span className="sub-t-left">our testimonials</span>
                                <h1>More Than 800+ Customer Satisfied Our Solutions</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="client-active owl-carousel">
                            <div className="col-xl-12">
                                <div className="client-say-wrapper mb-30">
                                    <div className="client-say-text">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante doloremque laudantium, totam rem  aperiam eaque ipsa illventore verit atis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <div className="client-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="clientsay-name">
                                            <div className="client-say-img">
                                                <img src={testimonialImgOne} alt=""/>
                                            </div>
                                            <div className="client-say-content">
                                                <h4>Sonix Paleda Joda</h4>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="client-say-wrapper mb-30">
                                    <div className="client-say-text">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante doloremque laudantium, totam rem  aperiam eaque ipsa illventore verit atis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <div className="client-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="clientsay-name">
                                            <div className="client-say-img">
                                                <img src={testimonialImgTwo} alt=""/>
                                            </div>
                                            <div className="client-say-content">
                                                <h4>Jeson Roy Newzi</h4>
                                                <span>SR Consultant</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="client-say-wrapper mb-30">
                                    <div className="client-say-text">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante doloremque laudantium, totam rem  aperiam eaque ipsa illventore verit atis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <div className="client-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="clientsay-name">
                                            <div className="client-say-img">
                                                <img src={testimonialImgThree} alt=""/>
                                            </div>
                                            <div className="client-say-content">
                                                <h4>David Mexxwell</h4>
                                                <span>Business manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="client-say-wrapper mb-30">
                                    <div className="client-say-text">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante doloremque laudantium, totam rem  aperiam eaque ipsa illventore verit atis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <div className="client-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="clientsay-name">
                                            <div className="client-say-img">
                                                <img src={testimonialImgOne} alt=""/>
                                            </div>
                                            <div className="client-say-content">
                                                <h4>Sonix Paleda Joda</h4>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="client-say-wrapper mb-30">
                                    <div className="client-say-text">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante doloremque laudantium, totam rem  aperiam eaque ipsa illventore verit atis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <div className="client-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="clientsay-name">
                                            <div className="client-say-img">
                                                <img src={testimonialImgOne} alt=""/>
                                            </div>
                                            <div className="client-say-content">
                                                <h4>Sonix Paleda Joda</h4>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- client-area-end --> */}

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
        </body>
      </>
    );
}

export default About
