import React, { PureComponent } from 'react';
import './AddNewMC.css';

class AddNewMC extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            addnewmc : {
                others: 'others'
            }
        }
    }

    render() {
        return (
            <section className="AddMedicalNC">
                <div className="AMCHead" >
                <h3 className="AMCHeading" >{this.props.AMChead}</h3>
                </div>
                <div className="AMCcontent">
                    <a href="#" className="AMCSelectors">{this.props.pregnancyHead}</a>
                    <div className="BorderLine"></div>
                    <a href="#" className="AMCSelectors">{this.props.infertilityHead}</a>
                    <div className="BorderLine"></div>
                    <p className="AMCSelectors">{this.state.addnewmc.others}</p>
                    <input type="text" className="AMCothers" placeholder="Type here"/>
                </div>
            </section>
        )
    }
}

export default AddNewMC