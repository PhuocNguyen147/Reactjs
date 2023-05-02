import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './ProfileDoctor.scss'
import { LANGUAGES } from '../../../utils';
import { FormattedMessage } from 'react-intl';
import { getProfileDoctorById } from '../../../services/userService'
import NumberFormat from 'react-number-format';
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


    render() {
        let { dataProfile } = this.state
        let { language } = this.props
        let nameEn = '', nameVi = ''

        if (dataProfile && dataProfile.positionData) {
            nameVi = `${dataProfile.positionData.valueVi}, ${dataProfile.lastName} ${dataProfile.firstName} `;
            nameEn = `${dataProfile.positionData.valueEn}, ${dataProfile.firstName} ${dataProfile.lastName}`;
        }
        console.log('chek', this.state)
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
                                {dataProfile && dataProfile.Markdown && dataProfile.Markdown.description &&
                                    <span>
                                        {dataProfile.Markdown.description}
                                    </span>
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
