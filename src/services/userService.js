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

export {
    handleLoginApi,
    getAllUsers, createNewUserService,
    deleteUserService, editUserService,
    getAllCodeService, getTopDoctorHomeService,
    getAllDoctorService, saveDetailDoctorService,
    getDetailInforDoctor,

}