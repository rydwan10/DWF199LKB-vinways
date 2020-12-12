import { useContext } from "react";
import { AppContext } from "../../context/appContext";

import { Route, Redirect } from "react-router-dom";
import Loading from "../Loading/Loading";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state, dispatch] = useContext(AppContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        state.isLoading ? (
          // make loading animation here
          // <h3>Loading...</h3>
          <Loading />
        ) : state.isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
