import React from 'react';
import UserForm from '../UserForm/UserForm';
import * as routes from '../../constants/routes';
import { auth, db } from '../../firebase/index';
import { Link } from 'react-router-dom';

const SignUpPage = (props) => {

  const formComponents = {
    userName: true,
    email: true,
    password: true,
    passwordConfirm: true,
  };

  return (
    <div>
      <h2>SignUpPage</h2>
      <UserForm
        onSubmit={auth.doCreateUser}
        onSubmitSecondary={db.doCreateUser}
        formComponents={formComponents}
        redirectTarget={routes.HOME}
      />
      <Link to={routes.PW_FORGET}>Forgotten Password? Click here.</Link>
    </div>
  );
};

export default SignUpPage;
