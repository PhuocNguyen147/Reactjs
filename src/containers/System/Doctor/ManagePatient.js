import React, { Component } from 'react';
import { connect } from "react-redux";
import DatePicker from '../../../components/Input/DatePicker';
import './ManagePatient.scss'
import { getListPatient } from '../../../services/userService'
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { LANGUAGES } from '../../../utils';
import RemedyModal from './RemedyModal';
class ManagePatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: moment(new Date()).startOf('day').valueOf(), // today
            dataPatient: [],
            isOpenRemedyModal: false,
            dataModal: {}
        }
    }

    async componentDidMount() {
        let { user } = this.props;
        let { currentDate } = this.state;
        let formatedDate = new Date(currentDate).getTime();
        this.getDataPatient(user, formatedDate)

    }

    getDataPatient = async (user, formatedDate) => {
        let res = await getListPatient({
            doctorId: user.id,
            date: formatedDate
        })
        if (res && res.errCode === 0) {
            this.setState({
                dataPatient: res.data
            })
        }
    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }

    }

    handleOnchangeDatePicker = (date) => {  // nhận biết khi thay đổi ngày-> lịch cũng thay đổi ngày theo
        this.setState({
            currentDate: date[0]
        }, () => {
            let { user } = this.props;
            let { currentDate } = this.state;
            let formatedDate = new Date(currentDate).getTime();
            this.getDataPatient(user, formatedDate)
        })
    }
    handleBtnConfirm = (item) => {
        let data = {
            doctorId: item.doctorId,
            patientId: item.patientId,
            email: item.patientData.email
        }
        this.setState({
            isOpenRemedyModal: true,
            dataModal: data
        })
        console.log('data', data)
    }

    render() {

        console.log('chek', this.state)
        let { dataPatient, isOpenRemedyModal, dataModal } = this.state
        let { language } = this.props
        return (

            <>
                <div className='manage-patient container'>
                    <div className='title'>
                        Danh sách bệnh nhân khám bệnh
                    </div>
                    <div className='manage-patient-body row '>
                        <div className='choose'>
                            <label >Chọn ngày khám</label>
                            <div className='col-1 form-group day'>

                                <DatePicker
                                    onChange={this.handleOnchangeDatePicker}
                                    className='form-control'
                                    value={this.state.currentDate}

                                >

                                </DatePicker>
                            </div>
                        </div>

                        <div className='col-12'>
                            <table class="table table-hover ">
                                <thead>
                                    <tr>
                                        <th scope="col">Stt</th>
                                        <th scope="col">Thời gian</th>
                                        <th scope="col">Họ và tên</th>
                                        <th scope="col">Địa chỉ</th>
                                        <th scope="col">Giới tính</th>
                                        <th scope="col">Xác nhận trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {dataPatient && dataPatient.length > 0 ?
                                        dataPatient.map((item, index) => {
                                            let time = language === LANGUAGES.VI ?
                                                item.timeTypeDataPatient.valueVi : item.timeTypeDataPatient.valueEn;
                                            let gender = language === LANGUAGES.VI ?
                                                item.patientData.genderData.valueVi : item.patientData.genderData.valueEn
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{time}</td>
                                                    <td>{item.patientData.firstName}</td>
                                                    <td>{item.patientData.address}</td>
                                                    <td>{gender}</td>
                                                    <td>
                                                        <button className=' btn-success '
                                                            onClick={() => this.handleBtnConfirm(item)}
                                                        >
                                                            Xác nhận
                                                        </button>

                                                    </td>
                                                </tr>

                                            )
                                        })
                                        :
                                        <tr>
                                            Không có dữ liệu cho ngày này
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <RemedyModal
                    isOpenModal={isOpenRemedyModal}
                    dataModal={dataModal}
                >

                </RemedyModal>
            </>
        );

    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        user: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
