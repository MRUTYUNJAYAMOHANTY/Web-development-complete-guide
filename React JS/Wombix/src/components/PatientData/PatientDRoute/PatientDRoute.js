import React, { PureComponent } from 'react';
import {Switch,BrowserRouter, Route, NavLink , Router} from 'react-router-dom';
import './PatientDRoute.css';
import RouteOne from './RouteOne';
import RouteTwo from './RouteTwo';
import RouteThree from './RouteThree';
import RouteFour from './RouteFour';
import RouteFive from './RouteFive';

class PatientDRouting extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <section className="PatientCheckupDates">
                <BrowserRouter>
                <div className="PatientScanIcons">
                    <NavLink activeClassName="CheckupIcon--active" exact className="CheckupIcon" to="/CheckupOne">
                        <i className="far fa-heart"></i>
                    </NavLink >
                    <NavLink activeClassName="CheckupIcon--active" className="CheckupIcon" to="/CheckupTwo">
                        <i className="fas fa-user-friends"></i>
                    </NavLink >
                    <NavLink activeClassName="CheckupIcon--active" className="CheckupIcon" to="/CheckupThree">
                        <i className="fas fa-procedures"></i>
                    </NavLink >
                    <NavLink activeClassName="CheckupIcon--active" className="CheckupIcon" to="/CheckupFour">
                        <i className="fas fa-thermometer-half"></i>
                    </NavLink>
                    <NavLink activeClassName="CheckupIcon--active" className="CheckupIcon" to="/CheckupFive">
                        <i className="fas fa-prescription-bottle"></i>
                    </NavLink>
                </div>
                <Switch>
                    <Route path="/CheckupOne" exact component={RouteOne} />
                    <Route path="/CheckupTwo" component={RouteTwo} />
                    <Route path="/CheckupThree" component={RouteThree} />
                    <Route path="/CheckupFour" component={RouteFour} />
                    <Route path="/CheckupFive" component={RouteFive} />
                </Switch>
                </BrowserRouter>
                {/* <RouteOne />
                <RouteFour /> */}
            </section>
        )
    }
}

export default PatientDRouting;