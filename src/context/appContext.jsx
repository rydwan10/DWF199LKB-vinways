import { createContext, useReducer } from 'react';

// App Reducer
import { reducer } from '../reducers/AppReducer'

export const AppContext = createContext();

const initialState = {
    isLogin: false,
    users: [
        { id: 1, email: 'admin@test.com', password: '123456', isAdmin: true },
        { id: 2, email: 'member@test.com', password: '123456', isMember: true },
        { id: 3, email: 'notmember@test.com', password: '123456', isMember: false },
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