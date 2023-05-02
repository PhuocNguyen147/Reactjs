import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './ProfileDoctor.scss'
import { LANGUAGES } from '../../../utils';
import { FormattedMessage } from 'react-intl';
import { getProfileDoctorById } from '../../../services/userService'
import NumberFormat from 'react-number-format';
import moment from 'moment';
import _ from 'lodash';
class ProfileDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProfile: {}

        }
    }

    async componentDidMount() {
        let data = await this.getInforDoctor(this.props.doctorId);
        this.setState({
            dataProfile: data
        })
    }
    getInforDoctor = async (id) => {
        let result = {};
        if (id) {
            let res = await getProfileDoctorById(id);
            if (res && res.errCode === 0) {
                result = res.data;
            }

        }
        return result;
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }

        if (this.props.doctorId !== prevProps.doctorId) {
            // this.getInforDoctor(this.props.doctorId)
        }
    }
    renderTimeBooking = (dataTime) => {
        let { language } = this.props

        if (dataTime && !_.isEmpty(dataTime)) {
            let time = language === LANGUAGES.VI ? dataTime.timeTypeData.valueVi : dataTime.timeTypeData.valueEn;
            let date = language === LANGUAGES.VI ?
                moment.unix(+dataTime.date / 1000).format('dddd - DD/MM/YYYY') // convert từ chuỗi tring của thời gian sang đúng chuẩn time
                :
                moment.unix(+dataTime.date / 1000).locale('en').format('ddd - MM/DD/YYYY')
            return (
                <>
                    <div>{time} - {date}</div>
                    <div>Mien phi dat lich</div>

                </>
            )
        }
        return <></>

    }

    render() {
        let { dataProfile } = this.state
        let { language, isShowDescriptionDoctor, dataTime } = this.props
        let nameEn = '', nameVi = ''

        if (dataProfile && dataProfile.positionData) {
            nameVi = `${dataProfile.positionData.valueVi}, ${dataProfile.lastName} ${dataProfile.firstName} `;
            nameEn = `${dataProfile.positionData.valueEn}, ${dataProfile.firstName} ${dataProfile.lastName}`;
        }
        console.log('chek', this.props)
        return (

            <>
                <div className='profile-doctor-container'>
                    <div className='intro-doctor'>
                        <div className='content-left'
                            style={{ backgroundImage: `url(${dataProfile && dataProfile.image ? dataProfile.image : ''})` }}>

                        </div>
                        <div className='content-right'>
                            <div className='up'>
                                {language === LANGUAGES.VI ? nameVi : nameEn}
                            </div>
                            <div className='down'>
                                {isShowDescriptionDoctor === true ?
                                    <>
                                        {dataProfile && dataProfile.Markdown && dataProfile.Markdown.description &&
                                            <span>
                                                {dataProfile.Markdown.description}
                                            </span>
                                        }
                                    </>
                                    :
                                    <>
                                        {this.renderTimeBooking(dataTime)}
                                    </>
                                }

                            </div>
                        </div>


                    </div>
                    <div className='price'> giá khám:
                        {dataProfile && dataProfile.Doctor_infor && language === LANGUAGES.VI &&
                            <NumberFormat className='currency'
                                value={dataProfile.Doctor_infor.priceTypeData.valueVi}
                                displayType={'text'}
                                thousandSeparator={true} suffix={'VND'}
                            ></NumberFormat>
                        }
                        {dataProfile && dataProfile.Doctor_infor && language === LANGUAGES.EN &&
                            <NumberFormat className='currency'
                                value={dataProfile.Doctor_infor.priceTypeData.valueEn}
                                displayType={'text'}
                                thousandSeparator={true} suffix={'$'}
                            ></NumberFormat>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDoctor);
