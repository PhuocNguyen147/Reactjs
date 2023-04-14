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
import * as actions from '../../../store/actions'
import { LANGUAGES } from '../../../utils';
import { FormattedMessage } from 'react-intl';
class Specialty extends Component {
    constructor(props) { //hàm tạo
        super(props)
        this.state = {
            arrDoctors: []
        }
    }

    // hàm xem thay đổi biến giá trị và gán lại state
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsRedux
            })
        }
    }

    componentDidMount() { // fire redux
        this.props.loadTopDoctors();
    }
    render() {
        console.log('check', this.props.topDoctorsRedux)
        let arrDoctors = this.state.arrDoctors;
        let { language } = this.props
        return (
            <div className='specialty' id='doctor' >
                <div className='specialty-container'>
                    <div className='header'>
                        <span className='title'><FormattedMessage id={"homepages.specialty.team of doctors"}></FormattedMessage> </span>
                        <button className='btn'><FormattedMessage id={"homepages.specialty.more-infor"}></FormattedMessage></button>
                    </div>
                    <div className='body-specialty'>
                        <Slider {...this.props.settings}>
                            {arrDoctors && arrDoctors.length > 0 &&
                                arrDoctors.map((item, index) => {
                                    let imageBase64 = '';
                                    if (item.image) {
                                        imageBase64 = new Buffer(item.image, 'base64').toString('binary'); // convert sang binary (decode)
                                    }
                                    let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName} `;
                                    let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`;
                                    return (
                                        < div className='img-slider' key={index} >
                                            <a href='#'>
                                                {/* <div className='img' > */}
                                                {/* <div className='img' style={{ backgroundImage: `url(${imageBase64})` }}> </div> */}
                                                {/* </div> */}
                                                <div className='bg-img'>
                                                    <img style={{ backgroundImage: `url(${imageBase64})` }} />
                                                </div>


                                                <h5>{language === LANGUAGES.VI ? nameVi : nameEn}</h5>
                                                <span>Chuyên Khoa Nhi</span>
                                            </a>
                                        </div>
                                    )

                                })
                            }




                            {/* <div className='img-slider'>
                                <a href='#'>
                                   
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
                            </div> */}
                        </Slider>
                    </div>


                </div >
            </div >



        );
    };


}



const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        topDoctorsRedux: state.admin.topDoctors //lấy từ file  -> adminReducer -> adminActions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
