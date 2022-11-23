import React, { PureComponent } from 'react';
// import patientImage from '../../assets/PatientImage.jpg';
// import data from '../../data.json';
import './BlockThreeMcBtns.css';


class PatientList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            // patientList: patientList,
            // buttonActive: false,
            // buttonActiveTwo: false,
            // buttonActiveThree: false,
            // buttonActiveFour: false,

        }
        // this.buttonActiveClass = this.buttonActiveClass.bind(this);
        // this.buttonActiveClassTwo = this.buttonActiveClassTwo.bind(this);
        // this.buttonActiveClassThree = this.buttonActiveClassThree.bind(this)
        // this.buttonActiveClassFour = this.buttonActiveClassFour.bind(this)
    }
    // buttonActiveClass(){
    //     this.setState({buttonActive: !this.state.buttonActive})
    // }
    // buttonActiveClassTwo(){
    //     this.setState({buttonActiveTwo: !this.state.buttonActiveTwo})
    // }
    // buttonActiveClassThree(){
    //     this.setState({buttonActiveThree: !this.state.buttonActiveThree})
    // }
    // buttonActiveClassFour(){
    //     this.setState({buttonActiveFour: !this.state.buttonActiveFour})
    // }

    
    render() {
        // const {single, twins, triple, more} = this.props;
        return (
            <section className="BlockThreeButtons">
                <p className="BlockThreeHead" >Fetus</p>
                <div className="radio">
                    <input className="BlockThreeButton" type="radio"
                    checked={this.props.fetus === "Single" } 
                    onChange={this.props.handleFetusChange} id="Block3option-one"  
                    defaultValue= {this.props.fetus} value="Single"  name="babyselector" />
                    <label className="buttonActiveThree" htmlFor="Block3option-one">Single</label>
                    <input className="BlockThreeButton" type="radio" id="Block3option-two"
                    checked={this.props.fetus === "Twins" } 
                    value="Twins"
                    defaultValue={this.props.fetus}
                    onChange={this.props.handleFetusChange}  
                    name="babyselector" />
                    <label className="buttonActiveThree" htmlFor="Block3option-two">Twins</label>
                    <input className="BlockThreeButton" type="radio" id="Block3option-three" 
                    checked={this.props.fetus === "Triple" } 
                    value="Triple"
                    defaultValue={this.props.fetus}
                    onChange={this.props.handleFetusChange} 
                    name="babyselector" />
                    <label className="buttonActiveThree" htmlFor="Block3option-three" >Triple</label>
                    <input className="BlockThreeButton" type="radio" id="Block3option-four"
                    checked={this.props.fetus === "More" } 
                    value="More"
                    defaultValue={this.props.fetus}
                    onChange={this.props.handleFetusChange}  
                    name="babyselector" />
                    <label className="buttonActiveThree" htmlFor="Block3option-four">MORE +</label>
                </div>
            </section>
        )
    }
}

export default PatientList;