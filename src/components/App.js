import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { firebase } from '../firebase/index';
import './App.css';
import NavBar from './NavBar/NavBar';
import LandingPage from './LandingPage/LandingPage';
import SignUpPage from './SignUpPage/SignUpPage';
import SignInPage from './SignInPage/SignInPage';
import PasswordForgetPage from './PasswordForgetPage/PasswordForgetPage';
import PasswordChangePage from './PasswordChangePage/PasswordChangePage';
import HomePage from './HomePage/HomePage';
import ProfilePage from './ProfilePage/ProfilePage';
import * as routes from '../constants/routes';
import withAuthentication from '../hocs/withAuthentication';

const App = () => {
  return (
    <div className="app">
      <Router>
        <div>
          <NavBar />
          <div className="container">
            <Route
              exact path={routes.LANDING}
              component={() => <LandingPage />}
            />
            <Route
              exact path={routes.SIGN_IN}
              component={() => <SignInPage />}
            />
            <Route
              exact path={routes.SIGN_UP}
              component={() => <SignUpPage />}
            />
            <Route
              exact path={routes.HOME}
              component={() => <HomePage />}
            />
            <Route
              exact path={routes.PROFILE}
              component={() => <ProfilePage />}
            />
            <Route
              exact path={routes.PW_FORGET}
              component={() => <PasswordForgetPage />}
            />
            <Route
              exact path={routes.PW_CHANGE}
              component={() => <PasswordChangePage />}
            />
          </div>
        </div>
      </Router>
    </div>
  );
}






export default withAuthentication(App);
