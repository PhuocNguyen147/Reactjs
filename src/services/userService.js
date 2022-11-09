import axios from '../axios'

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('api/login', { email: userEmail, password: userPassword });
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/getAllUsers?id=${inputId} `) // sử dụng với method get
    // template string ES6
}
export {
    handleLoginApi, getAllUsers

}