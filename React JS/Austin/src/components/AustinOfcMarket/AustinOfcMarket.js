import React, {Component} from 'react';
import './AustinOfcMarket.css';
import DownArrow from  '../../assets/images/Group 7@3x.png';
import UpArrow from '../../assets/images/Group 8@3x.png';
import AustinVacancyMarket from '../../components/AustinOfcMarket/AustinVacancyMarket';

class AustinOfcMarket extends Component {
    render(){
        return(
                <div className="AustinOfcMarketContent" id="austinofficemarket" >
                    <div className = "hh">
                    <h1 className="AustinOfcHeading" >Austin Office Market</h1>
                    <div className="mnoj" >
                    <div className="Vacancy" >
                        <img className="DownArrowImg" src={DownArrow} alt="DownArrow"/>
                        <div className="VacancyContent" >
                        <p className="VacancyWord" >Vacancy</p>
                        <p className="VacancyNumber">10.2%</p>
                        </div>
                    </div>
                    <div className="Vacancy" >
                        <img className="DownArrowImg" src={UpArrow} alt="UpArrow"/>
                        <div className="VacancyContent" >
                        <p className="VacancyWord">Under Construction</p>
                        <p className="VacancyNumber">4,445,358SF</p>
                        </div>
                    </div>
                    <div className="Vacancy" >
                        <img className="DownArrowImg" src={UpArrow} alt="UpArrow"/>
                        <div className="VacancyContent" >
                        <p className="VacancyWord">Deliveries</p>
                        <p className="VacancyNumber">580,487SF</p>
                        </div>
                    </div>
                    <div className="Vacancy" >
                        <img className="DownArrowImg" src={UpArrow} alt="UpArrow"/>
                        <div className="VacancyContent" >
                        <p className="VacancyWord">Net Absorption</p>
                        <p className="VacancyNumber">575,927SF</p>
                        </div>
                    </div>
                    <div className="Vacancy" >
                        <img className="DownArrowImg" src={DownArrow} alt="UpArrow"/>
                        <div className="VacancyContent" >
                        <p className="VacancyWord">Avg.Asking Rate</p>
                        <p className="VacancyNumber">$35.49PSF</p>
                        </div>
                    </div>
                    <p className="MediaSource" ><b>Source:</b> CBRE Research, Q3 2018</p>
                    </div>
                    <AustinVacancyMarket /> 
                    </div>
                    </div>
        );
    }
}
export default AustinOfcMarket;
