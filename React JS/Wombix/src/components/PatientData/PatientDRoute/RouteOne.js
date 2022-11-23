import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './RouteOne.css';

class RouteOne extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <section className="CheckupDetails">
                <div>
                    <h1>boom</h1>
                </div>
            </section>
        )
    }
}

export default RouteOne;