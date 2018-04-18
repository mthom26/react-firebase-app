import React from 'react';
import UserForm from '../UserForm/UserForm';
import * as routes from '../../constants/routes';
import { auth } from '../../firebase/index';
import { Link } from 'react-router-dom';
import AuthUserContext from '../../contexts/AuthUserContext';
import withAuthorization from '../../hocs/withAuthorization';

const ProfilePage = () => {
  return (
    <AuthUserContext>
      {authUser => {
        return (
          <div>
            <h2>Profile Page for {authUser.email}</h2>
            <Link to={routes.PW_CHANGE}>Change Password.</Link>
          </div>
        );
      }}
    </AuthUserContext>

  );
};

const authCondition = (authUser) => {
  if(authUser) {
    return true;
  } else {
    return false;
  }
};

export default withAuthorization(authCondition)(ProfilePage);
