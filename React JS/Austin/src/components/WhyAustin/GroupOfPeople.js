import React, {Component} from 'react';
import './GroupOfPeople.css';
import GroupOfPeopleImage from '../../assets/images/Group 807@3x.png';

class GroupOfPeople extends Component{
    render(){
        return(
            <div>
                <div className="GroupOfPeople" >
                    <img className="GroupOfPeoplePic" src={GroupOfPeopleImage} alt="GroupOfPeople" />
                    <div className="AboutAustine" >
                        <p className="GroupContentOne" >
                        Over 150 people move to Austin, TX every day, making it the fastest growing city in the US.</p>
                        <p>Located in Central Texas Hill Country, Austin, TX is a unique reservoir of arts, 
                        education, and eclectic people. 
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupOfPeople;