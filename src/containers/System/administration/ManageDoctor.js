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
import { CRUD_ACTIONS, LANGUAGES } from '../../../utils'
import { getDetailInforDoctor } from '../../../services/userService'
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
            hasOldData: false,

            listPrice: [],
            listPayment: [],
            listProvince: [],
            selectedPrice: '',
            selectedPayment: '',
            selectedProvince: '',
            nameClinic: '',
            addressClinic: '',
            note: ''


        }
    }

    componentDidMount() {  /// hàm để kết nối dispatch -> dữ liểu đổ về trong tab netword
        this.props.fetchAllDoctors();
        this.props.getAllRequireDoctorInfor();

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buidDataInputSelect(this.props.allDoctors, 'USERS')
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
        // in ra các select prive,payment,province
        if (prevProps.allRequireDoctorInfor !== this.props.allRequireDoctorInfor) {
            let { resPrice, resPayment, resProvince } = this.props.allRequireDoctorInfor
            let dataSelectPrice = this.buidDataInputSelect(resPrice)
            let dataSelectPayment = this.buidDataInputSelect(resPayment)
            let dataSelectProvince = this.buidDataInputSelect(resProvince)

            console.log('check', dataSelectPrice, dataSelectPayment, dataSelectProvince)
            this.setState({
                listPrice: dataSelectPrice,
                listPayment: dataSelectPayment,
                listProvince: dataSelectProvince,
            })
        }
    }
    // list doctor
    buidDataInputSelect = (inputData, type) => {
        let result = [];
        let { language } = this.props;
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                let labelVi = type === 'USERS' ? `${item.lastName} ${item.firstName}` : item.valueVi;
                let labelEn = type === 'USERS' ? `${item.firstName} ${item.lastName}` : item.valueEn;
                object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                object.value = item.id;
                result.push(object)
            })

        }
        return result;
    }

    handleSaveContentMarkdown = () => {
        let { hasOldData } = this.state;
        this.props.saveDetailDoctor({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            doctorId: this.state.selectedOption.value,
            action: hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE,
        })
    }


    handleEditorChange = ({ html, text }) => {

        this.setState({
            contentMarkdown: text,
            contentHTML: html,

        })
        console.log('handleEditorChange', html, text);
    }
    handleChangeSelect = async (selectedOption) => {
        this.setState({ selectedOption });
        let res = await getDetailInforDoctor(selectedOption.value)
        if (res && res.errCode === 0 && res.data && res.data.Markdown) {
            let markdown = res.data.Markdown;
            this.setState({
                contentHTML: markdown.contentHTML,
                contentMarkdown: markdown.contentMarkdown,
                description: markdown.description,
                hasOldData: true,
            })
        }
        else {
            this.setState({
                contentHTML: '',
                contentMarkdown: '',
                description: '',
                hasOldData: false,
            })
        }
        console.log('handleChangeSelect', res)

    };

    handleOnChangeDese = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    render() {
        // console.log('phuoc check', this.state)
        let { hasOldData } = this.state
        return (
            <div className='manage-doctor'>
                <div className='manage-doctor-title'>
                    <FormattedMessage id="admin.manage-doctor.title"> </FormattedMessage>
                </div>
                <div className='infor  m-5'>
                    <div className='content-left form-group ' >
                        <label > <FormattedMessage id="admin.manage-doctor.selecte-doctor"> </FormattedMessage></label>
                        <Select
                            value={this.state.selectedOption} // lấy theo state hiện tại
                            onChange={this.handleChangeSelect}
                            options={this.state.listDoctors} // danh sach doctor
                            placeholder={'Chọn bác sĩ'}
                        />
                    </div>
                    <div className='content-right'>
                        <label>  <FormattedMessage id="admin.manage-doctor.intro"> </FormattedMessage>:</label>
                        <textarea className='form-control'
                            onChange={(event) => this.handleOnChangeDese(event)}  //bắt sự kiên thay đổi
                            value={this.state.description}
                        >
                        </textarea>
                    </div>
                </div>
                <div className='more-infor-extra row m-5 '>
                    <div className='col-4 form-group ' >
                        <label>Chọn giá</label>
                        <Select
                            // value={this.state.selectedOption} // lấy theo state hiện tại
                            // onChange={this.handleChangeSelect}
                            options={this.state.listPrice} // danh sach doctor
                            placeholder={'Chọn giá'}

                        />
                    </div>
                    <div className='col-4 form-group pb-3' >
                        <label>Chọn phương thức thanh toán</label>
                        <Select
                            // value={this.state.selectedOption} // lấy theo state hiện tại
                            // onChange={this.handleChangeSelect}
                            options={this.state.listPayment} // danh sach doctor
                            placeholder={'Chọn phương thức thanh toán'}
                        />
                    </div>
                    <div className='col-4 form-group' >
                        <label>Chọn tỉnh thành</label>
                        <Select
                            // value={this.state.selectedOption} // lấy theo state hiện tại
                            // onChange={this.handleChangeSelect}
                            options={this.state.listProvince} // danh sach doctor
                            placeholder={'Chọn tỉnh thành'}
                        />
                    </div>
                    <div className='col-4 form-group' >
                        <label>Tên phòng khám</label>
                        <input className='form-control'></input>
                    </div>
                    <div className='col-4 form-group' >
                        <label>Địa chỉ phòng khám</label>
                        <input className='form-control'></input>
                    </div>
                    <div className='col-4 form-group' >
                        <label>Note</label>
                        <input className='form-control'></input>
                    </div>
                </div>

                <div className='manage-doctor-edit'>
                    <div className='m-5'>
                        {/* martdown editor */}
                        <MdEditor style={{ height: '500px' }}
                            renderHTML={text => mdParser.render(text)}
                            onChange={this.handleEditorChange}
                            value={this.state.contentMarkdown} />  {/* thêm dòng này để lấy truyền state hiện tại vào contentMarkdown */}
                    </div>
                </div>
                <button className={hasOldData === true ? 'save-doctor btn-success m-5 ' : 'create-content-doctor btn-primary m-5'}
                    onClick={() => this.handleSaveContentMarkdown()}>
                    {hasOldData === true ?
                        <span><FormattedMessage id="admin.manage-doctor.save"> </FormattedMessage></span> : <span><FormattedMessage id="admin.manage-doctor.crateinfo"> </FormattedMessage></span>}
                </button>
            </div>







        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allDoctors: state.admin.allDoctors,
        allRequireDoctorInfor: state.admin.allRequireDoctorInfor
    };
};

const mapDispatchToProps = dispatch => {
    return {

        fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
        saveDetailDoctor: (data) => dispatch(actions.saveDetailDoctor(data)),
        getAllRequireDoctorInfor: () => dispatch(actions.getRequireDoctorInfor()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
