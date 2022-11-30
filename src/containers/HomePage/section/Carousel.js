import React, { Component } from 'react';

import { connect } from 'react-redux';
import './Carousel.scss'
//slick  
// import React from 'react';
// import { Slide } from 'react-slick';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Session from 'redux-persist/lib/storage/session';


class Carousel extends Component {

    render() {
        return (

            <section className="portfolio">
                <header>
                    <div className="heading text-center mx-auto">
                        <h2>I Love What I Do</h2>
                        <p className="my-3">
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                            cubilia Curae;
                            Nulla mollis dapibus nunc, ut rhoncus
                            turpis sodales quis. Integer sit amet mattis quam.Vestibulum ante ipsum primis in faucibus orci
                            luctus et
                            ultrices posuere cubilia Curae; Nulla mollis dapibus nunc
                        </p>
                    </div>
                </header>
                <div className="container">
                    <main className="main">
                        <ul className="nav nav-pills justify-content-center mb-3">
                            <li className="nav-item">
                                <button className="nav-link active border border-dark text-dark mx-3" data-bs-toggle="pill"
                                    data-bs-target="#all">
                                    All Project</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link border border-dark text-dark mx-3" data-bs-toggle="pill"
                                    data-bs-target="#illustration">
                                    illustration</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link border border-dark text-dark mx-3" id="pills-contact-tab" data-bs-toggle="pill"
                                    data-bs-target="#photo">
                                    photoraphy</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link border border-dark text-dark mx-3" id="pills-contact-tab" data-bs-toggle="pill"
                                    data-bs-target="#web">website</button>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="all">
                                <div className="row ">
                                    <div className="col-12 col-sm-6 col-lg-4 p">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src='../image/g1.jpg' className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4 ">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="../image/g2.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="../image/g3.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="../image/g4.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="../image/g5.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="../image/g6.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="illustration">
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="../image/g1.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="../image/g2.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="../image/g3.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="photo">
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="../image/g1.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="../image/g2.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="../image/g1.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="../image/g2.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="../image/g1.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="../image/g2.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="web">
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="../image/g1.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="../image/g1.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="../image/g1.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Apologetic robot holding flowers</h3>
                                                <p>Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </main>
                </div>


            </section>


        );
    };


}



const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
