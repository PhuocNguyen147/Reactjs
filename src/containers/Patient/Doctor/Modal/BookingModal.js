import React, { Component } from 'react';
import { connect } from "react-redux";
import { Modal } from 'reactstrap';
import './BookingModal.scss'
import _ from 'lodash';
import ProfileDoctor from '../ProfileDoctor';
import { FormattedMessage } from 'react-intl';
import { classNames } from 'react-select/dist/index-ea9e225d.cjs.prod';
class BookingModal extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }

    async componentDidMount() {


    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }





    }


    render() {

        let { isOpenModal, closeBookingClose, dataTime } = this.props;
        let doctorId = '';
        if (dataTime && !_.isEmpty(dataTime)) {
            doctorId = dataTime.doctorId
        }

        console.log('data props', this.props)

        return (
            <>
                <Modal
                    isOpen={isOpenModal}
                    /* toggle={ } */
                    className={'booking-modal-container'}
                    size='lg'
                    centered
                >
                    <div className='booking-modal-content'>

                        <div className='booking-modal-header'>
                            <span className='left'>Thông tin đặt lịch khám bệnh</span>
                            <span
                                className='right'
                                onClick={closeBookingClose}
                            ><i className='fas fa-times'></i></span>
                        </div>
                        <div className='booking-modal-body'>
                            <div className='doctor-infor'>
                                <ProfileDoctor

                                    doctorId={doctorId}
                                ></ProfileDoctor>
                            </div>
                            <div className='row'>
                                <div className='col-6 form-group'>
                                    <label>Họ tên</label>
                                    <input className='form-control'></input>
                                </div>
                                <div className='col-6 form-group'>
                                    <label>Số điện thoại</label>
                                    <input className='form-control'></input>
                                </div>
                                <div className='col-6 form-group'>
                                    <label>Địa chỉ Email</label>
                                    <input className='form-control'></input>
                                </div>
                                <div className='col-6 form-group'>
                                    <label>Địa chỉ liên hệ</label>
                                    <input className='form-control'></input>
                                </div>
                                <div className='col-12 form-group'>
                                    <label>Lý do khám</label>
                                    <input className='form-control'></input>
                                </div>
                                <div className='col-6 form-group'>
                                    <label>Đặt cho ai</label>
                                    <input className='form-control'></input>
                                </div>
                                <div className='col-6 form-group'>
                                    <label>Giới tính</label>
                                    <input className='form-control'></input>
                                </div>
                            </div>
                        </div>
                        <div className='booking-modal-footer'>

                            <button className='btn-booking-confirm'
                                onClick={closeBookingClose}
                            >Xác nhận</button>
                            <button className='btn-booking-cancel'
                                onClick={closeBookingClose}
                            >cancel</button>
                        </div>

                    </div>

                </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
