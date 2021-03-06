import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={
      props => (
        !loggedIn ? <Component {...props} /> : <Redirect to="/" />
      )
    }
  />
);

const Protected = ({ component: Component, exact, path, loggedIn }) => (
  <Route 
    path={path} 
    exact={exact} 
    render={
      props => (
        loggedIn ? <Component {...props} /> : <Redirect to="/login" />
      )
    } 
  />
)

const msp = state => ({
  loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = connect(msp)(Protected)