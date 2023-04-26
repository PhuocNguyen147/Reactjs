const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',

    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //admin
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAIDED: 'FETCH_GENDER_FAIDED',

    FETCH_POSITION_SUCCESS: 'FETCH_POSITION_SUCCESS',
    FETCH_POSITION_FAIDED: 'FETCH_POSITION_FAIDED',

    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAIDED: 'FETCH_ROLE_FAIDED',

    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAIDED: 'CREATE_USER_FAIDED',

    EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
    EDIT_USER_FAIDED: 'EDIT_USER_FAIDED',

    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    DELETE_USER_FAIDED: 'DELETE_USER_FAIDED',

    FETCH_ALL_USERS_SUCCESS: 'FETCH_ALL_USERS_SUCCESS',
    FETCH_ALL_USERS_FAIDED: 'FETCH_ALL_USERS_FAIDED',

    FETCH_TOP_DOCTORS_SUCCESS: 'FETCH_TOP_DOCTORS_SUCCESS',
    FETCH_TOP_DOCTORS_FAIDED: 'FETCH_TOP_DOCTORS_FAIDED',

    FETCH_ALL_DOCTORS_SUCCESS: 'FETCH_ALL_DOCTORS_SUCCESS',
    FETCH_ALL_DOCTORS_FAIDED: 'FETCH_ALL_DOCTORS_FAIDED',

    SAVE_DETAIL_DOCTOR_SUCCESS: 'SAVE_DETAIL_DOCTOR_SUCCESS',
    SAVE_DETAIL_DOCTOR_FAIDED: 'SAVE_DETAIL_DOCTOR_FAIDED',

})

export default actionTypes;