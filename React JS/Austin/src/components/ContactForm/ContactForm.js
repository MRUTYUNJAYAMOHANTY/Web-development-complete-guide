import React, {Component} from 'react';
import './ContactForm.css';
// import ThankyouMessage from './ThankyouMessage';
// import Validation from './Validation';
import AustinOfcOwners from '../AustinOfcOwners/AustinOfcOwners';
import { Link } from 'react-scroll';

const defaultState = {
    name: "",
    email: "",
    number: "",
    select: "",
    message: "",
    nameError: "",
    emailError: "",
    numberError: "",
    selectError: "",
}

class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state={
            // fields: {},
            // errors: {},
            // name: "",
            // email: "",
            // number: "",
            // select: "",
            // nameError: "",
            // emailError: "",
            // numberError: "",
            // selectError: "",
            defaultState,
            thankyouMsg: false
        }
    }
    handleChange = event =>  {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            this.setState({
               thankyouMsg: true
            });
        this.setState(defaultState);
        }
    }
    backBtn = () =>{
        return(
            this.setState({thankyouMsg:false})
        )
    }
    validate = () => {
        let nameError= "";
        let emailError= "";
        let numberError= "";
        let selectError= "";

        if(!this.state.name){
            nameError = "*Please enter name";
        }
        else if(!this.state.name.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)){
            nameError = "*Name Must be More than 4 Characters";
        }
        if(!this.state.number){
            numberError = "*Please enter phone number";
        }
        // else if(!this.state.number.match(/^[0-9]*$/)){
        //     numberError = "*Enter valid Number";
        // }
        else if (this.state.number.length < 10 || this.state.number.length > 10){
            numberError = "*Number Must be 10 digits";
        }
        if(!this.state.select){
            selectError = "*Please select property";
        }
        if(!this.state.email){
            emailError = "*Please enter email";
        }
        else if(!this.state.email.includes("@")){
            emailError = "*'@' Missing Please Check";
        }
        else if(!this.state.email.includes(".")){
            emailError = "*'.' is missing please check";
        }
        if(emailError || nameError || numberError || selectError){
            this.setState({emailError, nameError, numberError, selectError});
            return false;
        }
        return true;
    }      
    render(){
        const thanku = () => {
            return(
                <div>
                    <div className="Thankyou">
                        <h1 className="Text">Thank you!
                        We will get back to you soon.</h1>
                    <button onClick={ this.backBtn } className="BackButton">Back</button>
                    </div>
                </div>
            )
        }

        return(
            <div>
            <div className="ContactForm" id="ContactForm" >
                <div className="ContactData" >
                    <form className="FormBlocks" ref="FormId" name="ContactForm" onSubmit={this.handleSubmit}>
                    <h1 className="ContactFormHeading" >Contact Us</h1>
                        <input className="FormInput" onChange={this.handleChange}
                        ref="name" name="name" type="text" placeholder="Name"
                        value={this.state.name} />

                        <input className="FormInput" onChange={this.handleChange} 
                        ref="email" name="email" type="text" placeholder="Email"
                        value={this.state.email} />

                        <input className="FormInput" onChange={this.handleChange} 
                        ref="number" name="number" value={this.state.number}
                        type="number" placeholder="Phone Number" />

                        <select className="FormInputt" id="getIntouchSelect" ref="select" name="select" 
                        value={this.state.select}  onChange={this.handleChange}>
                            <option value="" selected>Austin's Largest Office Owners</option>
                            <option id="Worldclass" value="WorldClass">1  -  World Class Property Company</option>
                            <option id="Tierriet" value="TierRiet">2  -  TIER REIT</option>
                            <option value="CalSTRS">3  -  CalSTRS</option>
                            <option value="Dell">4  -  Dell, Inc.</option>
                            <option value="Brandy">5  -  Brandywine Realty Trust</option>
                            <option value="Accesso">6  -  Accesso Partners</option>
                            <option value="Dra">7  -  DRA Advisors</option>
                            <option value="Equity">8  -  Equity Commonwealth</option>
                            <option value="Cousins">9  -  Cousins Properties</option>
                            <option value="RealEstate">10  -  Intercontinental Real Estate</option>
                        </select>
                       
                        <textarea className="TextMessage" 
                        name="message" placeholder="Message"></textarea>
                        <input className="FormButton" type="submit" value="send it"/>
                        {/* {this.state.thankyouMsg ? 
                        <ThankyouMessage 
                        text='Thankyou for your time, We will get back to you soon.Have a good day.'
                        backBtn={this.handleSubmit}
                        /> : null} */}

                        <ul className="ErrorMessages">
                          <li>{this.state.nameError}</li>
                          <li>{this.state.emailError}</li>
                          <li>{this.state.numberError}</li>
                          <li>{this.state.selectError}</li>
                        </ul> 
                    </form>
                    { this.state.thankyouMsg ? thanku() : null }
                </div>
            </div>
            <div className="Footer">
                    <hr />
                    <p className="FooterContent" >Copyright © 2018. Austin Office Owners. All Rights Reserved</p>
            </div>
            </div>
        );
    }
}
export default ContactForm;