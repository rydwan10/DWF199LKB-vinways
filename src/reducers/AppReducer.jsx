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
        case constant.REGISTER:
            const { newUser } = action.payload;
            return {
                ...state,
                users: [...state.users, newUser],
                isLogin: true,
                currentUser: { ...action.payload.newUser }
            }
        case constant.ADD_TO_PLAYLIST:
            return {
                ...state,
                playlist: [...state.playlist, action.payload.music]
            }
        default:
            throw new Error("Reaching default in switch case")
    }
}