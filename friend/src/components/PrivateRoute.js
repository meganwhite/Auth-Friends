import React from 'react';
import { Route } from 'react-router';


const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default PrivateRoute;
