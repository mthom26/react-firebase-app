import React from 'react';
import { firebase } from '../firebase/index';
import AuthUserContext from '../contexts/AuthUserContext';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged( authUser => {
        if(authUser) {
          this.setState({ authUser: authUser });
        } else {
          this.setState({ authUser: null });
        }
      });
    }

    render() {
      const { authUser } = this.state;
      return (
        <AuthUserContext.Provider value={authUser}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  }

  return WithAuthentication;
};

export default withAuthentication;
