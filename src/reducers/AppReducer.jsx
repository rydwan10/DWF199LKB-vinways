import * as constant from '../constant/actionTypes';

export const reducer = (state, action) => {
    switch (action.type) {
        case constant.LOGIN:
            return {
                ...state,
                isLogin: true,
                currentUser: { ...action.payload.currentUser }
            }
        case constant.LOGOUT:
            return {
                ...state,
                isLogin: false,
                currentUser: {},
            }
        case constant.SET_MODAL:
            return {
                ...state,
                isModalOpen: action.payload.isOpen,
                modalMessage: action.payload.message
            }
        default:
            throw new Error("Reaching default in switch case")
    }
}