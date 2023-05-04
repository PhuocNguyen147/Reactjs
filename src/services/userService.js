import axios from '../axios'
// nhận api từ server
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('api/login', { email: userEmail, password: userPassword }); //login 
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/getAllUsers?id=${inputId} `) // sử dụng với method get
    // template string ES6
}

const createNewUserService = (data) => {
    console.log("data form service", data)
    return axios.post('/api/createNewUser', data)
}

const deleteUserService = (userId) => {
    return axios.delete('/api/deleteUser', {
        data: {
            id: userId
        }
    })
}

const editUserService = (inputData) => {
    return axios.put('/api/editUser', inputData)
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType} `)
}

const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

const getAllDoctorService = () => {
    return axios.get(`/api/getalldoctor`)
}

const saveDetailDoctorService = (data) => {
    return axios.post('/api/saveinfordoctor', data)
}
const getDetailInforDoctor = (inputId) => {
    return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`)
}
const saveBulkScheduleDoctor = (data) => {
    return axios.post('/api/bulk-create-schedule', data)
}
const getScheduleByDate = (doctorId, date) => {
    return axios.get(`/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`)
}
const getExtraInforDoctorById = (doctorId) => {
    return axios.get(`/api/get-extra-infor-doctor-by-id?doctorId=${doctorId}`)
}

const getProfileDoctorById = (doctorId) => {
    return axios.get(`/api/get-profile-doctor-by-id?doctorId=${doctorId}`)
}

const postBookAppointment = (data) => {
    return axios.post('/api/patient-book-appointment', data)
}
const postVerifyBookAppointment = (data) => {
    return axios.post('/api/verify-book-appointment', data)
}

const getListPatient = (data) => {
    return axios.get(`/api/get-list-patient?doctorId=${data.doctorId}&date=${data.date}`)
}
const sendRemedy = (data) => {
    return axios.post('/api/send-remedy', data)
}

export {
    handleLoginApi,
    getAllUsers, createNewUserService,
    deleteUserService, editUserService,
    getAllCodeService, getTopDoctorHomeService,
    getAllDoctorService, saveDetailDoctorService,
    getDetailInforDoctor, saveBulkScheduleDoctor,
    getScheduleByDate, getExtraInforDoctorById,
    getProfileDoctorById, postBookAppointment,
    postVerifyBookAppointment, getListPatient,
    sendRemedy

}