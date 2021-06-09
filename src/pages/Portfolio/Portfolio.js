import React from "react";
import { Link } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";

//components
import FooterDark from "../../components/Footers/FooterDark";

//Imgs
import bgFourteen from "../../custom-assets/homepage-slider.jpg";
// // import bgTwo from "../../assets/img/bg/bg-2.jpg";
// import projImgOne from "../../assets/img/project/ga-01.jpg";
// import projImgTwo from "../../assets/img/project/ga-02.jpg";
// import projImgThree from "../../assets/img/project/ga-03.jpg";
// import projImgFour from "../../assets/img/project/ga-04.jpg";
// import projImgFive from "../../assets/img/project/ga-05.jpg";
// import projImgSix from "../../assets/img/project/ga-06.jpg";
import Header from "../../components/Headers/Header";

const Portfolio = () => {
  return (
    <>
      <ReactTitle title="Dosh Services - Careers" />
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
                  <h1>Our Projects</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <span>Projects</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- breadcrumb-area-ends --> */}

        {/* <!-- latest-gallery-area --> */}
        <div class="gallery-area pt-125 pb-130">
          <div class="container">
            <div class="row mb-40">
              <div class="col-xl-5 col-lg-5">
                <div class="section-title  mb-30">
                  <span class="b-sm-left-2"></span>
                  <span class="sub-t-left">our project</span>
                  <h1>Our Portfolio</h1>
                </div>
              </div>
              <div class="col-xl-7 col-lg-7mb-30">
                <div class="portfolio-menu mt-120 text-lg-right mb-30">
                  <button class="active" data-filter="*">
                    All Projects
                  </button>
                  <button data-filter=".cat1" class="">
                    Web Apps
                  </button>
                  <button data-filter=".cat2" class="">
                    Mobile Apps
                  </button>
                  <button data-filter=".cat3" class="">
                    Tech Trainings
                  </button>
                  <button data-filter=".cat4" class="">
                    Automations
                  </button>
                </div>
              </div>
            </div>
            <div id="portfolio-grid" className="row row-portfolio mb-230 mt-100">
              <h3 style={{margin: "2em auto"}}>Gallery coming soon...</h3>
            </div>
            {/*<div id="portfolio-grid" class="row row-portfolio">
              <div class="grid-sizer"></div>
              <div class="col-xl-4 col-lg-4 col-md-6 grid-item cat2 cat4 mb-30">
                <div class="portfolio-wrapper">
                  <div class="portfolio-img">
                    <Link to="#">
                      <img src={projImgOne} alt="" />
                    </Link>
                    <div class="portfolio-text">
                      <span>product design</span>
                      <h3>
                        <Link to="#">Best System How To Product Design</Link>
                      </h3>
                      <Link class="btn" to="#">
                        <span class="btn-text">
                          learn more <i class="far fa-long-arrow-right"></i>
                        </span>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 grid-item cat4 cat1 cat2 mb-30">
                <div class="portfolio-wrapper">
                  <div class="portfolio-img">
                    <Link to="#">
                      <img src={projImgTwo} alt="" />
                    </Link>
                    <div class="portfolio-text">
                      <span>product design</span>
                      <h3>
                        <Link to="#">Best System How To Product Design</Link>
                      </h3>
                      <Link class="btn" to="#">
                        <span class="btn-text">
                          learn more <i class="far fa-long-arrow-right"></i>
                        </span>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 grid-item cat3 cat2 cat1 mb-30">
                <div class="portfolio-wrapper">
                  <div class="portfolio-img">
                    <Link to="#">
                      <img src={projImgThree} alt="" />
                    </Link>
                    <div class="portfolio-text">
                      <span>product design</span>
                      <h3>
                        <Link to="#">Best System How To Product Design</Link>
                      </h3>
                      <Link class="btn" to="#">
                        <span class="btn-text">
                          learn more <i class="far fa-long-arrow-right"></i>
                        </span>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat4 mb-30">
                <div class="portfolio-wrapper">
                  <div class="portfolio-img">
                    <Link to="#">
                      <img src={projImgFour} alt="" />
                    </Link>
                    <div class="portfolio-text">
                      <span>product design</span>
                      <h3>
                        <Link to="#">Best System How To Product Design</Link>
                      </h3>
                      <Link class="btn" to="#">
                        <span class="btn-text">
                          learn more <i class="far fa-long-arrow-right"></i>
                        </span>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 grid-item cat3 cat2 mb-30">
                <div class="portfolio-wrapper">
                  <div class="portfolio-img">
                    <Link to="#">
                      <img src={projImgFive} alt="" />
                    </Link>
                    <div class="portfolio-text">
                      <span>product design</span>
                      <h3>
                        <Link to="#">Best System How To Product Design</Link>
                      </h3>
                      <Link class="btn" to="#">
                        <span class="btn-text">
                          learn more <i class="far fa-long-arrow-right"></i>
                        </span>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 grid-item cat4 cat3 mb-30">
                <div class="portfolio-wrapper">
                  <div class="portfolio-img">
                    <Link to="#">
                      <img src={projImgSix} alt="" />
                    </Link>
                    <div class="portfolio-text">
                      <span>product design</span>
                      <h3>
                        <Link to="#">Best System How To Product Design</Link>
                      </h3>
                      <Link class="btn" to="#">
                        <span class="btn-text">
                          learn more <i class="far fa-long-arrow-right"></i>
                        </span>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12">
                <div class="portfolio-button text-center mt-30">
                  <Link class="btn" to="/">
                    <span class="btn-text">
                      view more <i class="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </Link>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
        {/* <!-- gallery-area-end --> */}
      </main>

      <FooterDark />
    </>
  );
};

export default Portfolio;
