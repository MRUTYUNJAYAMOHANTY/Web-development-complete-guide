import React from 'react';
import './Appointment.css'
import AppointmentIcon from '../../Assets/appointment1.png'
//import calandar from './Calander/Calander'
import { Link } from 'react-router-dom'


export default class Appointment extends React.Component {
    render() {
        return ( 
           <div className="cappointment">
               <Link to="/eventShedular"  className="appointment" >
                    <figure>
                        <img src={AppointmentIcon} alt="appointment" className="patient-appointment"></img>
           
                        <figcaption className="figcaption">Appointment</figcaption>
                    </figure>
                </Link>             
           </div>
         );
    }
}
