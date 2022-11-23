import React,{Component} from 'react';
import './signout.css';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut} className="signout">
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);


