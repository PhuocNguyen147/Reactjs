import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers, createNewUserService, deleteUserService } from '../../services/userService';
import './UserManage.scss';
import ModalUser from './ModalUser';

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [], //đối tượng 
            isOpenModel: false
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
            isOpenModel: true
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModel: !this.state.isOpenModel,
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


    render() {

        let arrUsers = this.state.arrUsers
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModel}
                    toggleParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                <div className='title text-center'>QUẢN LÝ NGƯỜI DÙNG</div>
                {/* <div class="m-5">

                    <table class="table">
                        <thead>
                            <tr class="table-success" >
                                <th>Email</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Adrres</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>

                            {arrUsers && arrUsers.map((item, index) => {
                                console.log('phuoc map', item, index);
                                return (
                                    <tr>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button>Edit</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>

                                )
                            })
                            }



                        </tbody>
                    </table>
                </div> */}
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
                                                        <button className='edit' > <i className='fas fa-edit'></i></button>
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
