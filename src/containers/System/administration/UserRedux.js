import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import { getAllCodeService } from '../../../services/userService'
import * as actions from '../../../store/actions'

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import './UserRedux.scss';
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genrderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',
            isOpen: false,
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: '',
        }
    }


    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux
            this.setState({
                genrderArr: arrGenders,
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : ''
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux
            this.setState({
                roleArr: arrRoles,
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : ''
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPositions = this.props.positionRedux
            this.setState({
                positionArr: arrPositions,
                posion: arrPositions && arrPositions.length > 0 ? arrPositions[0].key : ''
            })
        }

    }
    handleOnchangeImage = (event) => {
        let data = event.target.files;
        let file = data = data[0];
        if (file) {
            let ObjectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: ObjectUrl,
                avatar: file
            })
        }
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) return;
        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            gender: this.state.gender,
            roleId: this.state.role,
            positionId: this.state.position

        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phoneNumber', 'address']

        for (let i = 0; i <= arrCheck.length; i++) {

            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('Chưa nhập: ' + arrCheck[i]);
                break;
            }


        }
        return isValid;
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        }
        )
    }


    openPreviewImage = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true
        })
    }
    render() {
        let genders = this.state.genrderArr;
        let roles = this.state.roleArr;
        let positions = this.state.positionArr;
        let isGetGenders = this.props.isLoadingGender;

        let { email, password, firstName, lastName, phoneNumber, address, gender, position, role, avatar } = this.state;
        return (

            <React.Fragment>
                <div className='title text-center'>Thêm bác sĩ</div>
                <div className='container pt-5'>
                    <form className="row g-3">
                        <div className='col-12'>{isGetGenders === true ? 'loadinggender' : ''}</div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label" id='email'><b>Email</b></label>
                            <input type="email" className="form-control" id="inputEmail4"
                                value={email}
                                onChange={(event) => { this.onChangeInput(event, 'email') }}
                            />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label" id='password'>Password</label>
                            <input type="password" className="form-control" id="inputPassword4"
                                value={password}
                                onChange={(event) => { this.onChangeInput(event, 'password') }}
                            />
                        </div>
                        <div className="col-md-6">
                            <label for="inputfirstName4" className="form-label" id='firstName'>First Name</label>
                            <input type="text" className="form-control" id="inputfirstName4"
                                value={firstName}
                                onChange={(event) => { this.onChangeInput(event, 'firstName') }}
                            />
                        </div>
                        <div className="col-md-6">
                            <label for="inputlastName4" className="form-label" id='lastName'>Last Name</label>
                            <input type="text" className="form-control" id="inputlastName4"
                                value={lastName}
                                onChange={(event) => { this.onChangeInput(event, 'lastName') }}
                            />
                        </div>
                        <div className="col-6">
                            <label for="phonenumber" className="form-label" id='phoneNumber'>Số điện thoại</label>
                            <input type="text" className="form-control" id="phonenumber"
                                value={phoneNumber}
                                onChange={(event) => { this.onChangeInput(event, 'phoneNumber') }}
                            />
                        </div>
                        <div className="col-6">
                            <label for="inputAddress" className="form-label" id='address'>Địa chỉ</label>
                            <input type="text" className="form-control" id="inputAddress"
                                value={address}
                                onChange={(event) => { this.onChangeInput(event, 'address') }}
                            />
                        </div>


                        <div className="col-md-2">
                            <label for="inputgender" className="form-label" id='gender'>Giới tính</label>
                            <select id="inputgender" className="form-select"
                                onChange={(event) => { this.onChangeInput(event, 'gender') }}
                            >

                                {genders && genders.length > 0 && genders.map((item, index) => {
                                    return (<option key={index} value={item.key}>  {item.valueVi}</option>)
                                })}


                            </select>
                        </div>
                        <div className="col-md-2">

                            <label for="inputPosition" className="form-label" id='position'>Chức vụ</label>
                            <select id="inputPosition" className="form-select"
                                onChange={(event) => { this.onChangeInput(event, 'position') }}
                            >
                                {positions && positions.length > 0 && positions.map((item, index) => {
                                    return (<option key={index} value={item.key}> {item.valueVi}</option>)
                                })}


                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="inputState" className="form-label" id='role'>Bạn là: </label>
                            <select id="inputState" className="form-select"
                                onChange={(event) => { this.onChangeInput(event, 'role') }}>
                                {roles && roles.length > 0
                                    && roles.map((item, index) => {
                                        return (
                                            <option key={index} value={item.key}>{item.valueVi}</option>
                                        )
                                    })}
                            </select>
                        </div>
                        <div className="col-3">
                            <label for="inputimage" className="preview-img-container">image</label>

                            <input type="file"
                                onChange={(event) => this.handleOnchangeImage(event)}
                            />
                            <label className='label-upload' htmlFor="previewImg">{/* tải ảnh<i className="fas fa-upload"></i >*/}</label>
                            <div className='preview-image'
                                style={{ backgroundImage: `url(${this.state.previewImgURl})` }}
                                onclick={() => this.openPreviewImage()}
                            >
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary"
                                onClick={() => this.handleSaveUser()}
                            >Sign in</button>
                        </div>
                    </form>
                    {this.props.isOpen === true &&
                        <Lightbox
                            mainSrc={this.state.previewImgURL}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                        />
                    }
                </div>



            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        genderRedux: state.admin.genders,
        roleRedux: state.admin.roles,
        positionRedux: state.admin.positions,
        isLoadingGender: state.admin.isLoadingGender,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
