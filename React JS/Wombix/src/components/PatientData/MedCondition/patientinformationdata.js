import React, {Component } from 'react';
import firebase from "firebase";
import {Link} from 'react-router-dom';


class Patientinfromation extends Component {
    constructor(props) {
        super(props)
        this.ref = firebase.firestore().collection('registerpatient');
        this.unsubscribe = null
        this.state = {
          startDate: new Date(),
          board : {},
          key:'',
          loading: true,
          popupheading:'medical condition',
          open:false,
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
        return (
            <section>
                <div className="HeaderSection" >
                   <div className="HeaderContent" >
                    <div className="backArrowButton">
                        <Link to={`/patientdetail/${this.state.key}`}><i className="fas fa-arrow-left backArrow"></i></Link>
                    </div>
                    <h3 className="PatientList">{this.state.patientdetailHeading}</h3>                
                    </div>
               </div>
          <div>
            <h2>{this.state.board.treatment}</h2>
            <h3>{this.state.board.infertilitytype}</h3>
            <h3>{this.state.board.nationality}</h3>
            <h3>{this.state.board.education}</h3>
          </div>  
          </section>
        )
    }
}

export default Patientinfromation;