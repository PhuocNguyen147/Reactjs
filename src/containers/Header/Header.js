import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES } from '../../utils'

class Header extends Component {
    handleChangeLanguage = (language) => {
        this.props.changeLangugeAppRedux(language)
    }
    render() {

        const { processLogout, userInfo, language } = this.props;

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                <div className='admin'>
                    <span className='Welcome'>Xin chào, {userInfo && userInfo.firstName ? userInfo.firstName : ' '} đến với trang quản trị</span>
                </div>


                <div className='bar'>
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
