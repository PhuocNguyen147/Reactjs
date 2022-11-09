import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers } from '../../services/userService';
import './UserManage.scss';

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []
        }
    }


    async componentDidMount() {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })

        }

    }


    render() {
        console.log('check render', this.state)
        let arrUsers = this.state.arrUsers
        return (
            <div className="users-container">
                <div className='title text-center'>QUẢN LÝ NGƯỜI DÙNG </div>
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

                <div class="m-5">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="table-responsive" data-pattern="priority-columns">
                                <table class="table table-bordered table-hover">

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
                                        {arrUsers && arrUsers.map((item, index) => {
                                            console.log('phuoc map', item, index);
                                            return (
                                                <tr>
                                                    <td>{item.email}</td>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.address}</td>
                                                    <td >
                                                        <button className='edit' > <i className='fas fa-edit'></i></button>
                                                        <button className='delete'> <i className='fas fa-user-slash'></i></button>
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
