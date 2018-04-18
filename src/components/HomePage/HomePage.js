import React from 'react';
import withAuthorization from '../../hocs/withAuthorization';
import AuthUserContext from '../../contexts/AuthUserContext';

const HomePage = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser => {
        return (
          <div>
            <h2>HomePage</h2>
            <p>Welcome back {authUser.email}</p>
          </div>
        );
      }}
    </AuthUserContext.Consumer>
  );
};

const authCondition = (authUser) => {
  if(authUser) {
    return true;
  } else {
    return false;
  }
};

export default withAuthorization(authCondition)(HomePage);
