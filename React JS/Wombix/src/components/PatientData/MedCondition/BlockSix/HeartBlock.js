import React, { PureComponent } from 'react';
import './HeartBlock.css';

class HeartBlock extends PureComponent {
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
        const {heartInfoOne, heartInfoTwo} = this.props;
        return (
            <section>
                <div className="LungsBlock">
                    <p className="LungsHead" >Heart</p>
                    <div className="LungsButtons">
                    {/* <button  onClick={this.buttonActiveClass} 
                    className={this.state.buttonActive ? "HeartActiveOne toggled" : "HeartBtnOne"}></button>
                    <button onClick={this.buttonActiveClassTwo} 
                    className={this.state.buttonActiveTwo ? "HeartActiveTwo toggled" : "HeartBtnTwo"} ></button>
                    <button onClick={this.buttonActiveClassThree} 
                    className={this.state.buttonActiveThree ? "HeartActiveThree toggled" : "HeartBtnThree"} ></button> */}
                    <input className="HeartBtnOne" type="radio" id="heartoption-one"  
                    name="heartselector" value="Heart Light Green" defaultValue={this.props.Heart}
                    checked={this.props.Heart === "Heart Light Green"} 
                    onChange={this.props.handleHeartChange} />
                    <label className="HeartActiveOne" htmlFor="heartoption-one" ></label>
                    <input className="HeartBtnTwo" type="radio" id="heartoption-two"  
                    name="heartselector" value="Heart Yellow" defaultValue={this.props.Heart}
                    checked={this.props.Heart === "Heart Yellow" } 
                    onChange={this.props.handleHeartChange} />
                    <label className="HeartActiveTwo" htmlFor="heartoption-two"></label>
                    <input className="HeartBtnThree" type="radio" id="heartoption-three"
                    name="heartselector" value="Heart Purple" defaultValue={this.props.Heart}
                    checked={this.props.Heart === "Heart Purple" } 
                    onChange={this.props.handleHeartChange}  />
                    <label className="HeartActiveThree" htmlFor="heartoption-three"></label>
                    <div className="BorderRightLineSix"></div>
                    <div className="LungsInput">
                    <input ref={heartInfoOne} value={this.props.Heart} className="LungsIn" type="text" />
                    <input ref={heartInfoTwo} value={this.props.Heart} className="LungsIn" type="text" />
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HeartBlock