/*---------------------------------------------------------/
    UserForm is dynamic, displaying inputs conditionally
    depending on the formComponents prop. It can also be
    passed an optional redirectTarget prop to redirect to
    another route.
/---------------------------------------------------------*/

import React from 'react';
import { withRouter } from 'react-router-dom';

const INITIAL_STATE = {
  userName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  error: null
};

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
      redirectTarget: props.redirectTarget || null
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onPasswordConfirmChange = this.onPasswordConfirmChange.bind(this);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const data = { ...this.state };

    this.props.onSubmit(data)
      .then(authUser => {
        const redirect = this.state.redirectTarget;
        this.setState(() => ({...INITIAL_STATE}));
        if(redirect) {
          this.props.history.push(redirect);
        }
      })
      .catch( error => {
        this.setState({error: error})
      });
  }

  onUserNameChange = (event) => {
    this.setState({userName: event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  onPasswordConfirmChange = (event) => {
    this.setState({passwordConfirm: event.target.value});
  }

  render() {
    const {
      userName,
      email,
      password,
      passwordConfirm,
      error
    } = this.state;

    const { formComponents } = this.props;

    return (
      <div>
        <form>
          {formComponents.userName &&
            <input
              value={userName}
              name="userName"
              placeholder="User Name"
              type="text"
              onChange={this.onUserNameChange}
            />}

          {formComponents.email &&
          <input
            value={email}
            name="email"
            placeholder="Email Address"
            type="text"
            onChange={this.onEmailChange}
          />}

          {formComponents.password &&
          <input
            value={password}
            name="password"
            placeholder="Password"
            type="password"
            onChange={this.onPasswordChange}
          />}

          {formComponents.passwordConfirm &&
          <input
            value={passwordConfirm}
            name="passwordConfirm"
            placeholder="Confirm Password"
            type="password"
            onChange={this.onPasswordConfirmChange}
          />}

          <button
            onClick={this.onSubmit}
          >
            Submit
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

export default withRouter(UserForm);
