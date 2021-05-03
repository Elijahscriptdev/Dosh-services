import React from "react";
import { Link } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";

// css
// import "../../assets/css/main.css";
// import "../../assets/css/responsive.css";
// import "../../assets/css/slick.css";
// import "../../assets/css/magnificPopup.css";
// import "../../assets/css/meanmenu.css";
// import "../../assets/css/bootstrapMin.css";
// import "../../assets/css/owlCarouselMin.css";
// import "../../assets/css/animateMin.css";
// import "../../assets/css/themifyIcons.css";

//components
import Header from "../../components/Header";
import FooterDark from "../../components/FooterDark";

//Imgs
import bgFourteen from "../../assets/img/bg/bg-14.jpg";
import careerImgOne from "../../assets/img/carrer/01.png";
import careerImgTwo from "../../assets/img/carrer/02.png";
import careerImgThree from "../../assets/img/carrer/03.png";
import careerImgFour from "../../assets/img/carrer/04.png";
import careerImgFive from "../../assets/img/carrer/05.png";
import careerImgSix from "../../assets/img/carrer/06.png";
import careerImgSeven from "../../assets/img/carrer/07.png";
import careerImgEight from "../../assets/img/carrer/08.png";


const Careers = () => {
  return (
    <>
      <ReactTitle title="Dosh Services - Careers" />
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
                  <h1>Career</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <span>Career</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- breadcrumb-area-ends --> */}

        <section className="career-cat-area pt-120 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                <div className="section-title text-center ml-50 mr-50 mb-75">
                  <span className="border-left-1"></span>
                  <span>Job category</span>
                  <span className="border-right-1"></span>
                  <h1>Our Latest Job Category</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <Link to="#">
                  <div className="carrer-cat text-center mb-30">
                    <img src={careerImgOne} alt="" />
                    <h3>It Solutions</h3>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4">
                <Link to="#">
                  <div className="carrer-cat text-center mb-30">
                    <img src={careerImgTwo} alt="" />
                    <h3>It Consulting</h3>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4">
                <Link to="#">
                  <div className="carrer-cat text-center mb-30">
                    <img src={careerImgThree} alt="" />
                    <h3>Product Design</h3>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4">
                <Link to="#">
                  <div className="carrer-cat text-center mb-30">
                    <img src={careerImgFour} alt="" />
                    <h3>Server Security</h3>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4">
                <Link to="#">
                  <div className="carrer-cat text-center mb-30">
                    <img src={careerImgFive} alt="" />
                    <h3>It Management</h3>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4">
                <Link to="#">
                  <div className="carrer-cat text-center mb-30">
                    <img src={careerImgSix} alt="" />
                    <h3>UX/UI Strategy</h3>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4">
                <Link to="#">
                  <div className="carrer-cat text-center mb-30">
                    <img src={careerImgSeven} alt="" />
                    <h3>IT Marketing</h3>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4">
                <Link to="#">
                  <div className="carrer-cat text-center mb-30">
                    <img src={careerImgEight} alt="" />
                    <h3>Bank & Finance</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="job-list-area grey-bg-2 pt-120 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="job-list mb-30">
                  <h3>Web Designer</h3>
                  <span>(Full Time)</span>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusa ntium doloremque laudantium totam rem
                    aperiam
                  </p>
                  <Link className="btn" to="#">
                    <span className="btn-text">
                      Read More <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="job-list mb-30">
                  <h3>Web Developer</h3>
                  <span>(Part Time)</span>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusa ntium doloremque laudantium totam rem
                    aperiam
                  </p>
                  <Link className="btn" to="#">
                    <span className="btn-text">
                      Read More <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="job-list mb-30">
                  <h3>SEO Optimization</h3>
                  <span>(Full Time)</span>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusa ntium doloremque laudantium totam rem
                    aperiam
                  </p>
                  <Link className="btn" to="#">
                    <span className="btn-text">
                      Read More <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="job-list mb-30">
                  <h3>IT Marketing</h3>
                  <span>(Part Time)</span>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusa ntium doloremque laudantium totam rem
                    aperiam
                  </p>
                  <Link className="btn" to="#">
                    <span className="btn-text">
                      Read More <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="job-list mb-30">
                  <h3>IT Consultant</h3>
                  <span>(Full Time)</span>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusa ntium doloremque laudantium totam rem
                    aperiam
                  </p>
                  <Link className="btn" to="#">
                    <span className="btn-text">
                      Read More <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="job-list mb-30">
                  <h3>Computer Engineer</h3>
                  <span>(Part Time)</span>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusa ntium doloremque laudantium totam rem
                    aperiam
                  </p>
                  <Link className="btn" to="#">
                    <span className="btn-text">
                      Read More <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterDark />
    </>
  );
};

export default Careers;
