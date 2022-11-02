import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import './Login.scss'
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';



class Login extends Component {
    constructor(props) { /* khai báo các state */
        super(props);   // hàm tạo
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
        }
    }

    handleOnChangeUsername = (event) => { // bat event
        this.setState({
            username: event.target.value
        })
        console.log(event.target.value)
    }
    handleOnChangePassword = (event) => { // bat event, state cho từng sự kiện, mỗi tài khoản
        this.setState({
            password: event.target.value
        })
        console.log(event.target.value)
    }
    handleLogin = async () => {

        console.log('username: ' + this.state.username, 'pass: ' + this.state.password);
        console.log('all state: ', this.state);
        await handleLoginApi(this.state.username, this.state.password);
    }
    handleShowPass = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })



    }


    render() {
        //jsx: viết javascipt ngay trong html
        return (
            //viết một khối
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 login-text'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Username:</label>
                            <input
                                type='text'
                                className='form-control' name=''
                                placeholder='Username'
                                value={this.state.username} /* khai bao gia tri ban dau */
                                onChange={(event) => this.handleOnChangeUsername(event)} />  {/* event onChange có sự thay đổi mỗi khi đăng nhập, ham bat su kien moi state */}
                        </div>
                        <div className='col-12 form-group login-input '>
                            <label>Password:</label>
                            <div className='custom-eye-password'>
                                <input
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    name=''
                                    placeholder='Password'
                                    className='form-control'
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangePassword(event)} />
                                <span onClick={() => { this.handleShowPass() }}>
                                    <i class={this.state.isShowPassword ? "fas fa-eye" : "fas fa-eye-slash"}></i>
                                </span>

                            </div>
                        </div>

                        <div className='col-12 '>
                            <button className='btn-login' onClick={() => { this.handleLogin() }}>LOGIN</button>
                        </div>

                        <div className='col-12 '>
                            <span className='forgot-pass'>Forgot your password?</span>
                        </div>

                        <div className='col-12 text-center mt-3'>
                            <span className='text-login'>Or login with:</span>
                        </div>

                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-square facebook"></i>
                            <i className="fab fa-twitter twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language /* lấy ngôn ngữ */
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
