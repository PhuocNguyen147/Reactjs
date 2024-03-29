import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu, doctorMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES, USER_ROLE } from '../../utils'
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuApp: []
        }
    }
    handleChangeLanguage = (language) => {
        this.props.changeLangugeAppRedux(language)
    }
    componentDidMount() {
        let { userInfo } = this.props;
        let menu = []
        if (userInfo && !_.isEmpty(userInfo)) {
            let role = userInfo.roleId;
            if (role == USER_ROLE.ADMIN) {
                menu = adminMenu;
            }
            if (role == USER_ROLE.DOCTOR) {
                menu = doctorMenu
            }
        }
        this.setState({
            menuApp: menu
        })
        // console.log('check userinfor', this.props.userInfo)
    }
    render() {

        const { processLogout, userInfo, language } = this.props;

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={this.state.menuApp} />
                </div>



                <div className='bar'>
                    <div className='admin'>
                        <span className='Welcome'><FormattedMessage id="homeheader.welcome"> </FormattedMessage>, {userInfo && userInfo.firstName ? userInfo.firstName : ' '} <FormattedMessage id="homeheader.to manage"></FormattedMessage> !   </span>
                    </div>
                    {/* nut language  */}
                    <span className={language === LANGUAGES.VI ? 'language-vi active' : "language-vi"} onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}>VN</span>
                    <span className={language === LANGUAGES.EN ? 'language-en active' : "language-en"} onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}>EN</span>


                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout} title="Log out">

                        <i class="fas fa-sign-out-alt" ></i>
                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLangugeAppRedux: (language) => dispatch(actions.changeLangugeApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
