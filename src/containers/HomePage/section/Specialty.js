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
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <div className='specialty'>
                <div className='specialty-container'>
                    <div className='header'>
                        <span className='title'>Chuyên Khoa Phổ Biến</span>
                        <button className='btn'>Xem Thêm</button>
                    </div>
                    <div className='body-specialty'>
                        <Slider {...settings}>
                            <div className='img-slider'>
                                <a href='#'>
                                    <img src='images/65685.jpg' />
                                    <h5>Bác sĩ đa khoa</h5>
                                </a>

                            </div>
                            <div className='img-slider'>
                                <a href='#'>
                                    <img src='images/65685.jpg' />
                                    <h5>Bác sĩ đa khoa</h5>
                                    < h5>Bác sĩ đa khoa</h5>
                                    < h5>Bác sĩ đa khoa</h5>
                                </a>
                            </div>
                            <div className='img-slider'>
                                <a href='#'>
                                    <img src='images/65685.jpg' />
                                    <h5>Bác sĩ đa khoa</h5>
                                </a>
                            </div>
                            <div className='img-slider'>
                                <a href='#'>
                                    <img src='images/65685.jpg' />
                                    <h5>Bác sĩ đa khoa</h5>
                                </a>
                            </div>
                            <div className='img-slider'>
                                <a href='#'>
                                    <img src='images/65685.jpg' />
                                    <h5>Bác sĩ đa khoa</h5>
                                </a>
                            </div>
                            <div className='img-slider'>
                                <a href='#'>
                                    <img src='images/65685.jpg' />
                                    <h5>Bác sĩ đa khoa</h5>
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
