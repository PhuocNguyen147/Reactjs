import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions'
import './UserRedux'
import './ManageDoctor.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite'; // soan van ban
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
import { LANGUAGES } from '../../../utils'
// select chon doctor
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
            listDoctors: [],

        }
    }

    componentDidMount() {  /// hàm để kết nối dispatch -> dữ liểu đổ về trong tab netword
        this.props.fetchAllDoctors()

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buidDataInputSelect(this.props.allDoctors)
            this.setState({
                listDoctors: dataSelect
            })
        }
        if (prevProps.language !== this.props.language) {
            let dataSelect = this.buidDataInputSelect(this.props.allDoctors)
            this.setState({
                listDoctors: dataSelect
            })
        }
    }
    // list doctor
    buidDataInputSelect = (inputData) => {
        let result = [];
        let { language } = this.props;
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                let labelVi = `${item.lastName} ${item.firstName}`;
                let labelEn = `${item.firstName} ${item.lastName}`;
                object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                object.value = item.id;
                result.push(object)
            })

        }
        return result;
    }

    handleSaveContentMarkdown = () => {
        this.props.saveDetailDoctor({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            doctorId: this.state.selectedOption.value,
        })
    }


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
        // console.log('phuoc check', this.state)
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
                            options={this.state.listDoctors} // danh sach doctor
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
        language: state.app.language,
        allDoctors: state.admin.allDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {

        fetchAllDoctors: (id) => dispatch(actions.fetchAllDoctors(id)),
        saveDetailDoctor: (data) => dispatch(actions.saveDetailDoctor(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
