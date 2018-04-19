import React from 'react';
import UserForm from '../UserForm/UserForm';
import * as routes from '../../constants/routes';
import { auth } from '../../firebase/index';
import { Link, withRouter } from 'react-router-dom';

class SignInPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectTarget: routes.HOME,
      formComponents: {
        userName: false,
        email: true,
        password: true,
        passwordConfirm: false
      },
      error: null
    };

    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn = (data) => {
    auth.doSignIn(data)
      .then(authUser => {
        const redirect = this.state.redirectTarget;
        if(redirect) {
          this.props.history.push(redirect);
        }
      })
      .catch(error => {
        this.setState({ error: error })
      });
  }

  render() {
    return (
      <div>
        <h2>SignInPage</h2>
        <UserForm
          onSubmitAction={this.onSignIn}
          formComponents={this.state.formComponents}
        />
        <Link to={routes.PW_FORGET}>Forgotten Password? Click here.</Link>
      </div>
    );
  }

}

export default withRouter(SignInPage);
