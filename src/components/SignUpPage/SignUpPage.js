import React from 'react';
import UserForm from '../UserForm/UserForm';
import * as routes from '../../constants/routes';
import { auth, db } from '../../firebase/index';
import { Link, withRouter } from 'react-router-dom';

class SignUpPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      redirectTarget: routes.HOME,
      formComponents: {
        userName: true,
        email: true,
        password: true,
        passwordConfirm: true
      },
      error: null
    };

    this.onSignUp = this.onSignUp.bind(this);
  }


  onSignUp = (data) => {
    auth.doCreateUser(data)
      .then(authUser => {
        db.doCreateUser(authUser.uid, data.userName, data.email)
          .then(() => {
            const redirect = this.state.redirectTarget;
            if(redirect) {
              this.props.history.push(redirect);
            }
          })
          .catch( error => {
            this.setState({ error: error })
          });
      })
      .catch( error => {
        this.setState({ error: error })
      });
  }

  render() {
    const { error } = this.state;

    return (
      <div>
        <h2>SignUpPage</h2>
        <UserForm
          onSubmitAction={this.onSignUp}
          formComponents={this.state.formComponents}
        />
        {error && <p style={{color: 'red'}}>{error.message}</p>}
        <Link to={routes.PW_FORGET}>Forgotten Password? Click here.</Link>
      </div>
    );
  }

}

export default withRouter(SignUpPage);
