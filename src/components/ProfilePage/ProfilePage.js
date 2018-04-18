import React from 'react';
import UserForm from '../UserForm/UserForm';
import * as routes from '../../constants/routes';
import { auth } from '../../firebase/index';
import { Link } from 'react-router-dom';
import AuthUserContext from '../../contexts/AuthUserContext';

const ProfilePage = () => {
  return (
    <AuthUserContext>
      {authUser => {
        return (
          <div>
            <h2>Welcome back {authUser.email}</h2>
            <Link to={routes.PW_CHANGE}>Change Password.</Link>
          </div>
        );
      }}
    </AuthUserContext>
    
  );
};

export default ProfilePage;
