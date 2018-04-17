import React from 'react';
import UserForm from '../UserForm/UserForm';
import * as routes from '../../constants/routes';
import { auth } from '../../firebase/index';

const PasswordForgetPage = (props) => {
  const formComponents = {
    email: true
  };

  return (
    <div>
      <h2>PasswordForgetPage</h2>
      <UserForm
        onSubmit={auth.doPasswordReset}
        formComponents={formComponents}
      />
    </div>
  );
};

export default PasswordForgetPage;
