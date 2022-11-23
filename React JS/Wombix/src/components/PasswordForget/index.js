import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import './forgetpassword.css';
import Popup from '../../components/popup.js';


const PasswordForgetPage = () => (
  <div>
    <h1 className="passwordforget">PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.state = { showPopup: false }; 
  }
  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
     }  
  onSubmit = event => {
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
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
    const { email, error } = this.state;
    const isInvalid = email === '';
    return (      
      <div className="main-forget">
      <form onSubmit={this.onSubmit}>
        <div>
        <i class="far fa-envelope mn" ></i> 
        <input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          className="emailforget"
        />
        </div>
        <div>
      
        </div>
       
        <button disabled={isInvalid} onClick={this.togglePopup.bind(this)}  type="submit" className="reset">
          Reset My Password
        </button>
        
{this.state.showPopup ?  
<Popup 
          text='We have sent a confirmation mail to your email now you can continue with signIn'  
          closePopup={this.togglePopup.bind(this)} 
/>  
: null  
}  
        {error && <p className="confirmationerror" >{error.message}</p>}
      </form>
      </div>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET} className="fogetpassword">Forgot Password?</Link>
  </p>
  
);

export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export { PasswordForgetForm, PasswordForgetLink };
