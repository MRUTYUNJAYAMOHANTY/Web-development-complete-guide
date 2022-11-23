import React,{Component} from 'react'

class Toolbar extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <section>
                 <div className="calenderToolbar">
           <div>
             <button className="PrevButton" onClick={this.props.goToBack}>&#8249;</button>
             <button className="NextButton" onClick={this.props.goToNext}>&#8250;</button>
        </div>
             <center className="DMLabel">
             <div className="MonthIcon">
             <span>{this.props.month}</span>
             <span className="CalIcon"><i className="far fa-calendar-alt"></i></span>
             </div>
             <span>{this.props.day}</span>
             </center>
             <div className="DayMonButtons">
            <button className="DayViewButton"  onClick={this.props.goToDayView}>day</button>
             <button className='DayViewButton'  onClick={this.props.goToWeekView}>week</button>
             </div>
           </div>
            </section>
        )
    }
}

export default Toolbar;