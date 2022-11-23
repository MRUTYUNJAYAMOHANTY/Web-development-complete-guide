import React, {Component} from 'react';
import './ThankyouMessage.css'

class ThankyouMessage extends Component{
    render(){
        return(
            <div className="Thankyou" >
                <div className="Message\_inner" >
                <h1 className="Text" >{this.props.text}</h1>
                <button className="BackButton" onClick={this.props.backBtn}>Back</button>
                </div>
            </div>
        );
    }
}

export default ThankyouMessage;