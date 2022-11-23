import React, { Component } from 'react';
import './passwordchange.css';
import SignOutButton from '../SignOut';
import { withFirebase } from '../Firebase';


const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
      <section>
        <SignOutButton />
      <div className="main-forget">
      <form onSubmit={this.onSubmit}>
        <div>
         <i   class="fas fa-unlock-alt jh"></i>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
          className="newpass"
        />
        </div>
        <div>
         <i   class="fas fa-unlock-alt jh"></i>
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
          className="confirmpass"
        />
        </div>
        <button onClick={"/login/"} disabled={isInvalid} type="submit" className="restmypass">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
      </div>
      </section>
    );
  }
}

export default withFirebase(PasswordChangeForm);
