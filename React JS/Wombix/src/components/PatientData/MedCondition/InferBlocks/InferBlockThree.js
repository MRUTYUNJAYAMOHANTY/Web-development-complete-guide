import React, { PureComponent } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './InferBlockThree.css';


class BlockTwomc extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            // startDate: new Date(),
            // startDateML: new Date(),
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleChangeML = this.handleChangeML.bind(this);
    }
    // handleChange(date){
    //     this.setState({
    //         startDate: date,
    //     })
    // }
    // handleChangeML(date){
    //    this.setState({
    //     startDateEdd: date,
    //    })
    // }
    render() {
        return (
            <section>
                <div className="BlockThreeButtons">
                    <div className="BThreeInfer" >
                    <label className="BlockThreeHeading">D.O.B</label>
                    <DatePicker className="dobDateValue" dateFormat='dd-MMM-yyyy' 
                    // value={this.props.dob} 
                    // // selected={this.props.dob}
                    // onChange={this.props.handleDobChange}
                    />
                    </div>
                    <div className="BThreeInfer" >
                    <label  className="BlockThreeSecHeading">Marriage date</label>
                    <DatePicker className="dobDateValue" dateFormat='dd-MMM-yyyy'  
                    // selected={this.props.marriagedate} 
                    // value={this.props.marriagedate}
                    // onChange={this.props.handleChangeML}
                    />
                    </div>
                    </div>
            </section>
        )
    }
}

export default BlockTwomc;