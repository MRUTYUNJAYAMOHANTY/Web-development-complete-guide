import React, { PureComponent } from 'react';
import './InferBlockOne.css';

class PatientList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <section className="BlockThreeButtons">
                <label className="BlockOneHeading">treatment</label>
                <div className="ButtonsBlock">
                    <input className="BlockThreeButton" type="radio"
                    checked={this.props.treatment === "TI" } 
                    onChange={this.props.handleTreatmentChange} id="Block3option-one"  
                    defaultValue= {this.props.treatment} value="TI"  name="babyselector" />
                    <label className="buttonActiveThree" htmlFor="Block3option-one" >TI</label>
                    <input className="BlockThreeButton" type="radio" id="Block3option-two"
                    checked={this.props.treatment === "IUI" } 
                    value="IUI"
                    defaultValue={this.props.treatment}
                    onChange={this.props.handleTreatmentChange}  
                    name="babyselector" />
                    <label className="buttonActiveThree" htmlFor="Block3option-two">IUI</label>
                    <input className="BlockThreeButton" type="radio" id="Block3option-three" 
                    checked={this.props.treatment === "IVF" } 
                    value="IVF"
                    defaultValue={this.props.treatment}
                    onChange={this.props.handleTreatmentChange} 
                    name="babyselector" />
                    <label className="buttonActiveThree" htmlFor="Block3option-three">IVF</label>
                </div>
            </section>
        )
    }
}

export default PatientList;