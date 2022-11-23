import React, { PureComponent } from 'react';

class BlockTwomc extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        
    }
   
    render() {
        return (
            <section className="InferBlockFour">
                    <div className="BlockFourButtons" >
                    <p className="BlockThreeSecHeading">periods regular</p>
                    <div className="PeriodRegBtn">
                    <input className="BlockTwoButton " type="radio" id="periodsRegularYes"  
                    name="yes" value="Yes" defaultValue={this.props.periodsregular} 
                    checked={this.props.periodsregular === "Yes" } 
                    onChange={this.props.handlePRChange} />
                    <label className="buttonActive " htmlFor="periodsRegularYes">Yes</label>
                    <input className="BlockTwoButton " type="radio" id="periodsRegularTwo"
                    name="yes" value="No" defaultValue={this.props.periodsregular} 
                    checked={this.props.periodsregular === "No" } 
                    onChange={this.props.handlePRChange} />
                    <label className="buttonActive " htmlFor="periodsRegularTwo">No</label>
                    </div>
                    </div>
                    <div className="Bleeding">
                        <label className="BlockFourSecHeadingB">Bleeding</label>
                        <input name="bleeding" value={this.props.bleeding} 
                        className="bleedingDateValue" type="text" onChange={this.props.handleChangeBlocks} />
                        <label className="BlockFourSecDay">days</label>
                    </div>
                    <div className="Bleeding">
                        <label className="BlockFourSecHeadingC">Cycle length</label>
                        <input name="cyclelength" value={this.props.cyclelength} 
                        className="ClDateValue" type="text" onChange={this.props.handleChangeBlocks} />
                        <label className="BlockFourSecDay">days</label>
                    </div>
            </section>
        )
    }
}

export default BlockTwomc;