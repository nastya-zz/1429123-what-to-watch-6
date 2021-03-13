import React from "react";
import {Route, Redirect} from 'react-router-dom';
import {AuthorizationStatus} from '../../constants/common';
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

const PrivateRoute = ({render, path, exact}) => {
  const authorizationStatus = useSelector((state) => state.authorizationStatus);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
