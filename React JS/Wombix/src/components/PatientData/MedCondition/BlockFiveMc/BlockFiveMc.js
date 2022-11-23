import React, { PureComponent } from 'react';
import './BlockFiveMc.css';

class BlockFiveMc extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
        
    }
    render() {
        return (
            <section className="BlockFive">
                <p className="BFiveHead">Risks</p>
                <div className="InputBoxes">
                    <input name="RisksOne"
                    onChange={this.props.handleChangeBlocks} value={this.props.RisksOne} 
                    className="BFiveIn" type="text" />
                    <input name="RisksTwo" 
                    onChange={this.props.handleChangeBlocks} value={this.props.RisksTwo} 
                    className="BFiveIn" type="text" />
                    <input name="RisksThree"
                    onChange={this.props.handleChangeBlocks} value={this.props.RisksThree} 
                    className="BFiveInput" type="text" />
                    <input name="RisksOne"
                    onChange={this.props.handleChangeBlocks} value={this.props.RisksOne} 
                    className="BFiveInputBox" type="text" />
                </div>
                <p className="BFiveHead" >Others</p>
                <input type="text" value={this.props.RisksOthers} onChange={this.props.handleChangeBlocks}
                name="RisksOthers" className="BFiveTextArea"/>
            </section>
        )
    }
}

export default BlockFiveMc