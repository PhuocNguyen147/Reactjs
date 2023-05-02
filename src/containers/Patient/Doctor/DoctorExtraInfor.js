import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './DoctorExtraInfor.scss'
import { getDetailInforDoctor } from '../../../services/userService'
import { LANGUAGES } from '../../../utils';

import { getScheduleByDate } from '../../../services/userService'
import { FormattedMessage } from 'react-intl';
class DoctorExtraInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: false

        }
    }

    async componentDidMount() {


    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }

    showHideDetailInfor = (status) => {
        this.setState({
            isShowDetailInfor: status
        })
    }
    render() {
        let { isShowDetailInfor } = this.state

        return (

            <>

                <div className='doctor-extra-infor-container'>
                    <div className='content-up'>
                        <div className='text-address'> ĐỊA CHỈ KHÁM</div>
                        <div className='name-clinic'>Phòng khám chuyên khoa Da Liễu</div>
                        <div className='detail-address'>2/59b - mậu thân - Ninh Kiều - Cần thơ</div>
                    </div>
                    <div className='content-down'>
                        {isShowDetailInfor === false &&
                            <div className='short-infor'>
                                GIÁ KHÁM: 300.000đ  <span onClick={() => this.showHideDetailInfor(true)}>  Xem chi tiết</span>
                            </div>

                        }
                        {isShowDetailInfor === true &&
                            <>
                                <div className='title-price'>
                                    GIÁ KHÁM:
                                </div>
                                <div className='detail-infor'>
                                    <div className='price'>
                                        <span className='left' >Giá khám</span>
                                        <span className='right'>300.000</span>
                                    </div>

                                    <div className='note' >
                                        Được ưu tiên khám trước khi đật khám qua BookingCare. Giá khám cho người nước ngoài là 30 USD
                                    </div>


                                </div>
                                <div className='payment'>Người bệnh có thể thanh toán chi phí bằng hình thức tiền mặt và quẹt thẻ</div>
                                <div className='hide-price'><span onClick={() => this.showHideDetailInfor(false)}>Ẩn bảng Giá</span></div>
                            </>
                        }

                    </div>



                </div>


            </>
        );

    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
