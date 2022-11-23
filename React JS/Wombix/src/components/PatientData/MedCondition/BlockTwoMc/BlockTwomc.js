import React, { PureComponent } from 'react';
import './BlockTwo.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


class BlockTwomc extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            startDateEdd: new Date(),
            // button : {
            //         LMP: 'By Lmp',
            //         Scan:'By Scan'
            // },
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeEDD = this.handleChangeEDD.bind(this);
    }
    handleChange(date){
        this.setState({
            startDate: date,
        })
    }
    handleChangeEDD(date){
       this.setState({
        startDateEdd: date,
       })
    }
    render() {
        const {LMPref, Scanref} = this.props; 
        const button = this.state.button;
        return (
            <section>
                <div className="BlockTwo">
                    <div className="BTwoLmpDate" >
                    <p className="LmpName">EDD<i className="byLmp"> (by LMP)</i></p>
                    <DatePicker className="DatePickerTwo" dateFormat='dd-MMM-yyyy' ref="InputDate2"  
                    selected={this.state.startDate}
                    onChange={this.handleChange}/>
                    </div>
                    <div className="BorderRightLine"></div>
                    <div className="BTwoEddScan" >
                    <p  className="GestationName">EDD<i className="byLmp">(by Scan)</i></p>
                    <DatePicker className="DatePickerTwo" dateFormat='dd-MMM-yyyy' ref="InputDate3"  
                    selected={this.state.startDateEdd}
                    onChange={this.handleChangeEDD}/>
                    </div>
                    <div className="BorderRightLine"></div>
                    <div className="BTwoEddButtons" >
                    <p className="LmpName">EDD</p>
                    <div className="radio">
                    <input className="BlockTwoButton" type="radio" id="option-one"  ref={LMPref}  
                    name="selector" value="by lmp" defaultValue={this.props.lmpscanbtn} 
                    checked={this.props.lmpscanbtn === "by lmp" } 
                    onChange={this.props.handleRadioChange} />
                    <label className="buttonActive" htmlFor="option-one" >By Lmp</label>
                    <input className="BlockTwoButton" type="radio" id="option-two"  ref={Scanref} 
                    name="selector" value="by scan" defaultValue={this.props.lmpscanbtn} 
                    checked={this.props.lmpscanbtn === "by scan" } 
                    onChange={this.props.handleRadioChange} />
                    <label className="buttonActive" htmlFor="option-two">By Scan</label>
                    </div>
                    </div>
                    </div>
            </section>
        )
    }
}

export default BlockTwomc;