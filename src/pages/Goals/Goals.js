import React from "react";
import { Link } from "react-router-dom";
import { ReactTitle } from "react-meta-tags";

// css
// import "../../../public/assets/css/main.css";
// import "../../../public/assets/css/responsive.css";
// import "../../../public/assets/css/slick.css";
// import "../../../public/assets/css/magnificPopup.css";
// import "../../../public/assets/css/meanmenu.css";
// import "../../../public/assets/css/bootstrapMin.css";
// import "../../../public/assets/css/owlCarouselMin.css";
// import "../../../public/assets/css/animateMin.css";
// import "../../../public/assets/css/themifyIcons.css";

//components
import Header from "../../components/Header";
import FooterDark from "../../components/FooterDark";

// Imgs
import iconImageOne from "../../../public/assets/img/icon/01.png";
import iconImageTwo from "../../../public/assets/img/icon/02.png";
import iconImageThree from "../../../public/assets/img/icon/03.png";
import iconImageFour from "../../../public/assets/img/icon/04.png";
import iconImageFive from "../../../public/assets/img/icon/05.png";
import iconImageSix from "../../../public/assets/img/icon/06.png";
import brandOne from "../../../public/assets/img/brand/brand-01.png";
import brandTwo from "../../../public/assets/img/brand/brand-02.png";
import brandThree from "../../../public/assets/img/brand/brand-03.png";
import brandFour from "../../../public/assets/img/brand/brand-04.png";
import brandFive from "../../../public/assets/img/brand/brand-05.png";
import bgTwo from "../../../public/assets/img/bg/bg-2.jpg";
import goalsImgThree from "../../../public/assets/img/goals/03.jpg";
import goalsImgOne from "../../../public/assets/img/goals/01.jpg";
import goalsImgTwo from "../../../public/assets/img/goals/02.jpg";
import bgFourteen from "../../../public/assets/img/bg/bg-14.jpg";


