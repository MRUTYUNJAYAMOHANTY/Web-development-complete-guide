import React, { PureComponent } from 'react';
import './InferBlockSix.css';

class BlockTwomc extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
           
        }
      
    }
   
    render() {
        return (
            <section>
                <div className="InferBlockSix">
                    <span>
                    <label className="BlockSixSecHeading">Risks</label>
                    </span>
                    <div className="" >
                    <label className="BlockOneHeading">past pregnencies</label>
                    <div className="RiskInputVal">
                    <input className="RiskDateValue" type="text" name="RisksPP"
                    value={this.props.RisksPP}
                    onChange={this.props.handleChangeBlocks}
                    />
                    <input className="RiskDateValue" type="text" name="RisksPPTwo"
                    value={this.props.RisksPPTwo}
                    onChange={this.props.handleChangeBlocks}
                    />
                    </div>
                    </div>
                    <div className="" >
                    <label  className="BlockOneHeading">medical</label>
                    <div className="RiskInputVal">
                    <input className="RiskDateValue" type="text" name="RisksMed"
                     value={this.props.RisksMed}
                    onChange={this.props.handleChangeBlocks}
                    />
                    <input className="RiskDateValue" type="text" name="RisksMedTwo"
                    onChange={this.props.handleChangeBlocks}
                    value={this.props.RisksMedTwo}
                    />
                    </div>
                    <label className="BlockOneHeading">others</label>
                    <div>
                    <input className="RiskOtherValue"  type="text" name="RisksOthers"  value={this.props.RisksOthers} 
                    onChange={this.props.handleChangeBlocks}/>
                    <input className="RiskOtherValue"  type="text" onChange={this.props.handleChangeBlocks}/>
                    </div>
                    </div>
                    </div>
            </section>
        )
    }
}

export default BlockTwomc;