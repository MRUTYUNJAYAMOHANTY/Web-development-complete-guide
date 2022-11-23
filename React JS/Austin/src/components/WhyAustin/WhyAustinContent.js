import React,{Component} from 'react';
import './WhyAustinContent.css';
import BestofList from '../../assets/images/icon-1@3x.png';
import GrowthRate from '../../assets/images/icon-2@3x.png';
import EconomicGRate from '../../assets/images/icon-3@3x.png'
import Unemployment from '../../assets/images/icon-4@3x.png'
import Educational from '../../assets/images/5@3x.png';


class WhyAustinContent extends Component {
    render(){
        return(
            <div className="Content">
                <div className="RightContent" >
                    <img className="BestofList" src={BestofList} alt="BestofList" />
                <div className="BestoflistContent" >
                    <h3 className="contentOne1" >153 “BEST OF LISTS”</h3>
                    <p className="contentTwo" >Through 2016 and 2017, Austin made at least 153 “Best of lists”</p>
                </div>
                </div>
                <div className="RightContent" >
                    <img className="BestofList2" src={GrowthRate} alt="BestofList" />
                <div className="BestoflistContent2" >
                    <h3 className="contentOne1" >35.7% GROWTH RATE</h3>
                    <p className="contentTwo" >Austin had a 35.7% growth rate from 2010 to 2016 - the highest in the 
                    nation</p>
                </div>
                </div>
                <div className="RightContent" >
                    <img className="BestofList2" src={EconomicGRate} alt="BestofList" />
                <div className="BestoflistContent3" >
                    <h3 className="contentOne" >1.9% ECONOMIC GROWTH RATE</h3>
                    <p className="contentTwo" >From 2016 to 2017, Austin’s economy grew faster than any city in the U.S</p>
                </div>
                </div>
                <div className="RightContent" >
                    <img className="BestofList2" src={Unemployment} alt="BestofList" />
                <div className="BestoflistContent3" >
                    <h3 className="contentOne" >2.8% UNEMPLOYMENT RATE</h3>
                    <p className="contentTwo" >Austin’s unemployment rate is down 1.5% from April 2016</p>
                </div>
                </div>
                <div className="RightContent" >
                    <img className="BestofList2" src={Educational} alt="BestofList" />
                <div className="BestoflistContent3" >
                    <h3 className="contentOne" >HIGH EDUCATIONAL ATTAINMENT</h3>
                    <p className="contentTwo" >88.6% of Austin’s population are High School Graduates or higher, which outpaces the national
                     average of 86.6%</p>
                </div>
                </div>
            </div>
            
        )
    }
}

export default WhyAustinContent;