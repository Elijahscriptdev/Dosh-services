import React from 'react'
import { Link } from "react-router-dom";

import doshLogo from "../../assets/img/logo/logo.jpg";
import flagImg from "../../assets/img/icon/flag.png";

const CaseHeader = () => {
    return (
      <>
            {/* header-start */}
<header>
            <div className="header-top-area grey-bg d-none d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-6 d-flex align-items-center">
                            <div className="header-info">
                                <span><i className="far fa-map-marker-alt"> </i> 54, moleye str. Alagomeji yaba</span>
                                <span className="header-ph"><i className="far fa-phone"> </i> +234 809 454 3296</span>
                                <span className="header-en"><i className="far fa-envelope-open"></i> <Link to="http://Dosh Services.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c3b0b6b3b3acb1b783a4aea2aaafeda0acae">info@doshservices.com</Link></span>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="header-right f-right "> 
                                <div className="header-lang  pos-rel f-right">
                                    <div className="lang-icon">
                                        <img src={flagImg} alt=""/>
                                        <Link to="#">English <i className="far fa-angle-down"></i></Link>
                                    </div>
                                    <ul className="header-lang-list">
                                        <li><Link to="#">USA</Link></li>
                                        <li><Link to="#">UK</Link></li>
                                        <li><Link to="#">CA</Link></li>
                                        <li><Link to="#">AU</Link></li>
                                    </ul>
                                </div>
                                <div className="header-icon f-right">
                                    <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    {/* <Link to="#"><i className="fab fa-youtube"></i></Link> */}
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
                            <div className="logo">
                                <Link to="/"><img src={doshLogo} alt="" /></Link>
                            </div>
                            
                        </div>
                        <div className="col-xl-9 col-lg-9">
                            <div className="header-button f-right d-none d-lg-block">
                                <Link className="btn" to="#"><span className="btn-text">Consultancy <i className="far fa-long-arrow-right"></i></span> </Link>
                            </div>
                            <div className="main-menu text-right">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li className="active"><Link to="/">home</Link>
                                            {/* <ul className="sub-menu text-left">
                                                <li><Link to="/">home 1</Link></li>
                                                <li><Link to="/">home 2</Link></li>
                                                <li><Link to="/">home 3</Link></li>
                                                <li><Link to="/">home 4</Link></li>
                                                <li><Link to="index-5.html">home 5</Link></li>
                                            </ul> */}
                                        </li>
                                        <li><Link to="/About">About</Link></li>
                                        <li><Link to="/Services">Services</Link>
                                            <ul className="sub-menu text-left">
                                                <li><Link to="/Services">Services</Link></li>
                                                <li><Link to="/ServicesTwo">services 02</Link></li>
                                                <li><Link to="ServicesThree">services-03</Link></li>
                                                <li><Link to="it-management.html">it management</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="blog.html">blog</Link>
                                            <ul className="sub-menu text-left">
                                                <li><Link to="blog.html">blog</Link></li>
                                                <li><Link to="blog-3-col.html">blog 3 col</Link></li>
                                                <li><Link to="blog-left-sidebar.html">blog left sidebar</Link></li>
                                                <li><Link to="blog-details.html">blog details</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/CaseStudy">pages</Link>
                                            <ul className="sub-menu text-left">
                                                <li><Link to="/CaseStudy">case study</Link></li>
                                                <li><Link to="case-study-02.html">case study 02</Link></li>
                                                <li><Link to="case-carousel.html">case carousel</Link></li>
                                                <li><Link to="case-details.html">case details</Link></li>
                                                <li><Link to="/Careers">career</Link></li>
                                                <li><Link to="faq.html">faq</Link></li>
                                                <li><Link to="Goals">goals</Link></li>
                                                <li><Link to="pricing.html">pricing</Link></li>
                                                <li><Link to="shop.html">shop</Link></li>
                                                <li><Link to="product-details.html">product details</Link></li>
                                                <li><Link to="team.html">team</Link></li>
                                                <li><Link to="/SingleTeam">single team</Link></li>
                                                <li><Link to="/Contact">contact</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/Contact">contact</Link></li>
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
        {/* <!-- header-end --> */}
    
      </>
    );
}

export default CaseHeader
