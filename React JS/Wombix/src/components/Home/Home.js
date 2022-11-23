// import React from 'react';
// import Search from '../Search/Search'
// import Appointment from '../Appointment/Appointment';
// import PatientList from '../PatientList/PatientList';
// import RegisterPatient from '../../Containers/RegisterPatient/RegisterPatient'
// import { BrowserRouter,Route, NavLink, Switch } from "react-router-dom";
// import userPic from '../../assests/userpic.png'
// import './Home.css'


// export default class Home extends React.Component {
//     switchButton = () => {
//         console.log('is clicked...!')
//     }
//     constructor(){
//         super();
       
//         this.state = {
//               displayMenu: false,
//             };
       
//          this.showDropdownMenu = this.showDropdownMenu.bind(this);
//          this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
       
//        };
       
//        showDropdownMenu(event) {
//            event.preventDefault();
//            this.setState({ displayMenu: true }, () => {
//            document.addEventListener('click', this.hideDropdownMenu);
//            });
//          }
       
//          hideDropdownMenu() {
//            this.setState({ displayMenu: false }, () => {
//              document.removeEventListener('click', this.hideDropdownMenu);
//            });
       
//          }
//     render() {
//         return (  
//             <div className="menu-bar">
//       <BrowserRouter>
//         <div className="nav-bar">
//           <ul>
//             {/* <li><Link to="/"  className="Home">Home</Link></li> */}
//             <li><Link to="/registerPatient" exact className="Req-Patient">+ Request Patient</Link></li>
//             <li><Link to="message" className="envolop" ><i class="far fa-envelope" ></i></Link></li>
//             <li><Link to ="notification" className="message"><i class="far fa-bell"></i> </Link></li>
//             <li><Link to="profile"><div className="dropdown">
//             <div className="button" ><img onClick={this.showDropdownMenu} src={userPic} alt="user pic" className="userpic"></img> </div>
//                 { this.state.displayMenu ? (
//                             <ul className="ul1">
//                             <li className="li1"><a href="#Log Out">Log Out</a></li>
//                             </ul>
//                 ): (   null )  }
//             </div></Link></li>
//           </ul>
//         </div>
//         <div>
//             <Search />
//             <Appointment />
//             <PatientList />
//         </div>
//         {/* <Switch> */}
//             {/* <Route path="/" component={Home} exact/> */}
//             {/* <Route path="/registerPatient" exact component={RegisterPatient} /> */}
//         {/* </Switch> */}
//       </BrowserRouter>
//     </div>
//         );
//     }
// }