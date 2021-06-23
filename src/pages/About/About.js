import React from "react";
import { Link } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";

//components
import Header from "../../components/Headers/Header";
import FooterDark from "../../components/Footers/FooterDark";

// Imgs
import bgFourteen from "../../assets/custom-assets/homepage-slider.jpg";
import bgFifteen from "../../assets/img/bg/bg-15.jpg";
import bgC from "../../assets/custom-assets/mission.jpg";
import aboutTwo from "../../assets/custom-assets/about-us.png";


const About = () => {
  return (
    <>
      <ReactTitle title="Dosh Services - About Page" />
      <Header />
      <main>
        {/* <!-- breadcrumb-area-start --> */}
        <div
          className="single-slider slider-height slider-overlay breadcrumb-area pt-230 pb-235"
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
              <div className="col-xl-6 col-lg-6 mb-30 ">
                <div className="about-1-wrapper">
                  <div className="about-text">
                    <span>about us</span>
                    <h1>
                      {" "}
                      A leading <br />
                      Nigeria based <span>Information Technology Provider</span>
                    </h1>
                    <p>
                      Since inception, we at Dosh have provided our growing list
                      of clients in the Education, Finance, Health and
                      Agriculture industry with IT solutions focused on bringing
                      their ideas to life. Our team comprises of developers,
                      software engineers, data analyst, design thinkers and
                      process analysts who are the best in their field, Our
                      customers are our only priority; this is why we remain
                      committed to delivering professional advice with the goal
                      of making sure they get a high return on your investment.
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
                                powering your business ideas and challenges into
                                world acceptable solutions which would be fit
                                for purposes. Dosh Technology is focused on
                                providing a long term I.T. partnership with our
                                clients from far and wide. We believe we can
                                provide cost-effective service and support which
                                allows you to get the best from your I.T.
                                investment. DOSH Email: Info@doshservices.com.
                                Innovate, create, experience IT Dosh Technology
                                is focused on providing a long term I.T.
                                partnership with our clients from far and wide.
                                Been in existence for over four years. These
                                smooth-sailing relationships allow us to
                                understand our clients’ We believe we can
                                provide cost-effective service and support which
                                allows you to get the best from your I.T.
                                investment.
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
                                solutions and products in different spheres of
                                life ranging from Education, Business, Finance,
                                Agriculture and Medicine to mention a few.
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
                                Over the years of existence, we have partnered
                                with some of the leading technologies. This has
                                been possible because we are extremely committed
                                to delivering quality advice, sales and support
                                to assist our clients to achieve the maximum
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
                                business and process analysts and developers.
                                Our collaboration with you avails us the
                                opportunity to get to know your business,
                                understand your industry and incorporate your
                                big ideas into solutions that extensively grow
                                your customer base and, as a result, keep you in
                                business.
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
                                Not to blow our horns, but our team is made of
                                some of the best developers and programmers in
                                this part of the world. We are committed to
                                providing our customers with; - IT Solutions
                                tailored to resolve your business challenges -
                                Computer support and networking services -
                                End-to-end IT solutions for individuals We
                                provide continual superior, responsive and
                                timely technical support even after delivery of
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
                        business is our business, working with us will provide
                        you with the opportunity to access new and leading
                        technological innovations that will help increase your
                        sales, grow your customer base and ultimately keep you
                        in business.
                      </p>
                    </div>
                    <div className="choose-img">
                      <img src={bgC} alt="" />
                      {/* <div className="choose-video">
                            <Link
                              className="popup-video"
                              to="https://www.youtube.com/watch?v=LTXD6XZXc3U"
                              tabindex="0"
                            >
                              <i className="fas fa-play"></i>
                            </Link>
                          </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- choose-area-end --> */}
      </main>
      <div className="mt-130">
        <FooterDark />
      </div>
    </>
  );
};

export default About;