const Goals = () => {
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
                  <h1>Our Goals</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <span>Goals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- breadcrumb-area-ends --> */}

        {/* <!-- our-goals-area-start --> */}
        <div class="our-goals-area pt-130 pb-95">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-md-4">
                <div class="our-goals-wrapper mb-30">
                  <div class="our-goals-img">
                    <img src={goalsImgOne} alt="" />
                  </div>
                  <div class="our-golas-text">
                    <h3>MIssion & Vision</h3>
                    <p>
                      Sedut perspiciatis unde omnis natus error voluptatem
                      accusantium doloremque laudantium totam rem aperiam eaque
                      ipsa quae
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-8 col-md-8">
                <div class="our-goals-wrapper mb-30">
                  <div class="our-goals-img">
                    <img src={goalsImgTwo} alt="" />
                  </div>
                  <div class="our-golas-text">
                    <h3>What DO We Want/ Our Goals</h3>
                    <p>
                      Must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because
                    </p>
                    <p class="mt-15">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam rem
                      aperiam eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dictae.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- our-goals-area-end --> */}

        {/* <!-- brand-area-start --> */}
        <div class="brand-area pb-130">
          <div class="container">
            <div class="row">
              <div class="brand-active owl-carousel">
                <div class="col-xl-12">
                  <div class="brand-img text-center">
                    <img src={brandOne} alt="" />
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="brand-img text-center">
                    <img src={brandTwo} alt="" />
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="brand-img text-center">
                    <img src={brandThree} alt="" />
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="brand-img text-center">
                    <img src={brandFour} alt="" />
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="brand-img text-center">
                    <img src={brandFive} alt="" />
                  </div>
                </div>
                <div class="col-xl-12 text-center">
                  <div class="brand-img">
                    <img src={brandTwo} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- brand-area-end --> */}

        {/* <!-- goals-area-start --> */}
        <div class="goals-area pos-rel">
          <div
            class="goals-img d-none d-lg-block"
            style={{ backgroundImage: `url(${goalsImgThree})` }}
          ></div>
          <div class="container">
            <div class="row">
              <div class="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6">
                <div class="golas-wrapper">
                  <div class="section-title section-title-white mb-30">
                    <span class="b-sm-left-1"></span>
                    <span class="b-sm-left-2"></span>
                    <span class="sub-t-left">what we do</span>
                    <h1>Super Quality IT Solutions Provide</h1>
                  </div>
                  <div class="golas-text">
                    <p>
                      {" "}
                      idea of denoun cing pleasure and praising pain was born
                      and I will giv complete account of the system, and expound
                      the actual teachings of the great explorer of the truth
                      the master-builder of
                    </p>
                    <ul class="goals-list">
                      <li>
                        <i class="far fa-check"></i>
                        <span>
                          Pleasure and praising pain was born and will complete
                        </span>
                      </li>
                      <li>
                        <i class="far fa-check"></i>
                        <span>
                          Pleasure and praising pain was born and will complete
                        </span>
                      </li>
                      <li>
                        <i class="far fa-check"></i>
                        <span>
                          Powerful Image Analysis With Google Cloud Vision
                        </span>
                      </li>
                    </ul>
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
        </div>
        {/* <!-- goals-area-end --> */}

        {/* <!-- services-area-start --> */}
        <div class="services-area pt-120 pb-60">
          <div class="container">
            <div class="row">
              <div class="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                <div class="section-title text-center ml-50 mr-50 mb-80">
                  <span class="border-left-1"></span>
                  <span>our services</span>
                  <span class="border-right-1"></span>
                  <h1>We provide exclusive services for your busainess</h1>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6 mb-75">
                <div class="services-2-wrapper">
                  <div class="services-img">
                    <img src={iconImageOne} alt="" />
                  </div>
                  <div class="services-text">
                    <h3>Web Development</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span class="services-button">
                        read more <i class="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-75">
                <div class="services-2-wrapper">
                  <div class="services-img">
                    <img src={iconImageTwo} alt="" />
                  </div>
                  <div class="services-text">
                    <h3>Database Analysis</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span class="services-button">
                        read more <i class="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-75">
                <div class="services-2-wrapper">
                  <div class="services-img">
                    <img src={iconImageThree} alt="" />
                  </div>
                  <div class="services-text">
                    <h3>Server Security</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span class="services-button">
                        read more <i class="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-75">
                <div class="services-2-wrapper">
                  <div class="services-img">
                    <img src={iconImageFour} alt="" />
                  </div>
                  <div class="services-text">
                    <h3>UX/UI Strategy</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span class="services-button">
                        read more <i class="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-75">
                <div class="services-2-wrapper">
                  <div class="services-img">
                    <img src={iconImageFive} alt="" />
                  </div>
                  <div class="services-text">
                    <h3>Analysis For Tools</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span class="services-button">
                        read more <i class="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-75">
                <div class="services-2-wrapper">
                  <div class="services-img">
                    <img src={iconImageSix} alt="" />
                  </div>
                  <div class="services-text">
                    <h3>Marketing Strategy</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking{" "}
                    </p>
                    <Link to="#">
                      {" "}
                      <span class="services-button">
                        read more <i class="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- services-area-end --> */}

        {/* <!-- cta-area-start --> */}
        <div
          class="cta-area pt-125 pb-95"
          style={{ backgroundImage: `url(${bgTwo})` }}
        >
          <div class="container">
            <div class="row">
              <div class="col-xl-7 col-lg-7">
                <div class="cta-text mb-30">
                  <span>do you have any project ?</span>
                  <h1>Let’s Talk About Business Soluations With Us</h1>
                </div>
              </div>
              <div class="col-xl-5 col-lg-5">
                <div class="cta-button text-lg-right mb-30">
                  <Link class="btn btn-white btn-none" to="#">
                    <span class="btn-text">
                      join with us <i class="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </Link>
                  <Link class="cta-link" to="#">
                    <i class="far fa-phone"></i> +812 (345) 789 88
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- cta-area-end --> */}
      </main>

      <FooterDark />
    </>
  );
};

export default Goals;
