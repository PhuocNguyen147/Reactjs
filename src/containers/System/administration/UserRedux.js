import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import { getAllCodeService } from '../../../services/userService'
import * as actions from '../../../store/actions'
import { CRUD_ACTIONS, LANGUAGES, CommonUtils } from '../../../utils';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableManageUser from './TableManageUser';
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
            action: '',
            userEditId: '',

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
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : ''
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux
            this.setState({
                roleArr: arrRoles,
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].keyMap : ''
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPositions = this.props.positionRedux
            this.setState({
                positionArr: arrPositions,
                posion: arrPositions && arrPositions.length > 0 ? arrPositions[0].keyMap : ''
            })
        }

        if (prevProps.listUsers !== this.props.listUsers) {
            let arrGenders = this.props.genderRedux
            let arrRoles = this.props.roleRedux
            let arrPositions = this.props.positionRedux  //reset du lieu input
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : '',
                position: arrPositions && arrPositions.length > 0 ? arrPositions[0].keyMap : '',
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].keyMap : '',
                avatar: '',
                action: CRUD_ACTIONS.CREATE,
                previewImgURL: '',

            })
        }

    }
    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data = data[0];
        if (file) {
            let base46 = await CommonUtils.getBase64(file); //Hàm encode mã hóa ảnh thành base64

            let ObjectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: ObjectUrl,
                avatar: base46
            })
        }
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) return;

        let { action } = this.state

        // khác API tạo mới người dùng và sửa người dùng
        if (action === CRUD_ACTIONS.CREATE) {
            this.props.createNewUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phonenumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                avatar: this.state.avatar

            })
        }

        if (action === CRUD_ACTIONS.EDIT) {
            this.props.editUserRedux({
                id: this.state.userEditId,
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phonenumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                avatar: this.state.avatar, // upload image

            })
        }
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phoneNumber', 'address']

        for (let i = 0; i < arrCheck.length; i++) {

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
        }, () => {
            console.log('chech input', this.state)
        }
        )
    }


    openPreviewImage = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true
        })
    }

    handleEditUserFromParent = (user) => {
        console.log('check', user)

        let imageBase64 = '';  // mã hóa thông tin hình ảnh
        if (user.image) {
            imageBase64 = new Buffer(user.image, 'base64').toString('binary'); // convert sang binary (decode)
        }
        this.setState({
            email: user.email,
            password: 'code',
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phonenumber,
            address: user.address,
            gender: user.gender,
            position: user.positionId,
            role: user.roleId,
            avatar: '',
            previewImgURL: imageBase64, // convert anh
            action: CRUD_ACTIONS.EDIT,
            userEditId: user.id,

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
                                disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                            />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label" id='password'>Password</label>
                            <input type="password" className="form-control" id="inputPassword4"
                                value={password}
                                onChange={(event) => { this.onChangeInput(event, 'password') }}
                                disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
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
                                value={gender} //set gia trị default
                                onChange={(event) => { this.onChangeInput(event, 'gender') }}
                            >
                                {genders && genders.length > 0 && genders.map((item, index) => {
                                    return (<option key={index} value={item.keyMap}>  {item.valueVi}</option>)
                                })}


                            </select>
                        </div>
                        <div className="col-md-2">

                            <label for="inputPosition" className="form-label" id='position'>Chức vụ</label>
                            <select id="inputPosition" className="form-select"
                                value={position}
                                onChange={(event) => { this.onChangeInput(event, 'position') }}
                            >
                                {positions && positions.length > 0 && positions.map((item, index) => {
                                    return (<option key={index} value={item.keyMap}> {item.valueVi}</option>)
                                })}


                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="inputState" className="form-label" id='role'>Bạn là: </label>
                            <select id="inputState" className="form-select"
                                value={role}
                                onChange={(event) => { this.onChangeInput(event, 'role') }}>
                                {roles && roles.length > 0
                                    && roles.map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap}>{item.valueVi}</option>
                                        )
                                    })}
                            </select>
                        </div>
                        <div className="col-3">
                            <label for="inputimage" >Tải ảnh</label>
                            <div className="preview-img-container">
                                <input type="file" hidden id="previewImg"
                                    onChange={(event) => this.handleOnchangeImage(event)}
                                />

                                <label className='label-upload' htmlFor="previewImg">tải ảnh<i className="fas fa-upload"></i ></label>
                                <div className='preview-image'

                                    style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                    onClick={() => this.openPreviewImage()}
                                >
                                </div>
                            </div>

                        </div>
                        <div className="col-12">
                            <div className='submit p-4'>
                                <button type="submit" className={this.state.action === CRUD_ACTIONS.EDIT ? "btn btn-success p-1 align-middle" : "btn btn-primary p-1"}
                                    onClick={() => this.handleSaveUser()}
                                >{this.state.action === CRUD_ACTIONS.EDIT ? "Update" : "Save"}

                                </button>
                            </div>

                        </div>
                    </form>

                </div>
                <TableManageUser
                    handleEditUserFromParentPropkey={this.handleEditUserFromParent}
                    action={this.state.action} // truyên action cho cons
                />
                {this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImgURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }

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
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
        editUserRedux: (data) => dispatch(actions.editUser(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
