import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    position: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log('action', action)
            return {
                ...state,

            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState = { ...state };
            copyState.genders = action.data;
            console.log('success', action)
            return {
                ...copyState,

            }
        case actionTypes.FETCH_GENDER_FAIDED:
            console.log('fail', action)
            return {
                ...state,

            }

        default:
            return state;
    }
}

export default adminReducer;