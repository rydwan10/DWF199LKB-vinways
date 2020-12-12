import {
  LOGIN,
  LOGOUT,
  SET_MODAL,
  REGISTER,
  ADD_TO_PLAYLIST,
  USER_LOADED,
  AUTH_ERROR,
  SET_ALL_TRANSACTIONS,
  SET_LOADING,
} from "../constant/actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case LOGIN:
      localStorage.setItem("token", action.payload.user.token);
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        user: { ...action.payload.user },
      };
    case USER_LOADED:
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        user: { ...action.payload.user },
      };
    case AUTH_ERROR:
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        user: [],
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        user: [],
      };

    case SET_MODAL:
      return {
        ...state,
        isModalOpen: action.payload.isOpen,
        modalMessage: action.payload.message,
      };
    case REGISTER:
      localStorage.setItem("token", action.payload.user.token);
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        user: { ...action.payload.user },
      };
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        playlist: [...state.playlist, action.payload.music],
      };
    case SET_ALL_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload.transactions,
      };
    default:
      throw new Error("Reaching default in switch case");
  }
};
