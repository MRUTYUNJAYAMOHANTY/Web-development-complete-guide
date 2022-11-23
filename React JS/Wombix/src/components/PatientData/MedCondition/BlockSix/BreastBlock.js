import React, { PureComponent } from 'react';
import './BreastBlock.css';

class BreastBlock extends PureComponent {
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
        const {breastInfoOne, breastInfoTwo} = this.props
        return (
            <section>
                <div className="LungsBlock">
                    <p className="LungsHead" >Breast</p>
                    <div className="LungsButtons">
                    <input className="BreastBtnOne" type="radio" id="breastoption-one"  
                    name="breastselector" value="Breast Light Green" defaultValue={this.props.Breasts}
                    checked={this.props.Breasts === "Breast Light Green" } 
                    onChange={this.props.handleBreastChange} />
                    <label className="BreastActiveOne" htmlFor="breastoption-one" ></label>
                    <input className="BreastBtnTwo" type="radio" id="breastoption-two"  
                    name="breastselector" value="Breast Light brown" defaultValue={this.props.Breasts}
                    checked={this.props.Breasts === "Breast Light brown" } 
                    onChange={this.props.handleBreastChange} />
                    <label className="BreastActiveTwo" htmlFor="breastoption-two"></label>
                    <input className="BreastBtnThree" type="radio" id="breastoption-three"
                    name="breastselector" value="Breast Red" defaultValue={this.props.Breasts}
                    checked={this.props.Breasts === "Breast Red" } 
                    onChange={this.props.handleBreastChange}/>
                    <label className="BreastActiveThree" htmlFor="breastoption-three"></label>
                    <div className="BorderRightLineSix"></div>
                    <div className="LungsInput">
                    <input ref={breastInfoOne} value={this.props.Breasts} className="LungsIn" type="text" />
                    <input ref={breastInfoTwo} value={this.props.BreastS} className="LungsIn" type="text" />
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BreastBlock;