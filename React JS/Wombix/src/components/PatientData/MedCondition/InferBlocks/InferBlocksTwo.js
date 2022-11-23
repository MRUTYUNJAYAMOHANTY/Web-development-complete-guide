import React, { PureComponent } from 'react';

class BlockTwomc extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        
    }
   
    render() {
        return (
            <section>
                    <div className="BTwoEddButtons" >
                    <label className="BlockOneHeading">infertility type</label>
                    <div className="ButtonsBlock">
                    <input className="BlockTwoButton" type="radio" id="option-one"  
                    name="selector" value="Primary" defaultValue={this.props.infertilitytype} 
                    checked={this.props.infertilitytype === "Primary" } 
                    onChange={this.props.handleInferTypeChange} />
                    <label className="buttonActive" htmlFor="option-one">Primary</label>
                    <input className="BlockTwoButton" type="radio" id="option-two"
                    name="selector" value="Secondary" defaultValue={this.props.infertilitytype} 
                    checked={this.props.infertilitytype === "Secondary" } 
                    onChange={this.props.handleInferTypeChange} />
                    <label className="buttonActive" htmlFor="option-two">Secondary</label>
                    </div>
                    </div>
            </section>
        )
    }
}

export default BlockTwomc;