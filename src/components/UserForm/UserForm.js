/*---------------------------------------------------------/
    UserForm is dynamic, displaying inputs conditionally
    depending on the formComponents prop. It can also be
    passed an optional redirectTarget prop to redirect to
    another route.

    UPDATE: Need to pass secondary onSubmit function props
    to the form (such as databse operations). Will deal
    with this by checking in the UserForm onSubmit function
    for these and respond appropriately. It may have been
    easier to just use separate forms for each page :(
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

    // Check for additional prop functions here
    if(this.props.onSubmitSecondary) {
      this.props.onSubmit(data)
        .then(authUser => {
          this.props.onSubmitSecondary(authUser.uid, this.state.userName, this.state.email)
            .then(() => {
              const redirect = this.state.redirectTarget;
              this.setState(() => ({...INITIAL_STATE}));
              if(redirect) {
                this.props.history.push(redirect);
              }
            })
            .catch( error => {
              this.setState({error: error})
            });
        })
        .catch( error => {
          this.setState({error: error})
        });
    } else {
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
