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
                        <h2>Giới Thiệu về phòng khám và các chi nhánh</h2>
                        <p className="font ">
                            Phòng khám B1809281 là dự án đầu tiên của Công ty Cổ phần Đầu tư Dịch vụ Y tế, đồng thời là phòng khám đầu tiên của Hệ thống Phòng khám khoa Quốc tế

                            Khởi đầu dự án từ đầu năm 8/2022, sau 5 tháng xây dựng và triển khai, Phòng khám Nhi khoa Quốc tế The Medcare Hải Phòng đã chính thức hoàn thiện và đi vào hoạt động, bắt đầu từ ngày 3/12/2022
                        </p>
                    </div>
                </header>
                <div className="container">
                    <main className="main">
                        <ul className="nav nav-pills justify-content-center mb-3">
                            <li className="nav-item">
                                <button className="nav-link active border border-dark text-dark mx-3" data-bs-toggle="pill"
                                    data-bs-target="#all">
                                    Cơ Sở Y Tế Nổi Bật</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link border border-dark text-dark mx-3" data-bs-toggle="pill"
                                    data-bs-target="#illustration">
                                    Chi Nhánh</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link border border-dark text-dark mx-3" id="pills-contact-tab" data-bs-toggle="pill"
                                    data-bs-target="#photo"> Đối Tác
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link border border-dark text-dark mx-3" id="pills-contact-tab" data-bs-toggle="pill"
                                    data-bs-target="#web">Nhà Thuốc</button>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="all">
                                <div className="row ">
                                    <div className="col-12 col-sm-6 col-lg-4 p">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src='csvc/090854-bv-an-viet1.jpg' className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Bệnh Viện An VIệt</h3>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4 ">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="csvc/093035-benh-vien-thu-cuc-1.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Bệnh Viện Thu Cúc</h3>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="csvc/094107-quay-tiep-don-lao-khoa.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Bệnh Viện Lão Khoa Trung Ương</h3>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="csvc/101727-anh-sg-toan-dien-ben-ngoai.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5"> Phòng Khóa đa Khoa Sài Gòn</h3>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="csvc/bg-banner.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Bệnh Viên Đa Khoa Trung Ương Cần thơ</h3>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="csvc/172230benh-vien-hong-phat.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Bệnh Viên Hồng Phát</h3>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="illustration">
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="chi-nhanh/Z2638291837344_Cfed3-04.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Cần Thơ</h3>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="chi-nhanh/phong-kham-HP12.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Hồ Chí Minh</h3>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="/chi-nhanh/the-medcare-hà-nội-768x511.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Hà Nội</h3>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="photo">
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="doitac/cleveland-300x214.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">cleveland</h3>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="doitac/MSD-300x214.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">card</h3>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="doitac/Bủmungrad-300x214.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Burmungrad</h3>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="doitac/BV-Sydney-300x214.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Sydney</h3>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="doitac/GSK-300x214.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">GSK</h3>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="doitac/hang-thuoc-Sanofi-300x214.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">card</h3>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="web">
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="nhathuoc/20191014_042117_108196_he-thong-nha-thuoc-.max-1800x1800.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Thoáng mát</h3>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="nhathuoc/thiet-ke-nha-thuoc-14-1.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Ngăn Nắp</h3>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="card projects__item animate__animated animate__zoomIn">
                                            <img src="nhathuoc/thiet-ke-nha-thuoc-tay-nhu-the-nao-2.jpg" className="card-img-top" alt="hinh 1" />
                                            <div className="card-body text-center">
                                                <h3 className="h5">Chất Lượng</h3>

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
