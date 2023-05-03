import React, { Component } from 'react';
import { connect } from "react-redux";
import DatePicker from '../../../components/Input/DatePicker';
import './ManagePatient.scss'

import { FormattedMessage } from 'react-intl';
class ManagePatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date()

        }
    }

    async componentDidMount() {


    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }

    }

    handleOnchangeDatePicker = (date) => {  // nhận biết khi thay đổi ngày-> lịch cũng thay đổi ngày theo
        this.setState({
            currentDate: date[0]
        })
    }

    render() {

        // console.log('chek', this.state)
        return (

            <>
                <div className='manage-patient'>
                    <div className='title'>
                        Danh sách bệnh nhân khám bệnh
                    </div>
                    <div className='manage-patient-body row '>
                        <div className='col-4 form-group '>
                            <label>Chọn ngày khám</label>
                            <DatePicker
                                onChange={this.handleOnchangeDatePicker}
                                className='form-control'
                                value={this.state.currentDate}

                            >

                            </DatePicker>
                        </div>
                        <div className='col-12'>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
