import React from 'react';
import UserForm from '../UserForm/UserForm';
import * as routes from '../../constants/routes';
import { auth } from '../../firebase/index';
import { Link } from 'react-router-dom';

const ProfilePage = (props) => {
  return (
    <div>
      <h2>Welcome back {props.authUser.email}</h2>
      <Link to={routes.PW_CHANGE}>Change Password.</Link>
    </div>
  );
};

export default ProfilePage;
