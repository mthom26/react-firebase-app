import React from 'react';
import UserForm from '../UserForm/UserForm';
import * as routes from '../../constants/routes';
import { auth } from '../../firebase/index';

const PasswordChangePage = (props) => {
  const formComponents = {
    password: true,
    passwordConfirm: true
  };

  return (
    <div>
      <h2>PasswordChangePage</h2>
      <UserForm
        onSubmit={auth.doPasswordUpdate}
        formComponents={formComponents}
      />
    </div>
  );
};

export default PasswordChangePage;
