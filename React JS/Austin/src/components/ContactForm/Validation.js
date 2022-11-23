// import React,{Component} from 'react';
// import ContactForm from '../ContactForm/ContactForm';

// class Validation extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             fields: {},
//             errors: {},
//         }
//         // this.handleChange = this.handleChange.bind(this);
//         // this.submitForm = this.handleChange.bind(this);
//     }
//     validationHandle(){
//         const fields = this.state.fields;
//         const errors ={};
//         let IsFormValid = true;

//         if(!fields["name"]){
//             IsFormValid = false;
//             errors["name"]= "*Please enter name" 
//         }
//         if(typeof fields["name"] !== "undefined"){
//             if(!fields["name"].match(/^[a-zA-Z]+$/)){
//                 IsFormValid = false;
//                 errors["name"]= "*Enter valid name" 
//             }
//         }
//         if(!fields["email"]){
//             IsFormValid = false;
//             errors["email"]= "*Please enter EmailID";
//         }
//         if(typeof fields["email"] !== "undefined"){
//             const atPos = fields["email"].lastIndexOf('@');
//             const dotPos = fields["email"].lastIndexOf('.');
//             if(!(atPos < dotPos && atPos > 0 && fields ["email"].indexOf('@@') == -1 && dotPos > 2 && 
//             (fields ["email"].length-dotPos)>2)){
//                 IsFormValid = false;
//                 errors["email"]= "*Enter Valid EmailID";
//             }
//         }
//         if(!fields["number"]){
//           IsFormValid = false;
//           errors["number"] = "*Please enter number"
//         }
//         if(typeof fields["number"] !== "undefined"){
//           if(!fields["number"].match(/^[0-9]*$/)){
//               IsFormValid = false;
//               errors["number"]= "*Enter valid number" 
//           }
//       }
//       if(!fields["select"]){
//         IsFormValid = false;
//         errors["select"]="*Please select any one option"
//       }
//         this.setState({errors:errors});
//         return IsFormValid;
//     };
//         submitForm(e){
//             e.preventDefault();
//             if(this.validationHandle()){
//               alert("yay")
//             }else{
//                 alert("Plese check all fields")
//             }
//         }
//         handleChange(field, e){
//             const fields = this.state.fields;
//             fields[field] = e.target.value;
//             this.setState({fields});
//         }
  
//     render(){
//         return(
//             <ContactForm />
//         );
//     }
// }

// export default Validation;