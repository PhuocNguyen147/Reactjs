import axios from '../axios'

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
export {
    handleLoginApi,
    getAllUsers, createNewUserService, deleteUserService, editUserService

}