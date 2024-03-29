import React, { Component } from 'react';
import { connect } from "react-redux";
import { Modal } from 'reactstrap';
import './BookingModal.scss'
import _ from 'lodash';
import Toast from 'reactstrap';
import ProfileDoctor from '../ProfileDoctor';
import { FormattedMessage } from 'react-intl';
// import { classNames } from 'react-select/dist/index-ea9e225d.cjs.prod';
import DatePicker from '../../../../components/Input/DatePicker';
import Select from 'react-select';
import *  as actions from '../../../../store/actions'
import { LANGUAGES } from '../../../../utils';
import { postBookAppointment } from '../../../../services/userService'
import { toast } from 'react-toastify';
import LoadingOverlay from 'react-loading-overlay'
import moment from 'moment';

class BookingModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            phoneNumber: '',
            email: '',
            address: '',
            reason: '',
            birthday: '',
            selectedGender: '',
            doctorId: '',
            genders: '',
            timeType: '',
            isShowLoading: false,


        }
    }

    async componentDidMount() {
        this.props.getGender()

    }
    builDataGender = (data) => {
        let result = [];
        let language = this.props.language;
        if (data && data.length > 0) {
            data.map(item => {
                let object = {};
                object.label = language === LANGUAGES.VI ? item.valueVi : item.valueEn;
                object.value = item.keyMap;
                result.push(object)
            })
        }
        return result;
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
            this.setState({
                genders: this.builDataGender(this.props.genders)
            })
        }

        if (this.props.genders !== prevProps.genders) {

            this.setState({
                genders: this.builDataGender(this.props.genders)
            })
        }
        if (this.props.dataTime !== prevProps.dataTime) {
            if (this.props.dataTime && !_.isEmpty(this.props.dataTime)) {
                let doctorId = this.props.dataTime.doctorId;
                let timeType = this.props.dataTime.timeType;
                this.setState({
                    doctorId: doctorId,
                    timeType: timeType
                })
            }
        }


    }
    handleOnChangeInput = (event, id) => {
        let valueInput = event.target.value;
        let stateCopy = { ...this.setState };
        stateCopy[id] = valueInput;
        this.setState({
            ...stateCopy
        })
    }

    handleOnchangeDatePicker = (date) => {
        this.setState({
            birthday: date[0]
        })
    }

    handleChangeSelect = async (selectedOption) => {
        this.setState({
            selectedGender: selectedOption
        });

    }


    //gửi cho server thông tin bệnh nhân
    handleConfirmBooking = async () => {
        this.setState({
            isShowLoading: true
        })
        let date = new Date(this.state.birthday).getTime();
        let timeString = this.buildTimeBooking(this.props.dataTime);
        let doctorName = this.buildDoctorName(this.props.dataTime);
        let res = await postBookAppointment({
            fullName: this.state.fullName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            address: this.state.address,
            reason: this.state.reason,
            date: this.props.dataTime.date,
            birthday: date,
            selectedGender: this.state.selectedGender.value,
            doctorId: this.state.doctorId,
            genders: this.state.genders,
            timeType: this.state.timeType,
            language: this.props.language,
            timeString: timeString,
            doctorName: doctorName
        })


        if (res && res.errCode === 0) {
            toast.success('Đặt lịch thành công! / Booking a new appointent success!')
            this.props.closeBookingClose();
            this.setState({
                isShowLoading: false
            })

        } else {
            toast.error('Đặt lịch không thành công! / Booking a new appointent error!')
            this.setState({
                isShowLoading: false
            })
        }
        // console.log('submut', this.state)
    }


    buildTimeBooking = (dataTime) => {
        let { language } = this.props

        if (dataTime && !_.isEmpty(dataTime)) {
            let time = language === LANGUAGES.VI ? dataTime.timeTypeData.valueVi : dataTime.timeTypeData.valueEn;
            let date = language === LANGUAGES.VI ?
                moment.unix(+dataTime.date / 1000).format('dddd - DD/MM/YYYY') // convert từ chuỗi tring của thời gian sang đúng chuẩn time
                :
                moment.unix(+dataTime.date / 1000).locale('en').format('ddd - MM/DD/YYYY')
            return `${time} - ${date}`

        }
        return ''

    }

    buildDoctorName = (dataTime) => {
        let { language } = this.props

        if (dataTime && !_.isEmpty(dataTime)) {
            // console.log('chech>>>>>>>>>>>langyuage', name)
            let name = language === LANGUAGES.VI ?
                `${dataTime.doctorData.lastName} ${dataTime.doctorData.firstName}`
                :
                `${dataTime.doctorData.firstName} ${dataTime.doctorData.lastName}`

            return name;

        }
        return ''

    }

    render() {

        let { isOpenModal, closeBookingClose, dataTime } = this.props;
        let doctorId = '';
        if (dataTime && !_.isEmpty(dataTime)) {
            doctorId = dataTime.doctorId
        }

        // console.log('data state', this.state)

        return (
            <>
                <LoadingOverlay
                    active={this.state.isShowLoading}
                    spinner
                    text='Sending....email....'
                >
                    <Modal
                        isOpen={isOpenModal}
                        /* toggle={ } */
                        className={'booking-modal-container'}
                        size='lg'
                        centered
                    >
                        <div className='booking-modal-content'>

                            <div className='booking-modal-header'>
                                <span className='left'><FormattedMessage id='patient.booking-modal.title'></FormattedMessage></span>
                                <span
                                    className='right'
                                    onClick={closeBookingClose}
                                ><i className='fas fa-times'></i></span>
                            </div>
                            <div className='booking-modal-body'>
                                <div className='doctor-infor'>
                                    <ProfileDoctor
                                        isShowDescriptionDoctor={false}
                                        doctorId={doctorId}
                                        dataTime={dataTime}
                                    ></ProfileDoctor>
                                </div>



                                <div className='row'>
                                    <div className='col-6 form-group'>
                                        <label><FormattedMessage id='patient.booking-modal.name'></FormattedMessage></label>
                                        <input className='form-control'
                                            value={this.state.fullName}
                                            onChange={(event) => this.handleOnChangeInput(event, 'fullName')}
                                        ></input>
                                    </div>
                                    <div className='col-6 form-group'>
                                        <label><FormattedMessage id='patient.booking-modal.phone'></FormattedMessage></label>
                                        <input className='form-control'
                                            value={this.state.phoneNumber}
                                            onChange={(event) => this.handleOnChangeInput(event, 'phoneNumber')}

                                        ></input>
                                    </div>
                                    <div className='col-6 form-group'>
                                        <label><FormattedMessage id='patient.booking-modal.email'></FormattedMessage></label>
                                        <input className='form-control'
                                            value={this.state.email}
                                            onChange={(event) => this.handleOnChangeInput(event, 'email')}
                                        ></input>
                                    </div>
                                    <div className='col-6 form-group'>
                                        <label><FormattedMessage id='patient.booking-modal.address'></FormattedMessage></label>
                                        <input className='form-control'
                                            value={this.state.address}
                                            onChange={(event) => this.handleOnChangeInput(event, 'address')}
                                        ></input>
                                    </div>
                                    <div className='col-12 form-group'>
                                        <label><FormattedMessage id='patient.booking-modal.reason'></FormattedMessage></label>
                                        <input className='form-control'
                                            value={this.state.reason}
                                            onChange={(event) => this.handleOnChangeInput(event, 'reason')}
                                        ></input>
                                    </div>
                                    <div className='col-6 form-group'>
                                        <label><FormattedMessage id='patient.booking-modal.birth'></FormattedMessage></label>
                                        <DatePicker
                                            onChange={this.handleOnchangeDatePicker}
                                            className='form-control'
                                            value={this.state.birthday}

                                        >

                                        </DatePicker>

                                    </div>
                                    <div className='col-6 form-group'>
                                        <label><FormattedMessage id='patient.booking-modal.gender'></FormattedMessage></label>
                                        <Select
                                            value={this.state.selectedGender} // lấy theo state hiện tại
                                            onChange={this.handleChangeSelect}
                                            options={this.state.genders} // danh sach 
                                        >
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <div className='booking-modal-footer'>

                                <button className='btn-booking-confirm'
                                    onClick={() => this.handleConfirmBooking()}
                                ><FormattedMessage id='patient.booking-modal.confirm'></FormattedMessage></button>
                                <button className='btn-booking-cancel'
                                    onClick={closeBookingClose}
                                ><FormattedMessage id='patient.booking-modal.cancel'></FormattedMessage></button>
                            </div>

                        </div>

                    </Modal>
                </LoadingOverlay>
            </>
        );

    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genders: state.admin.genders,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGender: () => dispatch(actions.fetchGenderStart()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
