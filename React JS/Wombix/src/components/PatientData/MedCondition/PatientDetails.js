import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import MedCondition from './MedCondition';
import './PatientDetail.css';
import PatientDRoute from '../PatientDRoute/PatientDRoute';
import firebase from 'firebase';
import SignOutButton from '../../SignOut';


class PatientDetails extends PureComponent {
    constructor(props) {
        super(props)
        this.ref = firebase.firestore().collection('registerpatient');
        this.unsubscribe = null
        this.state = {
            // activePatient:[],
            board : {},
            loading: true,
            key:'',
            patientdetailHeading:'Patient details',
            showMenu: false,
        }
    }
    componentDidMount() {
        const ref = firebase.firestore().collection('registerpatient').doc(this.props.match.params.id);
        ref.get().then((doc) => {
          if (doc.exists) {
            this.setState({
              board: doc.data(),
              key: doc.id,
              loading: false
            });
          } else {
            console.log("No such document!");
          }
        });
      }
    
    render() {
        // const menuView = () =>{
        //     this.setState(prevState => ({
        //         showMenu:!prevState.showMenu
        //     }))
        // }
        // console.log(this.props)
        return (
            <section className="PatientSearch">
                 <div className="HeaderSection" >
                   <div className="HeaderContent" >
                    <div className="backArrowButton">
                        <Link to="/PatientList"><i className="fas fa-arrow-left backArrow"></i></Link>
                    </div>
                    <h3 className="PatientList">{this.state.patientdetailHeading}</h3>
                    <SignOutButton />
                    </div>
               </div>
            <div className="LoadingName" >
              {this.state.loading || !this.state.board ? <div className="Loading">Bro wait for a sec...</div> : null }
            <div>
            <div className="PatinetDetail">
            <div className="PatientInfo">
            
            <div className="PatientImgName">
            <img className="PatientImage" src={this.state.board.url || 'https://via.placeholder.com/150'}/>
            <span className="PatientNameBorder" >
            <h2 className="PatientName" >{this.state.board.firstname}&nbsp;{this.state.board.lastname}</h2>
            <div className="PatientCall">
                <span className="PhoneCallIcon"><i className="fas fa-phone PhoneIcon"></i></span></div>
            </span>
            </div>
           
            <div className="patientInfoRight">
            <div className="PDetailBlockOne">
            
            </div>
            {/* <div className="DropDownButtonPD">   */}
                    {/* <button onClick={menuView}><i className="fas fa-chevron-circle-down menuBotton"></i></button>
                    <div className={`MCDropDown ${this.state.showMenu ? 'ConditionView':'ConditionHide'}`}>
                    <h4 className="MedConToggleHead">select</h4>

                    <span className="MCNames" > 
                    <Link to={{pathname:`/pregnancyShow/${this.state.key}`,
                                state:{patientdetail: this.state.board.name}}}>{this.state.board.MedConName}</Link>
                    <i className="fas fa-trash deleteBotton"></i>
                    </span>
                    <div className="BorderLine"></div>
                    <span className="MCNames" >
                    <Link to={{pathname:`/infertilityShow/${this.state.key}`,
                                state:{patientdetail: this.state.board.name}}}>{this.state.board.MedConName}</Link>
                    <i className="fas fa-trash deleteBotton"></i>
                    </span>
                    </div> */}
                    {/* </div> */}
           {this.state.board.medicalcondition === "Pregnancy" ?
            
             <div className="PDetailBlockTwo"> 
             <h1 className="PatientConditionHeading">{this.state.board.medicalcondition}</h1>  
             <div className="BorderLine"></div>       
             <div className="GBT" >
             <span className="BlockTwoIcons"><i className="fas fa-baby gestationValue">
             </i>{this.state.board.gestation}</span>
             <span className="BlockTwoIcons"><i className="far fa-calendar-alt dob">
             </i>{this.state.board.dob}</span>
             <span className="BlockTwoIcons"><i className="fas fa-child fetus">
             </i>{this.state.board.fetus}</span>
          </div>
          <div className="AP">
             <span className="BlockTwoIconsTwo"><i className="far fa-calendar appointmentIcon"></i><p>13/12/2019</p></span>
             <div className="BlockTwoIconsTwo"><i className="fas fa-female GPLA"></i>
             <p>G<span className="GPLANumbers">{this.state.board.G}</span></p>
             <p>P<span className="GPLANumbers">{this.state.board.P}</span></p>
             <p>L<span className="GPLANumbers">{this.state.board.L}</span></p>
             <p>A<span className="GPLANumbers">{this.state.board.A}</span></p></div>
             <span className="BlockTwoIconsTwo" > 
             <Link className="MCNames" to={{pathname:`/pregnancyShow/${this.state.key}`,
             state:{patientdetail: this.state.board.firstname}}}>{this.state.board.medicalcondition}></Link>
             </span>
          </div>
          </div>
          : 
          this.state.board.medicalcondition === "Infertility" ? 
          <div>
            <h1 className="PatientConditionHeading">{this.state.board.medicalcondition}</h1>
            <div className="BorderLine"></div>  
           <div className="PDetailBlockTwo">         
             <div className="GBT" >
             <span className="BlockTwoIcons"><i className="fas fa-procedures"></i>
             {this.state.board.treatment}</span>
             <span className="BlockTwoIcons"><i className="fas fa-birthday-cake"></i>
             {this.state.board.dob}</span>
             <span className="BlockTwoIcons"><i className="fas fa-child fetus">
             </i>{this.state.board.infertilitytype}</span>
             <span className="BlockTwoIcons"><i className="fas fa-american-sign-language-interpreting"></i>
             {this.state.board.marriedlife}</span>
          </div>
          <div className="AP">
             <span className="BlockTwoIconsTwo" > 
             <Link className="MCNames" to={{pathname:`/infertilityShow/${this.state.key}`,
             state:{patientdetail: this.state.board.firstname}}}>{this.state.board.medicalcondition}></Link>
             </span>
          </div>
          </div>
          </div>
          : 
          <div>
          others
          </div>
      }
          <div className="BorderLine"></div>
                <div className="PDetailBlock3" >
                    <span className="Block3Content">
                    <Link className="MCNames" to={{pathname:`/patientinfoform/${this.state.key}`,
                    state:{patientdetail: this.state.board.firstname}}}> 
                    <i className="fas fa-info InfoIcon">Patient Info form</i></Link></span>
                </div>
                 </div>
            </div>
            <PatientDRoute />
            </div>
            </div>
            </div>
            </section>
        )
    }
}

export default PatientDetails;