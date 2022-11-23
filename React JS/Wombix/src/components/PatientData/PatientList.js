import React, {PureComponent} from 'react';
import {BrowserRouter,Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './PatientList.css';
import phoneIcon from '../../Assets/mobile_icn.png';
import firebase from 'firebase';
import SignOutButton from '../SignOut';

class PatientList extends PureComponent{
    constructor(props){
        super(props);
        this.ref = firebase.firestore().collection('registerpatient');
        this.unsubscribe = null;
        this.state={
            search: '',
            patientlistHeading: "Patient list",
            boards: []
        }
        this.searchHandler = this.searchHandler.bind(this);
    }
    onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
          const {firstname,lastname,email,number,genderchange,medicalcondition,url, image } = doc.data();
          boards.push({
            key: doc.id,
            doc, // DocumentSnapshot
            firstname,
            lastname,
            email,
            number,
            genderchange,
            medicalcondition,
            url,
            image
          });
        });
        this.setState({
          boards
       });
      }
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      }
    searchHandler(event){
        this.setState({
            search:event.target.value
        })
    }
    render(){
        const boards = this.state.boards.filter(
            (board) => {
                return board.firstname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )
        return(
            <section className="PatientSearch">
                <div className="HeaderSection" >
                   <div className="HeaderContent" >
                    <Link to={ROUTES.REGISTERPATIENT} className="backArrowButton"><i className="fas fa-arrow-left backArrow"></i></Link>
                    <h3 className="PatientList">{this.state.patientlistHeading}</h3>
                    <SignOutButton />
                    </div>
               </div>
                <form className="searchBar">
                <div className="searchInput">
                    <i className="fas fa-search searchIcon"></i>
                    <input 
                    onChange={this.searchHandler} 
                    value={this.state.search} 
                    placeholder="Patient name (or) Mobile (or) UHID"
                    className="searchInputBox" type="text" name="patientName"/>
                    <button className="searchButton" type="submit">
                    <i className="fas fa-search searchButtonIcon"></i>
                </button>
                </div>
                </form>
                <div className="patientInfoList" >
                 {boards.map(board =>
                         <div key={board.key}>
                            <Link className="patientList" to={`/patientdetail/${board.key}`}>
                            <img className="patientImage" src={board.url || 'https://via.placeholder.com/75'} 
                            alt={board.url} />
                            <h3 className="patientName" name="name">{board.firstname}&nbsp;{board.lastname}</h3>
                            <img src={phoneIcon} className="phoneIcon" alt="phoneIcon"/>
                            <h4 className="patientNumber">{board.number}</h4>
                            </Link>
                         </div>
                  )}
                 </div>
            </section>
        )
    }
}
export default PatientList;