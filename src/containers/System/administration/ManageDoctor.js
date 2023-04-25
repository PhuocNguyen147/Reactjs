import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions'
import './UserRedux'
import './ManageDoctor.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            selectedOption: '',
            description: '',
        }
    }

    componentDidMount() {


    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }



    handleSaveContentMarkdown = () => {
        console.log('check state mardown', this.state)
    }

    // Finish!
    handleEditorChange = ({ html, text }) => {

        this.setState({
            contentMarkdown: text,
            contentHTML: html,

        })
        console.log('handleEditorChange', html, text);
    }
    handleChange = selectedOption => {
        this.setState(
            { selectedOption }
        );
    };

    handleOnChangeDese = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    render() {
        return (
            <div className='manage-doctor'>
                <div className='manage-doctor-title'>
                    Tạo thông tin bác sĩ
                </div>
                <div className='infor  m-5'>
                    <div className='content-left form-group ' >
                        <label >Chọn bác sĩ</label>
                        <Select
                            value={this.state.selectedOption} // lấy theo state hiện tại
                            onChange={this.handleChange}
                            options={options}
                        />
                    </div>
                    <div className='content-right'>
                        <label> Phần giới thiệu bác sĩ:</label>
                        <textarea className='form-control' rows='4'
                            onChange={(event) => this.handleOnChangeDese(event)}  //bắt sự kiên thay đổi
                            value={this.state.description}
                        >

                        </textarea>
                    </div>
                </div>

                <div className='manage-doctor-edit'>
                    <div className='m-5'>
                        {/* martdown editor */}
                        <MdEditor style={{ height: '500px' }}
                            renderHTML={text => mdParser.render(text)}
                            onChange={this.handleEditorChange} />
                    </div>
                </div>
                <button className='save-doctor btn-success m-5  '
                    onClick={() => this.handleSaveContentMarkdown()}
                >Lưu thông tin</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
