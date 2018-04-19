import React from 'react';
import UserForm from '../UserForm/UserForm';
import * as routes from '../../constants/routes';
import { auth } from '../../firebase/index';
import { withRouter } from 'react-router-dom';

class PasswordChangePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      formComponents: {
        password: true,
        passwordConfirm: true
      },
      error: null
    };

    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onPasswordChange = (data) => {
    auth.doPasswordUpdate(data)
      .then(() => {
        console.log('Changed Password');
      })
      .catch( error => {
        this.setState({ error: error })
      });
  }

  render() {
    return (
      <div>
        <h2>PasswordChangePage</h2>
        <UserForm
          onSubmitAction={this.onPasswordChange}
          formComponents={this.state.formComponents}
        />
      </div>
    );
  }

}

export default withRouter(PasswordChangePage);
