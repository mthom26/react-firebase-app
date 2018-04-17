import React from 'react';
// import * as routes from '../../constants/routes';
import { auth } from '../../firebase/index';

const SignOut = (props) => {
  return (
    <div
      className={props.passedClass}
      onClick={auth.doSignOut}
    >
      {props.children}
    </div>
  );
};

export default SignOut;
