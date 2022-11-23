import React, {Component} from 'react';
import './AustinPlace.css';
import AustinPlaceRight from './AustinPlaceRight';

class AustinPlaces extends Component{
    render(){
        return(
            <div className="AustinPlaces" >
                <div className="Places" >
                    <div className="PlaceLeft" >
                    <div className="MostDiverse" >
                        <p className="NumberOne" >1</p>
                        <a className="MostDiverseCentral" href="#">Most Diverse |<span>Central/ West Central</span></a>
                    </div>
                    <div className="MostDiverse" >
                        <p className="NumberTwo" >2</p>
                        <a className="MostDiverseCentral" href="#">Young Families/ Young Professionals |<span> Downtown</span></a>
                    </div>
                    <div className="MostDiverse" >
                        <p className="NumberThree" >3</p>
                        <a className="MostDiverseCentral" href="#">Working Professionals |<span> North</span></a>
                    </div>
                    <div className="MostDiverse" >
                        <p className="NumberFour" >4</p>
                        <a className="MostDiverseCentral" href="#">Shopping |<span> North Central</span></a>
                    </div>
                    <div className="MostDiverse" >
                        <p className="NumberFive" >5</p>
                        <a className="MostDiverseCentral" href="#">Outdoor Enthusiasts |<span> Northwest</span></a>
                    </div>
                    <div className="MostDiverse" >
                        <p className="NumberSix" >6</p>
                        <a className="MostDiverseCentral" href="#">Students |<span> Northeast</span></a>
                    </div>
                    <div className="MostDiverse" >
                        <p className="NumberSeven" >7</p>
                        <a className="MostDiverseCentral" href="#">Music Enthusiasts/ Hippies |<span> South</span></a>
                    </div>
                    </div>
                    <AustinPlaceRight />
                    </div>
            </div>
        )
    }
}

export default AustinPlaces;