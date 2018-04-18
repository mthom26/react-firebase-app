import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import SignOut from '../SignOut/SignOut';
import './NavBar.css';
import AuthUserContext from '../../contexts/AuthUserContext';

const NavBar = () => {

  return (
    <AuthUserContext>
      {authUser => {
        return (
          <div className="navbar">
            <div className="nav-links">
              {!authUser && <Link className="nav-button" to={routes.SIGN_IN}>Sign In</Link>}
              {!authUser && <Link className="nav-button" to={routes.SIGN_UP}>Sign Up</Link>}
              {authUser && <Link className="nav-button" to={routes.HOME}>Home</Link>}
              {authUser && <Link className="nav-button" to={routes.PROFILE}>Profile</Link>}
              {authUser && <SignOut passedClass={"nav-button"} >Sign Out</SignOut>}
            </div>
          </div>
        );
      }}

    </AuthUserContext>
  );
};

export default NavBar;
