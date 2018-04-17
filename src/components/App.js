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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged( authUser => {
      if(authUser) {
        this.setState({ authUser: authUser });
      } else {
        this.setState({ authUser: null });
      }
    });
  }

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavBar authUser={this.state.authUser} />
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
                component={() => <ProfilePage authUser={this.state.authUser} />}
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
}

export default App;
