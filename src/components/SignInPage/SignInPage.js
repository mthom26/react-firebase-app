import React from 'react';
import UserForm from '../UserForm/UserForm';
import * as routes from '../../constants/routes';
import { auth } from '../../firebase/index';
import { Link } from 'react-router-dom';

const SignInPage = (props) => {
  const formComponents = {
    userName: false,
    email: true,
    password: true,
    passwordConfirm: false,
  };

  return (
    <div>
      <h2>SignInPage</h2>
      <UserForm
        onSubmit={auth.doSignIn}
        formComponents={formComponents}
        redirectTarget={routes.HOME}
      />
      <Link to={routes.PW_FORGET}>Forgotten Password? Click here.</Link>
    </div>

  );
};

export default SignInPage;
