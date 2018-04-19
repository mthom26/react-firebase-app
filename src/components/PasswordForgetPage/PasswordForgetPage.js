import React from 'react';
import UserForm from '../UserForm/UserForm';
import * as routes from '../../constants/routes';
import { auth } from '../../firebase/index';
import { withRouter } from 'react-router-dom';

class PasswordForgetPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formComponents: {
        email: true
      },
      error: null
    };

    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onPasswordForget = (data) => {
    auth.doPasswordReset(data)
      .then(() => {
        console.log('Reset Password');
      })
      .catch( error => {
        this.setState({ error: error })
      });
  }

  render() {
    return (
      <div>
        <h2>PasswordForgetPage</h2>
        <UserForm
          onSubmitAction={this.onPasswordForget}
          formComponents={this.state.formComponents}
        />
      </div>
    );
  }

}

export default withRouter(PasswordForgetPage);
