import React from 'react';
import './RegisterPatient.css'
import usericon from '../../Assets/usericon.png'
import mp1 from '../../Assets/pregnancy.png'
import mp2 from '../../Assets/fertility.png'
import mp3 from '../../Assets/others.png'
import  firebase, { database } from "firebase";
import   { storage } from "../../components/Firebase/firebase";
// import * as ROUTES from '../../constants/routes';
import * as ROUTES from '../../constants/routes';
// import Patientdetails from '../Patientdetails/Patientdetails';
import { Link } from 'react-router-dom';
 


const defaultState = {
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    genderchange: "",
    firstnameError: "",
    lastnameError: "",
    emailError: "",
    numberError: "",
    medicalcondition: "",
    // image: null,
    // url: ""
}


export default class RegisterPatient extends React.Component {
    constructor(props){
        super(props)
        this.ref = firebase.firestore().collection('registerpatient')
        this.state = {
            defaultState,
            regdata: [],
            genderchange:'',
            file: '',
            imagePreviewUrl: '',
            medicalcondition: '',
            image:null,
            url:''
            // radio: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleMedicalCondition = this.handleMedicalCondition.bind(this);
    }
    // componentDidMount(){
    //     firebase.database().ref("Patient Details")
    //     .push({
    //         name: "rakesh",
    //         age: 21
    //     });
    // }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    handleChange = event =>  {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value,
            
        });
    };
    handleGenderChange(event){
        this.setState({
            genderchange: event.target.value,
        })
    }
    handleMedicalCondition(event){
        this.setState({
            medicalcondition: event.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        const { firstname, lastname, email, number, genderchange, medicalcondition, image, url  } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
        (snapshot)=> {

        },
        (error)=> {
            console.log(error)
        },
        ()=>{storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url})
        })
        });
        this.ref.add({
            firstname,
            lastname,
            email,
            number,
            genderchange,
            medicalcondition,
            url,
            image
        }).then((docRef) => {
            this.setState({
                firstname: "",
                lastname: "",
                email: "",
                number: "",
                genderchange: "",
                medicalcondition: "",
                url: "",
                image:null
            });
            this.props.history.push("/PatientList")
        })
        .catch((error) => {
            console.error("Error adding in RegisterPatient: ", error)
        })
        const isValid = this.validate();
        if(isValid){
            this.setState(defaultState);
        }
    }



    handleImageChange(e) {
        // e.preventDefault();
        if(e.target.files[0]){
            const image = e.target.files[0]
            this.setState(()=> ({image}))
        }
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }

    validate = () => {
        let firstnameError= "";
        let lastnameError= "";
        let emailError= "";
        let numberError= "";
  

        if(!this.state.firstname){
            firstnameError = "*Please enter FirstName";
        }
        else if(!this.state.firstname.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)){
            firstnameError = "*FirstName Must be More than 4 Characters";
        }
        if(!this.state.lastname){
            lastnameError = "*Please enter LastName";
        }
        else if(!this.state.lastname.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)){
            lastnameError = "*LastName Must be More than 4 Characters";
        }
        if(!this.state.number){
            numberError = "*Please enter Phone Number";
        }
        else if (this.state.number.length < 10 || this.state.number.length > 10){
            numberError = "*Number Must be 10 digits";
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
        if(emailError || firstnameError || lastnameError ||  numberError ){
            this.setState({emailError,firstnameError,lastnameError,numberError});
            return false;
        }
        return true;
    }      
    render() {
        
        const { firstname, lastname, email, number, genderchange, medicalcondition, url } = this.state;

        let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} alt="image preview" ref="image"/>);
    } else {
      $imagePreview = (<img className="previewText" src={usericon} ref="image" alt="image"/>);
    }
        return ( 

           <div className="creg">
               <div className="navreg">
                   <ul>
                       <li><Link to={ROUTES.HOME}><button className="backbtn">&larr;</button></Link></li>
                       <li><p className="regp">Register Patient</p></li>
                       <li> <button className="savebtn" type="submit" onClick={this.handleSubmit}>&#10003;</button>
                       {/* { this.state.thankyouMsg ? thanku() : null } */}
                       </li>
                   </ul>
               </div>
               <div className="cpreg">
                   <div>
                        <button className="togglebtn">New User</button>
                   </div>
                   <div className="cpinfo">
                        <form className="pinfo1">
                            <div className="pinfo">
                            
                                    <div className="pdetails">
                                        <p>Patient Information</p>
                                         <input className="fileInput" value={url} type="file" onChange={this.handleImageChange} />
                                         <div className="imgPreview">
                                            {$imagePreview}
                                        </div>
                                    </div>
                                    <div className="emaild">
                                        <i class="far fa-envelope"></i>
                                        <input type="email" placeholder="Email" ref="email" className="email" name="email" 
                                        onChange={this.handleChange}  value={email}></input>
                                        
                                    </div>
                                    <li className="errorpe">{this.state.emailError}</li>
                                    <div >
                                        <i class="far fa-user"></i>
                                        <div className="name1">
                                            <input type="text" placeholder="First Name" ref="firstname" className="name" name="firstname" 
                                            onChange={this.handleChange}  value={firstname} ></input>
                                            
                                            <input type="text" placeholder="Last Name" ref="lastname" className="name2" name="lastname" 
                                            onChange={this.handleChange}  value={lastname}></input>
                                        </div>
                                        <li className="errorpn1">{this.state.firstnameError}</li>
                                        <li className="errorpn2">{this.state.lastnameError}</li>

                                    </div>
                                    <div className="phone1">
                                        <i class="fas fa-phone"></i>
                                        <input type="tel" placeholder="Mobile Number" ref="number" className="phone" name="number" 
                                        onChange={this.handleChange}  value={number}></input>
                                        <li className="errorpnm">{this.state.numberError}</li>
                                    </div>
                                    <div className="gender">
                                        <input type="radio"
                                        onChange={this.handleGenderChange}  
                                        checked={this.state.genderchange === "Female"} id="female"  value="Female" name="male" />
                                        <label htmlFor="female">&#9792; Female </label>
                                        <input type="radio"
                                        onChange={this.handleGenderChange}
                                        checked={this.state.genderchange === "male"} id="male" value="male" name="male"/>
                                        <label htmlFor="male">&#9794; Male</label>
                                    </div>
                            
                            </div>
                            <div className="pinforight">
                                <div className="mc">
                                    <div className="mc1">
                                        <p>Medical Condition</p>
                                    </div>
                                <div className="mcc">
                                    <ul>
                                    <li className="pregnancy1">
                                        <input type="radio" 
                                        onChange={this.handleMedicalCondition}
                                        checked={this.state.medicalcondition === "Pregnancy"} id="Pregnancy" value="Pregnancy" name="Pregnancy"/>
                                        <label htmlFor="Pregnancy"><img src={mp1} alt="pregnancy" className="pregnancy" />Pregnancy</label>
                                    </li>
                                    <li className="fertility1">
                                        <img src={mp2} alt="fertility" className="fertility" />
                                        <input type="radio"
                                        onChange={this.handleMedicalCondition}
                                        checked={this.state.medicalcondition === "Infertility"} id="Infertility" value="Infertility" name="Infertility"/>
                                        <label htmlFor="Infertility">Infertility</label>
                                    </li>
                                    <li className="others1">
                                        <img src={mp3} alt="others" className="others" />
                                        <input type="radio"
                                        onChange={this.handleMedicalCondition}
                                        checked={this.state.medicalcondition === "Others"} id="Others" value="Others" name="Others"/>
                                        <label htmlFor="Others">Others</label>
                                    </li>
                                    </ul>
                                </div>
                                    
                            </div>

                            </div>
                            
                        </form>
                   </div>
               </div>
           </div>
         );
    }
}
