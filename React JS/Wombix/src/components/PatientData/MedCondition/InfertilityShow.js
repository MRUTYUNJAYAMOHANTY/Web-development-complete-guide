import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import './InfertilityShow.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import ConfirmDialogueEdit from "./ConfirmDialogueEdit";
// import "@reach/dialog/styles.css";

class PregnancyShow extends PureComponent {
    constructor(props) {
        super(props)
        this.ref = firebase.firestore().collection('registerpatient');
        this.unsubscribe = null
        this.state = {
          startDate: new Date(),
          // select:"editDialogueOpen",
          board : {},
          key:'',
          loading: true,
          popupheading:'medical condition',
          open:false,
          // alert: false
        }
        this.closeModel=this.closeModel.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.editAlertFunction=this.editAlertFunction.bind(this);
    }
    editAlertFunction(){
      alert("dit")
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

    closeModel(){
        this.setState({open: false})
    }
    handleChange(date){
      this.setState({
          startDate: date, 
      });
    };
    

    render() {
        // console.log(this.props)
        return (
            <section  className="MedicalCondition">
              <div className="PregnencyCon" >
                <form className="MedConMainPage" ref="MCform" >
                <Link to={`/patientdetail/${this.state.key}`} onClick={this.closeModel}>
                    <i className="fas fa-times-circle WrongIcon"></i></Link>
                <h1 className="MedHeading">{this.state.popupheading}</h1>
                <Link to={`/infertilityEdit/${this.state.key}`}>
                  <i className="fas fa-pen CorrectIcon"></i>
                </Link>
                <div className="MedConContentPage">
                <div className="LoadingName" >
                {this.state.loading || !this.state.board ? <div className="Loading">Bro wait for a sec...</div> : null }
                <div>
                <h2 className="ContentHeading">{this.state.board.medicalcondition}</h2>
                </div>
                <div className="BorderLine"></div>
                <div className="FirstBlock">
                <div className="TreatmentBlock">
                  <label className="TreatmentName">Treatment</label>
                  <h3 className="outputValues">{this.state.board.treatment}</h3>
                </div>
                <div className="BorderRightLine"></div>
                <div className="TreatmentBlock">
                  <label className="TreatmentName">Infertility type</label>
                  <h3 className="outputValues">{this.state.board.infertilitytype}</h3>
                </div>
                </div>
                <div className="BorderLine"></div>
                <div className="FirstBlock">
                <div className="DMBlock">
                <label className="TreatmentName">DOB</label>
                <h3 className="outputValues">{this.state.board.dob}</h3>
                </div>
                <div className="BorderRightLine"></div>
                <div className="DMBlock">
                <label className="TreatmentName">Marriage date</label>
                <h3 className="outputValues">{this.state.board.marriagedate}</h3>
                </div>
                </div>
                <div className="BorderLine"></div>
                <div className="FirstBlock">
                <div className="PBCBlock">
                <label className="TreatmentName">periods regular</label>
                <h3 className="outputValues">{this.state.board.periodsregular}</h3>
                </div>
                <div className="BorderRightLine"></div>
                <div className="PBCBlockTwo">
                <label className="TreatmentName">bleeding</label>
                <h3 className="outputValues">{this.state.board.bleeding}</h3>
                </div>
                <div className="BorderRightLine"></div>
                <div className="PBCBlockThree">
                <label className="TreatmentName">cycle length</label>
                <h3 className="outputValues">{this.state.board.cyclelength}</h3>
                </div>
                </div>
                <div className="BorderLine"></div>
                <div className="FirstBlock">
                <h3 className="InferGPLAValue">G<p className="POValues">{this.state.board.G}</p></h3>
                <h3 className="InferGPLAValue">P<p className="POValues">{this.state.board.P}</p></h3>
                <h3 className="InferGPLAValue">L<p className="POValues">{this.state.board.L}</p></h3>
                <h3 className="InferGPLAValue">A<p className="POValues">{this.state.board.A}</p></h3>
                </div>
                <div className="BorderLine"></div>
                <div className="FirstBlock">
                {/* <h3 className="TreatmentName">Risks</h3> */}
                <div className="RisksBlock">
                  <label className="TreatmentName">past pregnencies</label>
                  <h3 className="outputValues">{this.state.board.RisksPP}</h3>
                  <h3 className="outputValues">{this.state.board.RisksPPTwo}</h3>
                </div>
                <div className="BorderRightLine"></div>
                <div className="RisksBlock">
                  <label className="TreatmentName">medical</label>
                  <h3 className="outputValues">{this.state.board.RisksMed}</h3>
                  <h3 className="outputValues">{this.state.board.RisksMedTwo}</h3>
                </div>
                </div>
                <div className="planofcareBlock">
                  <label className="TreatmentName">Others</label>
                  <h3 className="RiskOthersValues">{this.state.board.RisksOthers}</h3>
                </div>
                <div className="BorderLine"></div>
                <div className="FirstBlock">
                <div className="RXBlock">
                <label className="TreatmentName">TI</label>
                <h3 className="RXValues">{this.state.board.ti}<span className="BlockFourSecDay">cycle</span></h3>
                </div>
                <div className="RXBlock">
                <label className="TreatmentName">IUI</label>
                <h3 className="RXValues">{this.state.board.iui}<span className="BlockFourSecDay">cycle</span></h3>
                </div>
                <div className="RXBlock">
                <label className="TreatmentName">IVF</label>
                <h3 className="RXValues">{this.state.board.ivf}<span className="BlockFourSecDay">cycle</span></h3>
                </div>
                </div>
                <div className="BorderLine"></div>
                <div className="planofcareBlock">
                <label className="TreatmentName">Notes</label>
                <div ref="notes" className="TextBlock"><h3>{this.state.board.planofcare}</h3></div>
                </div>
                {/* <h3>{this.state.board.planofcare}</h3> */}
                </div>
                </div>
                </form>
                </div>
            </section>
        )
    }
}

export default PregnancyShow;