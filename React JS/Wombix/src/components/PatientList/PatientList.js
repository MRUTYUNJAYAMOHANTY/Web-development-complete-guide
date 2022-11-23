import React from 'react';
import './PatientList.css'
import PatientIcon from '../../Assets/search_patients.png'
import { Link } from 'react-router-dom';
  

export default class PatientList extends React.Component {
    render() {
        return ( 
           <div className="cpatient">
               <Link to={"/PatientList"}>
               <button className="patienticon" >
                    <figure>
                        <img src={PatientIcon} alt="patient-icon" className="patient-icon"></img>
                        <figcaption className="figcaption">Patients</figcaption>
                    </figure>
                </button>   
                </Link>            
           </div>
         );
    }
}
