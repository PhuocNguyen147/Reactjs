import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userService';
import './UserManage.scss';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [], //đối tượng 
            isOpenModal: false,
            isOpenModalEdit: false,
            editUser: {}
        }
    }


    async componentDidMount() {
        await this.getAllUserFromReact()
    }

    getAllUserFromReact = async () => {   //lấy arrUser
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({ // giúp re-render: set state
                arrUsers: response.users
            })

        }
    }

    handleAddUser = () => {
        this.setState({
            isOpenModal: true
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal,
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getAllUserFromReact();

            }

        } catch (e) {
            console.log(e)
        }


    }

    handleDeleteUser = async (user) => {
        try {
            let del = await deleteUserService(user.id);
            if (del && del.errCode === 0) {
                await this.getAllUserFromReact();
            }
            else {
                alert(del.errMessage)
            }
        } catch (e) {
            console.log(e);
        }
    }

    handleEditUser = (user) => {
        console.log(user)
        this.setState({
            isOpenModalEdit: true,
            editUser: user
        })
    }

    toggleUserModalEdit = () => {
        this.setState({
            isOpenModalEdit: !this.state.isOpenModalEdit,
        })
    }


    doHandleEditUser = async (user) => {
        try {
            let res = await editUserService(user);
            if (res && res.errCode === 0) {
                await this.getAllUserFromReact()
                alert(res.errMessage)
            } else {
                alert(res.errMessage);
            }
        } catch (e) {
            console.log(e)
        }

    }

    render() {

        let arrUsers = this.state.arrUsers
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModal}
                    toggleParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {this.state.isOpenModalEdit &&
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEdit}
                        toggleParent={this.toggleUserModalEdit}
                        userCerrent={this.state.editUser}
                        editUser={this.doHandleEditUser}
                    />
                }
                <div className='title text-center'>QUẢN LÝ NGƯỜI DÙNG</div>

                <div className='mx-3 '>
                    <button className='btn btn-success px-3' onClick={() => this.handleAddUser()}>

                        <i className='fas fa-plus'></i>
                        Thêm Khách Hàng
                    </button>


                </div>
                <div className="m-5">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="table-responsive" data-pattern="priority-columns">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr className='table-success'>
                                            <th >Email</th>
                                            <th >Firstname</th>
                                            <th >lastName</th>
                                            <th >address</th>
                                            <th >Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {arrUsers && arrUsers.map((item) => {
                                            // console.log('arrUsers', arrUsers)
                                            return (
                                                <tr>
                                                    <td>{item.email}</td>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.address}</td>
                                                    <td >
                                                        <button className='edit' onClick={() => { this.handleEditUser(item) }}> <i className='fas fa-edit'></i></button>
                                                        <button className='delete' onClick={() => { this.handleDeleteUser(item) }}> <i className='fas fa-user-slash'></i></button>
                                                    </td>
                                                </tr>

                                            )
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
