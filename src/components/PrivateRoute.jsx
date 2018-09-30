import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRout = ({
  user, component: Component, data, ...rest
}) => (
  <Route
    {...rest}
    render={
    props => (
      user ? <Component data={data} {...props} /> : <Redirect to="/login" />
    )
  }
  />
);

export default PrivateRout;
