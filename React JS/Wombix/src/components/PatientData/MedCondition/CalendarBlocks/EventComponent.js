import React,{Component} from 'react';
import "./EventComponent.css";

class EventComponent extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <section>
                <span className="UserIcon"><i className="fas fa-user"></i></span>
            </section>
        )
    }
}

export default EventComponent;