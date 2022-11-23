import React, {Component} from 'react';
import './AustinPlaceRight.css';

class AustinPlaceRight extends Component{
    render(){
        return(
            <div className="PlacesRight">
                    <div className="MostDiverse">
                        <p className="NumberEight" >8</p>
                        <a className="MostDiverseCentral" href="#">Affordable Homes |<span> Southeast</span></a>
                    </div>
                    <div className="MostDiverse">
                        <p className="NumberNine" >9</p>
                        <a className="MostDiverseCentral" href="#">Older People |<span> Southwest</span></a>
                    </div>
                    <div className="MostDiverse">
                        <p className="NumberTen" >10</p>
                        <a className="MostDiverseCentral" href="#">Award Winning Schools |<span> Westlake Hills</span></a>
                    </div>
                    <div className="MostDiverse">
                        <p className="NumberEleven" >11</p>
                        <a className="MostDiverseCentral" href="#">Business Owners |<span> East</span></a>
                    </div>
                    <div className="MostDiverse">
                        <p className="NumberTwelve" >12</p>
                        <a className="MostDiverseCentral" href="#">New Homebuyers |<span> East Central</span> </a>
                    </div>
                    <div className="MostDiverse">
                        <p className="NumberThirteen" >13</p>
                        <a className="MostDiverseCentral" href="#">Luxury Homes |<span> West</span></a>
                    </div>
            </div>
        );
    }
}
export default AustinPlaceRight;