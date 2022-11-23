import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';
import  './navigation.css';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div  className="nav">
  {/* <ul> */}
    {/* <li>
      <Link to={ROUTES.LANDING} className="lands" >Landing</Link>
    </li> */}
    {/* <li>
      <Link to={ROUTES.HOME} className="home">Home</Link>
    </li>
     */}

    {/* <li> */}
      {/* <Link to={ROUTES.ACCOUNT} className="account">Reset password</Link> */}
    {/* </li> */}
    {/* <li>
      <Link to={ROUTES.ADMIN} className="admin">Admin</Link>
    </li> */}
    {/* <li> */}
      {/* <SignOutButton /> */}
    {/* </li>
  </ul> */}
  </div>
);

const NavigationNonAuth = () => (
<div>
  {/* <ul> */}
    {/* <li>
      <Link to={ROUTES.LANDING} className="landing">Landing</Link>
    </li> */}
    {/* <li>
      <Link to={ROUTES.SIGN_IN} className="signinbtn">Sign In</Link>
    </li> */}
  {/* </ul> */}
  </div>
);

export default Navigation;
