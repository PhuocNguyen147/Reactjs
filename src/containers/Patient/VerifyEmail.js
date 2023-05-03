import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../HomePage/HomeHeader';
import './VerifyEmail.scss'
import { postVerifyBookAppointment } from '../../services/userService'
import { FormattedMessage } from 'react-intl';
class VerifyEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusVerify: false,
            errCode: 0


        }
    }

    async componentDidMount() {
        if (this.props.location && this.props.location.search) {
            let urlParams = new URLSearchParams(this.props.location.search); // url mở của html để  
            let token = urlParams.get('token');
            let doctorId = urlParams.get('doctorId');
            let res = await postVerifyBookAppointment({  // gửi lên server để verify
                token: token,
                doctorId: doctorId
            })
            if (res & res.errCode === 0) {
                this.setState({
                    statusVerify: true,
                    errCode: res.errCode
                })
            } else {
                this.setState({
                    statusVerify: true,
                    errCode: res && res.errCode === 0 ? res.errCode : -1
                })
            }
        }

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }


    }


    render() {
        let { statusVerify, errCode } = this.state
        // console.log('chek', this.state)
        return (
            <>
                <HomeHeader></HomeHeader>

                <div className='verify'>

                    {statusVerify === false ?
                        <div>
                            đang xử lý / loading data...
                        </div>
                        :
                        <div>
                            {+errCode === 0 ?
                                <div className='booking1'>Xác nhận lịch hẹn thành công!</div> : <div className='booking2'>lịch đã được xác nhận!</div>
                            }
                        </div>
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
