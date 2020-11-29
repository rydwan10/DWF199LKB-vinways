import { useContext } from 'react'
import { AppContext } from '../../context/appContext';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [state, dispatch] = useContext(AppContext);

    return (
        <Route {...rest} render={(props) => state.isLogin ? <Component {...props} /> : <Redirect to="login" />} />
    )
}

export default PrivateRoute