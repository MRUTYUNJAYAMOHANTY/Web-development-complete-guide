import React, {Component} from 'react';
import './AustinMap.css';
import AustinLandscape from '../../assets/images/map@3x.png';

class AustinMap extends Component{
    render(){
        return(
            <div className="AustinMapLandscape" id="austinlandscape" >
                <h1 className="MapHeading">Austin Landscape</h1>
                <img className="MapImage" src={AustinLandscape} alt="AustinMap" />
            </div>
        )
    }
}

export default AustinMap;