import React, { Component } from 'react';

import { connect } from 'react-redux';
import './Specialty.scss'
//slick  
// import React from 'react';
// import { Slide } from 'react-slick';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Session from 'redux-persist/lib/storage/session';


class Specialty extends Component {

    render() {


        return (
            <div className='specialty' >
                <div className='specialty-container'>
                    <div className='header'>
                        <span className='title'>Đội Ngũ Bác Sĩ</span>
                        <button className='btn'>Xem Thêm</button>
                    </div>
                    <div className='body-specialty'>
                        <Slider {...this.props.settings}>
                            <div className='img-slider'>
                                <a href='#'>
                                    <img src='doctor/ĐÀO-MINH-TUẤN.jpg' />
                                    <h5>PGS.TS.BS Đào Minh Tuấn</h5>
                                    <span>Chuyên Khoa Nhi</span>
                                </a>

                            </div>
                            <div className='img-slider'>
                                <a href='#'>
                                    <img src='doctor/Ngô-Thị-Hương.jpg' />
                                    <h4>BSNT Ngô Thị Hương</h4>
                                    <span>Chuyên Khoa Nhi / Khám và tư vấn vaccin</span>
                                </a>
                            </div>
                            <div className='img-slider'>
                                <a href='#'>
                                    <img src='doctor/Nguyễn-Ngọc-Lợi.jpg' />
                                    <h4>BS TTUT Nguyễn Ngọc Lợi</h4>
                                    <span>CHuyên Khoa Nhi</span>
                                </a>
                            </div>
                            <div className='img-slider'>
                                <a href='#'>
                                    <img src='doctor/Nguyễn-Ngọc-Văn-2.jpg' />
                                    <h4>ThS. BS Nguyễn Ngọc Văn</h4>
                                    <span>Chuyên Khoa Răng Hàm Mặt</span>
                                </a>
                            </div>
                            <div className='img-slider'>
                                <a href='#'>
                                    <img src='doctor/Phan-Thị-Vân-hà.jpg' />
                                    <h4>BS CKI Đoàn Thị Vân Hà</h4>
                                    <span>Chuyên Khoa Tim Mạch</span>
                                </a>
                            </div>
                            <div className='img-slider'>
                                <a href='#'>
                                    <img src='doctor/Quach-Thuy-Minh.jpg' />
                                    <h4>ThS.BS Quách Thúy Minh</h4>
                                    <span>Chuyên Khoa Tâm bệnh</span>
                                </a>
                            </div>
                            {/* <div className='img-slider'>
                            <h3>7</h3>
                        </div>
                        <div className='img-slider'>
                            <h3>8</h3>
                        </div> */}
                        </Slider>
                    </div>


                </div>
            </div>



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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
