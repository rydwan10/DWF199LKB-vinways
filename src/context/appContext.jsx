import { createContext, useReducer } from 'react';

// App Reducer
import { reducer } from '../reducers/AppReducer'

// music
import kingslayer from '../assets/musics/kingslayer.mp3'
import deardiary from '../assets/musics/deardiary.mp3'

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
    modalMessage: null,
    playlist: [
        // { id: 1, name: 'kingslayer', src: kingslayer },
        // { id: 2, name: 'deardiary', src: deardiary },
    ]
}

export const AppContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {props.children}
        </AppContext.Provider>
    )
}