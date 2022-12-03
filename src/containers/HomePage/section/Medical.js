import React, { Component } from 'react';

import { connect } from 'react-redux';
import './Medical.scss'
//slick  
// import React from 'react';
// import { Slide } from 'react-slick';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Session from 'redux-persist/lib/storage/session';


class Medical extends Component {

    render() {


        return (
            <div className='medical' id='medical' >
                <div className='specialty-container'>
                    <div className='header'>
                        <span className='title'>Chuyên Khoa Phổ Biến</span>
                        <button className='btn'>Xem Thêm</button>
                    </div>
                    <div className='body-specialty'>
                        <Slider {...this.props.settings}>
                            <div className='img-slider'>
                                <div className='bg-img'>
                                    <a href='#'>
                                        <img src='chuyenkhoa/120331-co-xuong-khop.jpg' />
                                        <span>Cơ Xương Khớp</span>
                                    </a>
                                </div>

                            </div>
                            <div className='img-slider'>
                                <div className='bg-img'>
                                    <a href='#'>
                                        <img src='chuyenkhoa/120741-tim-mach.jpg' />

                                        <span>Tim Mạch</span>
                                    </a>
                                </div>
                            </div>
                            <div className='img-slider'>
                                <div className='bg-img'>
                                    <a href='#'>
                                        <img src='chuyenkhoa/120933-tieu-hoa.jpg' />

                                        <span>Tiêu Hóa</span>
                                    </a>
                                </div>

                            </div>
                            <div className='img-slider'>
                                <div className='bg-img'>
                                    <a href='#'>
                                        <img src='chuyenkhoa/121146-tai-mui-hong.jpg' />

                                        <span>Tai Mũi Mũi Họng</span>
                                    </a>
                                </div>
                            </div>
                            <div className='img-slider'>
                                <div className='bg-img'>
                                    <a href='#'>
                                        <img src='chuyenkhoa/121215-cot-song.jpg' />

                                        <span>Cột Sống</span>
                                    </a>
                                </div>
                            </div>
                            <div className='img-slider'>
                                <div className='bg-img'>
                                    <a href='#'>
                                        <img src='chuyenkhoa/121232-y-hoc-co-truyen.jpg' />

                                        <span>Y Học Cổ Truyền</span>
                                    </a>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Medical);
