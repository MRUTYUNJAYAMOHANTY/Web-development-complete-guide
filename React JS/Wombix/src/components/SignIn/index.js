import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import './indexsignin.css';

const SignInPage = () => (
  <div>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  emailerror:'',
  passworderror:'',
  error: null,
};
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
    loading:true,
    INITIAL_STATE
    };
    
    
  }
  componentDidMount(){
    this.setState({
      loading: false,
    })
  }
  
  
  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {        
        this.setState({ INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });      
    event.preventDefault();
    const isValid = this.validate();
    if(isValid){
      
    }
  };


  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  validate = () => {
   
    let emailError= "";
    let passwordError = ""; 
     
   
    if(!this.state.email){
        emailError = "*Please enter email";
    }
    else if(!this.state.email.includes("@")){
        emailError = "'@' Missing Please Check";
    }
    else if(!this.state.email.includes(".")){
        emailError = "*'.' is missing please check";
    }
    if(emailError || passwordError ){
        this.setState({emailError,passwordError});
        return false;
    }
    if (!this.state.password) {  
      passwordError = "*Please enter your password.";
    }
    if (! this.state.password !== "undefined") {
      if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {  
        passwordError= "*Please enter secure and strong password.";
      }
    }
    return true;
}      

  render() {
    const { email, password, error,loading } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div>    
      <div className="head">
         <div  className="container">    
         <section className="contain">
      <form onSubmit={this.onSubmit}>
        <div>
        <i class="far fa-envelope mj" ></i> 
         <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          className="emailaddress"
        />
        <div className="errorMsg">{this.state.emailError}</div>
   
         {error && <p className="error">{error.message}</p>}
        </div>
        <div>
        <i  class="fas fa-unlock-alt mr"></i>
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          className="password1"
        />
        </div>
        <button disabled={isInvalid} type="submit" className="signin">
          Sign In
        </button>
        <ul className="ErrorMessages">
                     
                         
                          <li>{this.state.passwordError}</li>                         
                        </ul> 
                    
      
      </form>
      </section>
      </div>
      </div>
      </div>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };