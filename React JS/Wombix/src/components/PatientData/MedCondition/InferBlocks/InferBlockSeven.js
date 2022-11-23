import React, { PureComponent } from 'react'

class InferBLockSeven extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <section className="RXHistory">
                <h2 className="BlockOneHeading">RX history</h2>
                    <div>
                        <label className="BlockFourSecHeadingB">ti</label>
                        <input name="ti" value={this.props.ti} 
                        className="bleedingDateValue" type="text" onChange={this.props.handleChangeBlocks} />
                        <label className="BlockFourSecDay">cycle</label>
                    </div>
                    <div>
                        <label className="BlockFourSecHeadingB">iui</label>
                        <input name="iui" value={this.props.iui} 
                        className="bleedingDateValue" type="text" onChange={this.props.handleChangeBlocks} />
                        <label className="BlockFourSecDay">cycle</label>
                    </div>
                    <div className="ivf">
                        <label className="BlockFourSecHeadingB">ivf</label>
                        <input name="ivf" value={this.props.ivf} 
                        className="bleedingDateValue" type="text" onChange={this.props.handleChangeBlocks} />
                        <label className="BlockFourSecDay">cycle</label>
                    </div>
                    <div className="BorderLine"></div>
                    <div className="">
                    <label className="POCHeading">plan of care</label>
                    <textarea ref="notes" name="planofcare"  onChange={this.props.handleChangeBlocks} 
                    value={this.props.planofcare} 
                    className="TextBlock" />
                </div>
            </section>
        )
    }
}

export default InferBLockSeven;