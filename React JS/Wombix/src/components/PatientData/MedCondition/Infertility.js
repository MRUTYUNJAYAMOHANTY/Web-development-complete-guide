import React, { PureComponent } from 'react';
import './Infertility.css';
import firebase from 'firebase';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';
import InferBlockOne from './InferBlocks/InferBlockOne';
import InferBlockTwo from './InferBlocks/InferBlocksTwo';
import InferBlockThree from './InferBlocks/InferBlockThree';
import InferBlockFour from './InferBlocks/InferBlockFour';
import InferBlockFive from './InferBlocks/InferBlockFive';
import InferBlockSix from './InferBlocks/InferBlockSix';
import InferBLockSeven from './InferBlocks/InferBlockSeven';
// import { Modal, Button } from 'antd';
// import { confirm } from 'Modal';
import ConfirmDialogue from "./ConfirmDialogue"
import "@reach/dialog/styles.css";

class Infertility extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            startDate: new Date(),
            select: "open",
            showMenu: false,
            open: false,
            firstname: '',
            lastname: '',
            email: '',
            number: '',
            genderchange: '',
            medicalcondition: '',
            treatment:'',
            infertilitytype:'',
            marriagedate:'',
            periodsregular:'',
            bleeding:'',
            cyclelength:'',
            G:'',
            P:'',
            L:'',
            A:'',
            RisksPP:'',
            RisksPPTwo:'',
            RisksMed:'',
            RisksMedTwo:'',
            RisksOthers:'',
            ti:'',
            iui:'',
            ivf:'',
            planofcare:'',
            GPLA:'',
            // InfraOpen: false,
            infercontent :{
                inferheading : 'medical condition details',
                // infertilitymainhead: 'infertility',
                // treatementhead: 'treatement',
                infertype: 'infertility type'
            }
        }
        this.closeModel = this.closeModel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTreatmentChange = this.handleTreatmentChange.bind(this);
        this.handleInferTypeChange = this.handleInferTypeChange.bind(this);
        this.handlePRChange = this.handlePRChange.bind(this);
        // this.handleDobChange = this.handleDobChange.bind(this);
        // this.handleChangeML = this.handleChangeML.bind(this);
    }
    componentDidMount() {
        const ref = firebase.firestore().collection('registerpatient').doc(this.props.match.params.id);
        ref.get().then((doc) => {
          if (doc.exists) {
            const board = doc.data();
            this.setState({
                key: doc.id,
                medicalcondition:board.medicalcondition,
                firstname:board.firstname,
                lastname:board.lastname,
                number:board.number,
                email:board.email,
                genderchange:board.genderchange,
                treatment: board.treatment,
                infertilitytype: board.infertilitytype,
                marriagedate: board.marriagedate,
                periodsregular:board.periodsregular,
                bleeding:board.bleeding,
                cyclelength:board.cyclelength,
                G: board.G,
                P: board.P,
                L: board.L,
                A: board.A,
                RisksPP:board.RisksPP,
                RisksPPTwo: board.RisksPPTwo,
                RisksMed: board.RisksMed,
                RisksMedTwo: board.RisksMedTwo,
                RisksOthers:board.RisksOthers,
                ti: board.ti,
                iui: board.iui,
                ivf: board.ivf,
                planofcare: board.planofcare,
            });
          } else {
            console.log("No such document!");
          }
        });
      }
      handleSubmit(event){
        // event.preventDefault();
        const { medicalcondition, firstname,lastname,email,genderchange, number, treatment, infertilitytype, marriagedate,periodsregular,bleeding, 
            cyclelength,G,P,L,A, RisksPP,RisksPPTwo,
            RisksMed, RisksMedTwo,RisksOthers, ti, iui, ivf, planofcare} = this.state;

        const updateRef = firebase.firestore().collection('registerpatient').doc(this.state.key);
        updateRef.set({
          medicalcondition,firstname,lastname,email,number,genderchange,treatment,infertilitytype,marriagedate,periodsregular,bleeding,cyclelength,
          G,P,L,A,RisksPP,RisksPPTwo,RisksMed,RisksMedTwo,RisksOthers,ti, iui, ivf, planofcare
        }).then((docRef) => {
          this.setState({
            key: '',
            firstname: '',
            lastname: '',
            email: '',
            number: '',
            genderchange: '',
            medicalcondition: '',
            treatment:'',
            infertilitytype:'',
            marriagedate:'',
            periodsregular:'',
            bleeding:'',
            cyclelength:'',
            G:'',
            P:'',
            L:'',
            A:'',
            RisksPP:'',
            RisksPPTwo:'',
            RisksMed:'',
            RisksMedTwo:'',
            RisksOthers:'',
            ti:'',
            iui:'',
            ivf:'',
            planofcare:'',
          });
          this.props.history.push("/infertilityShow/"+this.props.match.params.id)
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
        
    }
    closeModel(){
        this.setState({open: false})
    }
    handleTreatmentChange(event){
        this.setState({
            treatment: event.target.value,
        })
    }
    handleInferTypeChange(event){
        this.setState({
            infertilitytype : event.target.value, 
        })
    }
    handlePRChange(event){
        this.setState({
            periodsregular : event.target.value, 
        })
    }
    handleChangeBlocks = (e) => {
        const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
}
    // handleDobChange(event){
    //     this.setState({
    //         dob: event.target.value,
    //     })
    // }
    // handleChangeML(event){
    //    this.setState({
    //     marriagedate: event.target.value,
    //    })
    // }
    render() {
        return (
            <section className="MedConMainPage">
                <ConfirmDialogue>
                {confirm => (
                <form>
                 <Link to={`/patientdetail/${this.state.key}`} onClick={this.closeModel}>
                    <i className="fas fa-times-circle WrongIcon"></i></Link>
                <h1 className="MedHeading">{this.state.infercontent.inferheading}</h1>
                <Link to="/patientdetail/:id" onClick={confirm(this.handleSubmit)} type="submit">
                    <i className="fas fa-check-circle CorrectIcon"></i></Link>
                <div className="MedConContentPage">
                    <h2 className="ContentHeading">{this.state.medicalcondition}</h2>
                    <div className="BorderLine"></div>
                    <div className="AllBlocks" >
                    <InferBlockOne treatment={this.state.treatment}
                    handleTreatmentChange={this.handleTreatmentChange} />
                    <InferBlockTwo infertilitytype={this.state.infertilitytype}
                    handleInferTypeChange={this.handleInferTypeChange} />
                    <div className="BorderLine"></div>
                    <InferBlockThree 
                    // dob={this.state.dob}
                    // marriagedate={this.state.marriagedate}
                    // handleDobChange={this.handleDobChange}
                    // handleChangeML={this.handleChangeML} 
                    />
                    <div className="BorderLine"></div>
                    <InferBlockFour periodsregular={this.state.periodsregular} 
                    handlePRChange={this.handlePRChange} 
                    bleeding={this.state.bleeding}
                    cyclelength={this.state.cyclelength}
                    handleChangeBlocks={this.handleChangeBlocks}
                    />
                    <div className="BorderLine"></div>
                    <InferBlockFive
                    G={this.state.G}
                    P={this.state.P}
                    L={this.state.L}
                    A={this.state.A}
                    handleChangeBlocks={this.handleChangeBlocks}
                    />
                    <div className="BorderLine"></div>
                    <InferBlockSix 
                    RisksPP={this.state.RisksPP}
                    RisksPPTwo={this.state.RisksPPTwo}
                    RisksMed={this.state.RisksMed}
                    RisksMedTwo={this.state.RisksMedTwo}
                    RisksOthers={this.state.RisksOthers}
                    handleChangeBlocks={this.handleChangeBlocks}
                    />
                    <div className="BorderLine"></div>
                    <InferBLockSeven
                    ti={this.state.ti} 
                    iui={this.state.iui} 
                    ivf={this.state.ivf}
                    planofcare={this.state.planofcare} 
                    handleChangeBlocks={this.handleChangeBlocks}
                    />
                </div>
                </div>
                </form>
                )}
                </ConfirmDialogue>
            </section>
        )
    }
}

export default Infertility;