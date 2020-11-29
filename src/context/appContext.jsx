import { createContext, useReducer } from 'react';

// App Reducer
import { reducer } from '../reducers/AppReducer'

export const AppContext = createContext();

const initialState = {
    isLogin: false,
    users: [
        { id: 1, email: 'admin@test.com', password: '123456', isAdmin: true },
        { id: 2, email: 'user@test.com', password: '123456', isMember: true },
    ],
    currentUser: {},
    isModalOpen: false,
    modalMessage: null
}

export const AppContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {props.children}
        </AppContext.Provider>
    )
}