import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions'
import './UserRedux'
import './TableManageUser.scss';


class TableManageUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersRedux: []
        }
    }

    componentDidMount() {

        this.props.fetchUserRedux();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers
            })
        }
    }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user.id)
    }
    handleEditUser = (user) => {

        this.props.handleEditUserFromParentPropkey(user)
    }
    render() {

        console.log('Phuoc check listuser', this.props.listUsers)
        console.log('hoidanit check state:', this.state.usersRedux)
        let arrUsers = this.state.usersRedux;
        return (

            <div className="m-5 ">
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

                                    {arrUsers && arrUsers.length > 0 &&
                                        arrUsers && arrUsers.map((item, index) => {
                                            // console.log('arrUsers', arrUsers) 
                                            return (
                                                <tr key={index}>
                                                    <td>{item.email}</td>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.address}</td>
                                                    <td >
                                                        <button
                                                            onClick={() => this.handleEditUser(item)}
                                                            className='edit'> <i className='fas fa-edit'></i></button>
                                                        <button
                                                            onClick={() => this.handleDeleteUser(item)}
                                                            className='delete'> <i className='fas fa-user-slash'></i></button>
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



        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
        deleteUserRedux: (id) => dispatch(actions.deleteUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
