import React, { PureComponent } from 'react';
import './BlockSixMc.css';
import HeartBlock from './HeartBlock';
import BreastBlock from './BreastBlock';

class BlockSixMc extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            // buttonActive: false,
            // buttonActiveTwo: false,
            // buttonActiveThree: false,
        }
        // this.buttonActiveClass = this.buttonActiveClass.bind(this);
        // this.buttonActiveClassTwo = this.buttonActiveClassTwo.bind(this);
        // this.buttonActiveClassThree = this.buttonActiveClassThree.bind(this)
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
    render() {
        const {lungsInfoOne, lungsInfoTwo} = this.props;
        return (
            <section className="BlockSix">
                <div className="LungsBlock">
                    <p className="LungsHead" >Lungs</p>
                    <div className="LungsButtons">
                    {/* <button  onClick={this.buttonActiveClass} 
                    className={this.state.buttonActive ? "LungsActiveOne toggled" : "LungsBtnOne"}></button>
                    <button onClick={this.buttonActiveClassTwo} 
                    className={this.state.buttonActiveTwo ? "LungsActiveTwo toggled" : "LungsBtnTwo"} ></button>
                    <button onClick={this.buttonActiveClassThree} 
                    className={this.state.buttonActiveThree ? "LungsActiveThree toggled" : "LungsBtnThree"} ></button>
                    <div className="BorderRightLineSix"></div> */}
                    <input className="LungsBtnOne" type="radio" id="lungsoption-one"  
                    name="lungsselector" value="Lungs Light Green" defaultValue={this.props.Lungs}
                    checked={this.props.Lungs === "Lungs Light Green" } 
                    onChange={this.props.handleLungsChange} />
                    <label className="LungsActiveOne" htmlFor="lungsoption-one" ></label>
                    <input className="LungsBtnTwo" type="radio" id="lungsoption-two"  
                    name="lungsselector" value="Lungs Light Brown" defaultValue={this.props.Lungs}
                    checked={this.props.Lungs === "Lungs Light Brown" } 
                    onChange={this.props.handleLungsChange}/>
                    <label className="LungsActiveTwo" htmlFor="lungsoption-two"></label>
                    <input className="LungsBtnThree" type="radio" id="lungsoption-three"
                    name="lungsselector" value="Lungs Purple" defaultValue={this.props.Lungs}
                    checked={this.props.Lungs === "Lungs Purple" } 
                    onChange={this.props.handleLungsChange}/>
                    <label className="LungsActiveThree" htmlFor="lungsoption-three"></label>
                    <div className="BorderRightLineSix"></div>
                    <div className="LungsInput">
                    <input ref={lungsInfoOne} value={this.props.Lungs} className="LungsIn" type="text" />
                    <input ref={lungsInfoTwo} value={this.props.Lungs} className="LungsIn" type="text" />
                    </div>
                    </div>
                </div>
                {/* <HeartBlock breastInfoOne = {node => this.breastOneNode = node} 
                    breastInfoTwo = {node => this.breastTwoNode = node} />
                <BreastBlock heartInfoOne = {node => this.heartOneNode = node} 
                heartInfoTwo = {node => this.heartTwoNode = node}  />  */}
            </section>
        )
    }
}

export default BlockSixMc;