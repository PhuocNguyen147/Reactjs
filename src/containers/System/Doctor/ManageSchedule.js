import React, { Component } from 'react';
import { connect } from "react-redux";
import './ManageSchedule.scss'
import * as actions from '../../../store/actions'
import { CRUD_ACTIONS, LANGUAGES } from '../../../utils'
import Select from 'react-select';
import { FormattedMessage } from 'react-intl';
import DatePicker from '../../../components/Input/DatePicker';
import moment from 'moment'; // check date

class ManageSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDoctors: [],
            selectedDoctor: {},
            currentDate: '',
            rangeTime: [],
        }
    }

    componentDidMount() {
        this.props.fetchAllDoctors();
        this.props.fetchAllScheduleTime();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buidDataInputSelect(this.props.allDoctors)
            this.setState({
                listDoctors: dataSelect
            })
        }
        if (prevProps.allScheduleTime !== this.props.allScheduleTime) {
            this.setState({
                rangeTime: this.props.allScheduleTime
            })

        }






        // if (prevProps.language !== this.props.language) {
        //     let dataSelect = this.buidDataInputSelect(this.props.allDoctors)
        //     this.setState({
        //         listDoctors: dataSelect
        //     })
        // }
    }

    buidDataInputSelect = (inputData) => {
        let result = [];
        let { language } = this.props;
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                let labelVi = `${item.lastName} ${item.firstName}`;
                let labelEn = `${item.firstName} ${item.lastName}`;
                object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                object.value = item.id;
                result.push(object)
            })

        }
        return result;
    }

    handleChangeSelect = async (selectedOption) => {
        this.setState({ selectedDoctor: selectedOption });
    };


    handleOnchangeDatePicker = () => {
        this.setState({
            currentDate: Date[0]
        })
    }
    render() {
        console.log('check state doctor', this.state)
        let { rangeTime } = this.state;
        let { language } = this.state;
        return (

            <div className='manage-schedule-container'>
                <div className='m-s-title'>
                    <FormattedMessage id='manage-schdule.title'></FormattedMessage>
                </div>

                {/* <div className='container'>
                    <div className='row'>
                        <div className='col-6 form-group'>
                            <label>Chọn Bác Sĩ</label>
                            <input className='form-control'> </input>
                        </div>
                    </div>
                </div> */}
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 form-group'>
                            <label><FormattedMessage id='manage-schdule.Choose-doctor'></FormattedMessage></label>
                            <Select
                                value={this.state.selectedDoctor} // lấy theo state hiện tại
                                onChange={this.handleChangeSelect}
                                options={this.state.listDoctors} // danh sach doctor
                            />
                        </div>
                        <div className='col-6 form-group'>
                            <label><FormattedMessage id='manage-schdule.Choose-Date'></FormattedMessage></label>
                            <DatePicker
                                onChange={this.handleOnchangeDatePicker}
                                className='form-control'
                                Selected={this.state.currentDate}
                                minDate={new Date()}
                            >

                            </DatePicker>

                        </div>
                        <div className='col-12 pick-hour-container' >
                            {rangeTime && rangeTime.length > 0 && rangeTime.map((item, index) => {
                                return (
                                    <button className='btn btn-outline-secondary mx-2 p-1' key={index}>
                                        {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                    </button>
                                )
                            })}
                        </div>

                        <button className='col-1 btn btn-primary'><FormattedMessage id='manage-schdule.Save'></FormattedMessage></button>
                    </div>

                </div>
            </div>



        );

    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allDoctors: state.admin.allDoctors,
        isLoggedIn: state.user.isLoggedIn,
        allScheduleTime: state.admin.allScheduleTime,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
        fetchAllScheduleTime: () => dispatch(actions.fetchAllScheduleTime()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
