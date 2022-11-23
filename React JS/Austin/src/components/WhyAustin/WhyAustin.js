import React,{Component} from 'react';
import WhyAustinImage from '../../assets/images/carlos-delgado-717278-unsplash@3x.png';
import './WhyAustin.css';
import WhyAustinContent from './WhyAustinContent';

class WhyAustin extends Component{
    render(){
        return(
            <div className="WhyAustin-content" id="whyaustin" >
                <h1 className="Austin-name" >Why Austin</h1>
                <div className="WhyImage" >
                    <img className="AustinPicture" src={WhyAustinImage} alt="austin"/>
                </div>
                <WhyAustinContent />
            </div>
        )
    }
}

export default WhyAustin;