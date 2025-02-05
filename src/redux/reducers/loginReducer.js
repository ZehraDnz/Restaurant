import ActionTypes from "../actionTypes";
const initialState={
    isLoginOpen:false,
};
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.OPEN_LOGIN:
            return { ...state, isLoginOpen: true };
        case ActionTypes.CLOSE_LOGIN:
            return { ...state, isLoginOpen: false };
        default:
            return state;
    }
};

export default loginReducer;