import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import MedCondition from './MedCondition';
import './PatientDetail.css';
import PatientDRoute from '../PatientDRoute/PatientDRoute';
import firebase from '../../Firebase/firebase';

class PatientInfertlityDetail extends PureComponent {
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
        const menuView = () =>{
            this.setState(prevState => ({
                showMenu:!prevState.showMenu
            }))
        }
        // console.log(this.props)
        return (
            <section className="PatientSearch">
                manoj
                 <div className="HeaderSection" >
                   <div className="HeaderContent" >
                    <div className="backArrowButton">
                        <Link to="/PatientList"><i className="fas fa-arrow-left backArrow"></i></Link>
                    </div>
                    <h3 className="PatientList">{this.state.patientdetailHeading}</h3>
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
            <h2 className="PatientName" >{this.state.board.name}</h2>
            <div className="PatientCall">
                <span className="PhoneCallIcon"><i className="fas fa-phone PhoneIcon"></i></span></div>
            </span>
            </div>
           
            <div className="patientInfoRight">
                <div className="PDetailBlockOne" >
                <h1 className="PatientConditionHeading">{this.state.board.MedConName}</h1>
                {/* <MedCondition /> */}
            </div>
            <div className="DropDownButtonPD">  
                    <button onClick={menuView}><i className="fas fa-chevron-circle-down menuBotton"></i></button>
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
                    </div>
                    </div>
            <div className="BorderLine"></div> 
                    <div className="PDetailBlockTwo">         
                    <div className="GBT" >
                    <span className="BlockTwoIcons"><i className="fas fa-baby gestationValue">
                    </i>{this.state.board.gestation}</span>
                    <span className="BlockTwoIcons"><i className="far fa-calendar-alt dob">
                    {this.state.board.dob}</i></span>
                    <span className="BlockTwoIcons"><i className="fas fa-child fetus">
                    {this.state.board.fetus}</i></span>
                 </div>
                 <div className="AP">
                    <span className="BlockTwoIcons"><i className="far fa-calendar"></i></span>
                    <span className="BlockTwoIcons"><i className="fas fa-female GPLA">
                    <p>G{this.state.board.G}</p><p>P{this.state.board.P}</p>
                    <p>L{this.state.board.L}</p><p>A{this.state.board.A}</p></i></span>
                 </div>
                 </div>
                <div className="BorderLine"></div>
                <div className="PDetailBlock3" >
                    <span className="Block3Content"><i className="fas fa-info InfoIcon">Patient information form</i></span>
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

export default PatientInfertlityDetail;