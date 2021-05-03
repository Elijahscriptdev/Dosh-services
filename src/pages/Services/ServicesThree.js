import React from "react";
import { Link } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";


//components
import Header from "../../components/Headers/Header";
import FooterDark from "../../components/Footers/FooterDark";

// Imgs
import iconImageOne from "../../assets/img/icon/01.png";
import iconImageTwo from "../../assets/img/icon/02.png";
import iconImageThree from "../../assets/img/icon/03.png";
import iconImageFour from "../../assets/img/icon/04.png";
import iconImageFive from "../../assets/img/icon/05.png";
import iconImageSix from "../../assets/img/icon/06.png";
import brandOne from "../../assets/img/brand/brand-01.png";
import brandTwo from "../../assets/img/brand/brand-02.png";
import brandThree from "../../assets/img/brand/brand-03.png";
import brandFour from "../../assets/img/brand/brand-04.png";
import brandFive from "../../assets/img/brand/brand-05.png";
import bgOne from "../../assets/img/bg/01.jpg";
import blogFour from "../../assets/img/blog/blog-1.jpg";
import blogFive from "../../assets/img/blog/blog-5.jpg";
import blogOne from "../../assets/img/blog/blog-1.jpg";
import bgFourteen from "../../assets/img/bg/bg-14.jpg";
import bgNine from "../../assets/img/bg/bg-9.jpg";


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
        <div className="services-area pt-120 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                <div className="section-title text-center ml-50 mr-50 mb-80">
                  <span className="border-left-1"></span>
                  <span>our services</span>
                  <span className="border-right-1"></span>
                  <h1>We provide exclusive services for your busainess</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-75">
                <div className="services-2-wrapper">
                  <div className="services-img">
                    <img src={iconImageOne} alt="" />
                  </div>
                  <div className="services-text">
                    <h3>Web Development</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span className="services-button">
                        read more <i className="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-75">
                <div className="services-2-wrapper">
                  <div className="services-img">
                    <img src={iconImageTwo} alt="" />
                  </div>
                  <div className="services-text">
                    <h3>Database Analysis</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span className="services-button">
                        read more <i className="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-75">
                <div className="services-2-wrapper">
                  <div className="services-img">
                    <img src={iconImageThree} alt="" />
                  </div>
                  <div className="services-text">
                    <h3>Server Security</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span className="services-button">
                        read more <i className="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-75">
                <div className="services-2-wrapper">
                  <div className="services-img">
                    <img src={iconImageFour} alt="" />
                  </div>
                  <div className="services-text">
                    <h3>UX/UI Strategy</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span className="services-button">
                        read more <i className="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-75">
                <div className="services-2-wrapper">
                  <div className="services-img">
                    <img src={iconImageFive} alt="" />
                  </div>
                  <div className="services-text">
                    <h3>Analysis For Tools</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span className="services-button">
                        read more <i className="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-75">
                <div className="services-2-wrapper">
                  <div className="services-img">
                    <img src={iconImageSix} alt="" />
                  </div>
                  <div className="services-text">
                    <h3>Marketing Strategy</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span className="services-button">
                        read more <i className="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- services-area-end --> */}

        {/* <!-- fact-area-start --> */}
        <div
          className="fact-are-area pt-130 pb-100"
          style={{ backgroundImage: `url(${bgNine})` }}
       >
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-5 mb-30">
                <div className="fact-text">
                  <span>do you have any project ?</span>
                  <h1>
                    Let’s Talk About <br /> IT Solutions
                  </h1>
                  <Link to="#">
                    join with us <i className="far fa-long-arrow-right"></i>{" "}
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="row justify-content-between">
                  <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                    <div className="progress-wrapper">
                      <div
                        className="circular-progress"
                        data-percent="85"
                        data-scale-color="#fff"
                      >
                        <span>
                          <i className="fal fa-heart"></i>
                        </span>
                      </div>
                      <div className="progress-content">
                        <h1>85%</h1>
                        <span>Happy Clients</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                    <div className="progress-wrapper">
                      <div
                        className="circular-progress"
                        data-percent="95"
                        data-scale-color="#fff"
                      >
                        <span>
                          <i className="fal fa-box-check"></i>
                        </span>
                      </div>
                      <div className="progress-content">
                        <h1>95%</h1>
                        <span>Project Complate</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                    <div className="progress-wrapper">
                      <div
                        className="circular-progress"
                        data-percent="90"
                        data-scale-color="#fff"
                      >
                        <span>
                          <i className="fal fa-chart-bar"></i>
                        </span>
                      </div>
                      <div className="progress-content">
                        <h1>90%</h1>
                        <span>Market Research</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- fact-area-end --> */}

        {/* <!-- our-skills-area-start --> */}
        <div className="our-skills-area pt-130 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 mb-30">
                <div className="our-skills-img">
                  <img src={bgOne} alt="" />
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="progress-wrapper mb-30">
                  <div className="section-title  mb-50">
                    <span className="b-sm-left-2"></span>
                    <span className="sub-t-left">our skills</span>
                    <h1>More Than 25+ Years We Provide Solutions</h1>
                  </div>
                  <div className="progress-bar-text">
                    <div className="progress-skill">
                      <div className="single-skill mb-35">
                        <div className="bar-title">
                          <h4>Design Strategy</h4>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar wow slideInLeft"
                            role="progressbar"
                            style={{ width: "80%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            data-wow-duration="1s"
                            data-wow-delay=".5s"
                          >
                            <span>80%</span>
                          </div>
                        </div>
                      </div>
                      <div className="single-skill mb-35">
                        <div className="bar-title">
                          <h4>Marketing Strategy</h4>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar wow slideInLeft"
                            role="progressbar"
                            style={{ width: "90%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            data-wow-duration="2s"
                            data-wow-delay=".5s"
                          >
                            <span>90%</span>
                          </div>
                        </div>
                      </div>
                      <div className="single-skill mb-35">
                        <div className="bar-title">
                          <h4>UX/UI Strategy</h4>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar wow slideInLeft"
                            role="progressbar"
                            style={{ width: "85%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            data-wow-duration="2s"
                            data-wow-delay=".5s"
                          >
                            <span>85%</span>
                          </div>
                        </div>
                      </div>
                      <div className="single-skill mb-35">
                        <div className="bar-title">
                          <h4>Business Development</h4>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar wow slideInLeft"
                            role="progressbar"
                            style={{ width: "95%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            data-wow-duration="2s"
                            data-wow-delay=".5s"
                          >
                            <span>95%</span>
                          </div>
                        </div>
                      </div>
                      <div className="single-skill">
                        <div className="bar-title">
                          <h4>Software Development</h4>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar wow slideInLeft"
                            role="progressbar"
                            style={{ width: "95%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            data-wow-duration="2s"
                            data-wow-delay=".5s"
                          >
                            <span>92%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- our-skills-area-end --> */}

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

        {/* <!-- blog-area-start --> */}
        <div className="blog-area pt-120 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                <div className="section-title text-center ml-50 mr-50 mb-75">
                  <span className="border-left-1"></span>
                  <span>our blog</span>
                  <span className="border-right-1"></span>
                  <h1>Reads Our Latest News & Blog</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="blog-wrapper blog-2-wrapper">
                  <div className="blog-img">
                    <Link to="blog-details.html">
                      <img src={blogOne} alt="" />
                    </Link>
                  </div>
                  <div className="blog-meta">
                    <span>
                      {" "}
                      <i className="far fa-user"></i> Soamlia
                    </span>
                    <span>
                      {" "}
                      <i className="fal fa-calendar-alt"></i> 05 Aug 2019
                    </span>
                    <span>
                      {" "}
                      <i className="far fa-comments"></i> (03)
                    </span>
                  </div>
                  <div className="blog-text">
                    <h3>
                      <Link to="blog-details.html">
                        Monthly Web Development To Update React Hooks Cons
                      </Link>
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque{" "}
                    </p>
                    <Link to="blog-deatils.html">
                      {" "}
                      <span className="blog-button">
                        read more <i className="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="blog-wrapper blog-2-wrapper">
                  <div className="blog-img">
                    <Link to="blog-details.html">
                      <img src={blogFour} alt="" />
                    </Link>
                  </div>
                  <div className="blog-meta">
                    <span>
                      {" "}
                      <i className="far fa-user"></i> Soamlia
                    </span>
                    <span>
                      {" "}
                      <i className="fal fa-calendar-alt"></i> 05 Aug 2019
                    </span>
                    <span>
                      {" "}
                      <i className="far fa-comments"></i> (03)
                    </span>
                  </div>
                  <div className="blog-text">
                    <h3>
                      <Link to="blog-details.html">
                        Detailed Comparison Between WordPress & October CMS
                      </Link>
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque{" "}
                    </p>
                    <Link to="blog-deatils.html">
                      {" "}
                      <span className="blog-button">
                        read more <i className="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="blog-wrapper blog-2-wrapper">
                  <div className="blog-img">
                    <Link to="blog-details.html">
                      <img src={blogFive} alt="" />
                    </Link>
                  </div>
                  <div className="blog-meta">
                    <span>
                      {" "}
                      <i className="far fa-user"></i> Soamlia
                    </span>
                    <span>
                      {" "}
                      <i className="fal fa-calendar-alt"></i> 05 Aug 2019
                    </span>
                    <span>
                      {" "}
                      <i className="far fa-comments"></i> (03)
                    </span>
                  </div>
                  <div className="blog-text">
                    <h3>
                      <Link to="blog-details.html">
                        Exploring Latest Web Design Together With Theme
                      </Link>
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque{" "}
                    </p>
                    <Link to="blog-deatils.html">
                      {" "}
                      <span className="blog-button">
                        read more <i className="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- blog-area-end --> */}
      </main>

      <FooterDark />
    </>
  );
};

export default Services;
