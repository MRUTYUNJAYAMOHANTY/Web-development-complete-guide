import React, {Component} from 'react';
import './AustinVacancyMarket.css';

class AustinVacancyMarket extends Component{
    render(){
        return(
                <div className="AboutVacancyDetail" >
                    <p className="VacancyHedaing" >
                    Down with vacancy and up with absorption in Q3 2018
                    </p>
                    {/* <pre className="AboutVacancy">
                    Absorption levels in the Austin Office Market rebounded in  
                    Q3 2018 from a relatively flat first half of the year, cresting 
                    575,000 sq. ft of positive space demand during the quarter. 
                    With vacancy steadily floating around the 10.0% mark and 
                    asking rates near historic highs, developers continue to 
                    read positively into Austin’s position during the late 
                    expansion stage of the market cycle. 
                    </pre> */}
                    <p className="AboutVacancy" >
                    Absorption levels in the Austin Office Market rebounded in Q3 2018 from a relatively 
                    flat first half of the year, 
                    cresting 575,000 sq. ft of positive space demand during the quarter. With vacancy 
                    steadily floating around the 
                    10.0% mark and asking rates near historic highs, developers 
                    continue to read positively into Austin’s position during the late expansion 
                    stage of the market cycle.
                    </p>
                    <div className="FindOutMore" >
                    <input className="FindButton" type="button" value="Find out more" />
                    </div>
                </div>
        );
    }
}

export default AustinVacancyMarket;