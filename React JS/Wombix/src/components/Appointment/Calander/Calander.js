import React from 'react';

import calandar1 from '../../../assests/blank-calendar-monthly.png'


export default class Calandar extends React.Component {
    render() {
        return ( 
           <div className="cpcatient">
               <div className="c" >
                    <figure>
                        <img src={calandar1} alt="patient-icon" className="event"></img>
                        <figcaption className="figcaptionn">Blank Calandar</figcaption>
                    </figure>
                </div>               
           </div>
         );
    }
}
