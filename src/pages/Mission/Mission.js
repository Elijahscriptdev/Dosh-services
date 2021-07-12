import React from "react";
import { Link } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";

//components
import Header from "../../components/Headers/Header";
import FooterDark from "../../components/Footers/FooterDark";

import goalsImgOne from "../../assets/custom-assets/mission.jpg";
import goalsImgTwo from "../../assets/custom-assets/homepage-slider.jpg";
import bgFourteen from "../../assets/custom-assets/homepage-slider.jpg";


const Mission = () => {
  return (
    <>
      <ReactTitle title="Dosh Services - Services" />
      <Header />
      <main>
        {/* <!-- breadcrumb-area-start --> */}
        <div
          className="breadcrumb-area pt-230 pb-235 slider-overlay"
          style={{ backgroundImage: `url(https://res.cloudinary.com/dosh-services/image/upload/v1626092424/WhatsApp_Image_2021-07-09_at_12.27.42_AM_niym7r.jpg)` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div
                  className="breadcrumb-text text-center "
                  data-animation="fadeInLeft"
                  data-delay=".5s"
                >
                  <h1>Mission & Vision</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <span>Mission & Vision</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- breadcrumb-area-ends --> */}

        {/* <!-- our-goals-area-start --> */}
        <div className="our-goals-area pt-130 pb-100 mt-80">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-4">
                <div className="our-goals-wrapper mb-30">
                  <div className="our-goals-img">
                    <img src={goalsImgOne} alt="" />
                  </div>
                  <div className="our-golas-text">
                    <h3>Mission & Vision</h3>
                    <p>
                      To provide valuable business solutions via understanding
                      the client's needs and designing the best solution towards
                      the business goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-md-8">
                <div className="our-goals-wrapper mb-30">
                  <div className="our-goals-img">
                    <img src={goalsImgTwo} alt="" />
                  </div>
                  <div className="our-golas-text">
                    <h3> OUR GOALS </h3>
                    <p>
                      Since Inception, we have provided outstanding IT solutions
                      including Web Applications and Security services that
                      takes businesses to the next level and bring our clients
                      ideas to life. Our Team is comprised of experienced IT
                      professionals to give you the best experience in
                      information technology, Web Development and Customer
                      services. We are the technology partner you need to
                      accomplish your business goals.
                    </p>
                    <p className="mt-15">
                      From requirement assembling to IT framework strategy, we
                      furnish our clients with fair-minded and target
                      perspective to adjust technology to their business goals.
                      We can help you in accomplishing your business goals using
                      technology and build out your digital transformation
                      roadmap.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- our-goals-area-end --> */}

       
        {/* <!-- goals-area-start --> */}
        {/* <div className="goals-area pos-rel mt-80 mb-220">
          <div
            className="goals-img d-none d-lg-block"
            style={{ backgroundImage: `url(${goalsImgThree})` }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6">
                <div className="golas-wrapper">
                  <div className="section-title section-title-white mb-30">
                    <span className="b-sm-left-1"></span>
                    <span className="b-sm-left-2"></span>
                    <span className="sub-t-left">what we do</span>
                    <h1>Super Quality IT Solutions Provide</h1>
                  </div>
                  <div className="goals-text">
                    <p>
                      Idea of denoun cing pleasure and praising pain was born
                      and I will giv complete account of the system, and expound
                      the actual teachings of the great explorer of the truth
                      the master-builder of
                    </p>
                    <ul className="goals-list">
                      <li>
                        <i className="far fa-check"></i>
                        <span>
                          Pleasure and praising pain was born and will complete
                        </span>
                      </li>
                      <li>
                        <i className="far fa-check"></i>
                        <span>
                          Pleasure and praising pain was born and will complete
                        </span>
                      </li>
                      <li>
                        <i className="far fa-check"></i>
                        <span>
                          Powerful Image Analysis With Google Cloud Vision
                        </span>
                      </li>
                    </ul> */}
        {/* <Link className="btn" to="#">
                      <span className="btn-text">
                        learn more <i className="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link> */}
        {/* </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- goals-area-end --> */}

        {/* <!-- services-area-start --> */}
        {/* <div className="services-area pt-120 pb-130">
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
        </div> */}
        {/* <!-- services-area-end --> */}

        {/* <!-- cta-area-start --> */}
        {/* <div
          className="cta-area pt-125 pb-95"
          style={{ backgroundImage: `url(${bgTwo})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7">
                <div className="cta-text mb-30">
                  <span>do you have any project ?</span>
                  <h1>Let’s Talk About Business Soluations With Us</h1>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <div className="cta-button text-lg-right mb-30">
                  <Link className="btn btn-white btn-none" to="#">
                    <span className="btn-text">
                      join with us <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </Link>
                  <Link className="cta-link" to="#">
                    <i className="far fa-phone"></i> +812 (345) 789 88
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- cta-area-end --> */}
      </main>

      <FooterDark />
    </>
  );
};

export default Mission;
