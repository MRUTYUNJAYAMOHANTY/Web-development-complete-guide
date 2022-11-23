import React from 'react';
import { withAuthorization } from '../Session';
import Search from '../Search/Search'
import Appointment from '../Appointment/Appointment';
import PatientList from '../PatientList/PatientList';
import RegisterPatient from '../PatientData/RegisterPatient'
import { BrowserRouter,Route, NavLink, Switch } from "react-router-dom";
import userPic from '../../Assets/userpic.png'
import './Home.css';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';



// const HomePage = () => (
//   <div>
//     <h1>Home Page</h1>
//     <p>The Home Page is accessible by every signed in user.</p>
//   </div>
// );
class HomePage extends React.Component{
  switchButton = () => {
    console.log('is clicked...!')
}
constructor(){
    super();
   
    this.state = {
          displayMenu: false,
        };
   
     this.showDropdownMenu = this.showDropdownMenu.bind(this);
     this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
   
   };
   
   showDropdownMenu(event) {
       event.preventDefault();
       this.setState({ displayMenu: true }, () => {
       document.addEventListener('click', this.hideDropdownMenu);
       });
     }
   
     hideDropdownMenu() {
       this.setState({ displayMenu: false }, () => {
         document.removeEventListener('click', this.hideDropdownMenu);
       });
   
     }
     
     
  render(){
    return(

      <div className="menu-bar">
     
        <div className="nav-bar">
       
          <ul>
         
            {/* <li><Link to="/"  className="Home">Home</Link></li> */}
            <li><Link to={ROUTES.REGISTERPATIENT} exact className="Req-Patient">+ Request Patient</Link></li>
            <li><Link to={ROUTES.MESSAGE} className="envolop" ><i class="far fa-envelope" ></i></Link></li>
            <li><Link to ={ROUTES.NOTIFICATION} className="message"><i class="far fa-bell"></i> </Link></li>
      {/* <Link to={ROUTES.ACCOUNT} className="account">Reset password</Link> */}
     
   

            {/* <li>
      <Link to={ROUTES.ACCOUNT} className="account">Account</Link>
    </li> */} <li>
            <div className="button" ><img onClick={this.showDropdownMenu} src={userPic} alt="user pic" className="userpic"></img> </div>
                { this.state.displayMenu ? (
                            <ul className="ul1">
                            {/* <li className="li1"><a href="#Log Out">Log Out</a></li> */}
                            <SignOutButton />
                            <Link to={ROUTES.ACCOUNT} className="account">Reset password</Link>
                            </ul>
                ): (   null )  }
            </li>
          </ul>
         
        </div>
        <div>
            <Search />
            <Appointment />
            <PatientList />
        </div>
        {/* <Switch> */}
            {/* <Route path="/" component={Home} exact/> */}
            {/* <Route path="/registerPatient" exact component={RegisterPatient} /> */}
        {/* </Switch> */}
      
    </div>
    )
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
