import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import './indexsignup.css';
import Popupsignin from '../../components/popupsignin.js';
const SignUpPage = () => (
  <div>
    {/* <h1>SignUp</h1> */}
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  usernameError:'',
  emailError:'',
  passwordOneError:'',
  passwordTwoError:'',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
       };

    this.state = { ...INITIAL_STATE };
    this.state = { showPopup: false};
  }

  onSubmit = event => {
    this.setState({ loading: true });
    event.preventDefault();
    const { username, email, passwordOne} = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          })
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
      })
      .catch(error => {
        this.setState({ error });
      });
    
      this.setState({     
        loading: false,
      });
      const isValid = this.validate();
      if(isValid){
        
      }

  };
  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
     }  
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  validate = () => {
   
    let emailError= "";
    let passwordOneError = ""; 
    let passwordTwoError = "";
    let usernameError = "";
     
   
    if(!this.state.email){
        emailError = "*Please enter email";
    }
    else if(!this.state.email.includes("@")){
        emailError = "'@' Missing Please Check";
    }
    else if(!this.state.email.includes(".")){
        emailError = "*'.' is missing please check";
    }
    if(emailError || passwordOneError ){
        this.setState({emailError,passwordOneError});
        return false;
    }
    if (!this.state.passwordOne) {  
      passwordOneError = "*Please enter your password.";
    }
    if (! this.state.passwordOne !== "undefined") {
      if (!this.state.passwordOne.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {  
        passwordOneError= "*Please enter secure and strong password.";
      }
    }
    return true;
}      

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      loading
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
     
      <div>
       
         <div>
      {loading && <div>Loading ...</div>}
      <section className="background">
    
     <div className="container">
    {/* <h1>Sign up</h1> */}
    <div className="gray">
    
      <form onSubmit={this.onSubmit}>
      <div className="input-field1">  
        <div>
        <i class="fas fa-user-circle mk"></i>
     
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
          className="username"
        />
        </div>
        <div>
        <i class="far fa-user rj"></i> 
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          className="emailsign"
        /></div>
         <div className="errorMsg">{this.state.emailError}</div>
         {error && <p>{error.message}</p>}
        <div>
        <i   class="fas fa-unlock-alt jh"></i>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          className="password"
        /></div>
        <div>
        <i   class="fas fa-unlock-alt jh"></i>
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
          className="password2"
        />
        </div>
        <button disabled={isInvalid}  onClick={this.togglePopup.bind(this)}  className="enter"  type="submit">
          Sign Up
        </button>
        {this.state.showPopup ?  
<Popupsignin
          text='Before going to home page first signin'  
          closePopup={this.togglePopup.bind(this)} 
/>  
: null  
}  
        {error && <p className="confirmationerror" >{error.message}</p>}
     
     
        </div>
      </form>
      </div>
      </div>
      </section>

      </div>
      <div className="goback">
        <span className="continue">If you have an account continue with  
      <Link to={ROUTES.SIGN_IN} className="signins">  Sign In</Link> </span>
      </div>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p className="signup">
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };
