
import actionTypes from './actionTypes';
import {
    getAllCodeService, createNewUserService, getAllUsers,
    deleteUserService, editUserService, getTopDoctorHomeService, getAllDoctorService, saveDetailDoctorService
} from '../../services/userService';
import { Toast, toast } from 'react-toastify';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getAllCodeService('GENDER');
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log(e)
        }
    }

}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData

})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED,

})

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData

})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAIDED,

})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData

})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAIDED,

})


export const saveUserSuccess = (userData) => ({
    type: actionTypes.CREATE_USER_SUCCESS,
    data: userData

})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAIDED,

})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {

            let res = await getAllCodeService('POSITION');
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log(e)
        }
    }
}

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {

            let res = await getAllCodeService('ROLE');
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log(e)
        }
    }
}

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {

            let res = await createNewUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Tạo mới người dùng thành công")
                dispatch(saveUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                dispatch(saveUserFailed());
            }
        } catch (e) {
            dispatch(saveUserFailed());
            console.log(e)
        }
    }
}

export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            // dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getAllUsers('ALL');
            // let res1 = await getTopDoctorHomeService(3)
            // console.log('chech get dotoctor', res1)
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse())); // sort mới nhất

            } else {
                toast.error("fetchAllUserStart erro")
                dispatch(fetchAllUsersFailed());
            }
        } catch (e) {
            dispatch(fetchAllUsersFailed());
            console.log(e)
        }
    }

}


export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})
export const fetchAllUsersFailed = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_FAIDED
})

export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {

            let res = await deleteUserService(userId);
            if (res && res.errCode === 0) {
                toast.error("Xoá người dùng thành công")
                dispatch(saveUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                toast.error("Tạo mới người dùng loi")
                dispatch(saveUserFailed());
            }
        } catch (e) {
            dispatch(saveUserFailed());
            console.log(e)
        }
    }
}

export const deleteUserSuccess = ({
    type: actionTypes.DELETE_USER_SUCCESS
})
export const deleteUserfaided = ({
    type: actionTypes.DELETE_USER_FAIDED
})


export const editUser = (data) => {   // qua qua redux
    return async (dispatch, getState) => {
        try {

            let res = await editUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Cập nhật người dùng thành công")
                dispatch(editUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                toast.error("Cập nhật mới người dùng loi")
                dispatch(editUserFailed());
            }
        } catch (e) {
            toast.error("Cập nhật mới người dùng loi")
            dispatch(editUserFailed());
            console.log(e)
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAIDED
})


export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {

            let res = await getTopDoctorHomeService('')
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data
                })
            }
            else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAIDED
                })
            }

        } catch (e) {
            console.log('FETCH_TOP_DOCTORS_FAIDED', e)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAIDED
            })

        }
    }



}


export const fetchAllDoctors = () => {
    return async (dispatch, getState) => {
        try {

            let res = await getAllDoctorService()
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDr: res.data
                })
            }
            else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAIDED
                })
            }

        } catch (e) {
            console.log('FETCH_ALL_DOCTORS_FAIDED', e)
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAIDED
            })

        }
    }



}


export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {

            let res = await saveDetailDoctorService(data)
            if (res && res.errCode === 0) {
                toast.success("Lưu thông tin bác sĩ thành công")
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                })
            }
            else {
                toast.error("Lưu thông tin bác sĩ không thành công", res)
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAIDED
                })
            }

        } catch (e) {
            console.log('SAVE_DETAIL_DOCTOR_FAIDED', e)
            toast.error("Lưu thông tin bác sĩ không thành công")
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAIDED
            })

        }
    }
}

