import React, { PureComponent } from 'react';

class BlockFourMc extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <section className="">
                <div className="FourBlockGPLA">
                <div className="ConOne">
                        <p className="Heading">Gravida</p>
                        <input className="BlockFourInput" name="G" 
                        value={this.props.G} type="text" onChange={this.props.handleChangeBlocks}/> 
                    </div>
                    <div className="BorderRightLine"></div>
                    <div className="ConOne">
                        <p className="Heading">Parity</p>
                        <input className="BlockFourInput" name="P"
                        value={this.props.P} type="text" onChange={this.props.handleChangeBlocks}/>
                    </div>
                    <div className="BorderRightLine"></div>
                    <div className="ConOne">
                        <p className="Heading" >Live</p>
                        <input className="BlockFourInput" name="L" 
                        value={this.props.L} type="text" onChange={this.props.handleChangeBlocks}/>
                    </div>
                    <div className="BorderRightLine"></div>
                    <div className="ConOne">
                        <p className="Heading" >Abortion</p>
                        <input className="BlockFourInput" name="A"
                        value={this.props.A} type="text" onChange={this.props.handleChangeBlocks}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default BlockFourMc;