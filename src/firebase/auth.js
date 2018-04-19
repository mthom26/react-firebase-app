import { auth } from './firebase';

/*
  Todo - check the data object has the required fields for each
  function before returning the auth function
*/

// Sign Up
export const doCreateUser = (data) => {
  return auth.createUserWithEmailAndPassword(data.email, data.password);
};

// Sign In
export const doSignIn = (data) => {
  return auth.signInWithEmailAndPassword(data.email, data.password);
};

// Sign Out
export const doSignOut = () => {
  return auth.signOut();
};

// Password Reset
export const doPasswordReset = (data) => {
  return auth.sendPasswordResetEmail(data.email);
};

// Password Change
export const doPasswordUpdate = (data) => {
  return auth.currentUser.updatePassword(data.password);
};
