import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import Registerpatient from '../PatientData/RegisterPatient'
import AccountPage from '../Account';
// import PatientList from '../../Containers/PatientDetails/Patientdetails';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import MedCondition from '../PatientData/MedCondition/MedCondition';
import Infertility from '../PatientData/MedCondition/Infertility';
import PatientDetails from '../PatientData/MedCondition/PatientDetails';
import PregnancyShow from '../PatientData/MedCondition/PregnancyShow';
import PatientList from '../PatientData/PatientList';
// import RegPatient from './components/PatientData/regPatient';
import InfertilityShow from '../PatientData/MedCondition/InfertilityShow';
import  NotFound from '../NotFound';
import PatientInfoForm from '../PatientData/MedCondition/patientinformationdata';
import Calendar from '../PatientData/MedCondition/Calendar';

const App = () => (
  <div>
  <Navigation />
  
  <div>
  <BrowserRouter>    
    <Switch>    
     
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />    
      <Route exact path={ROUTES.REGISTERPATIENT} component={Registerpatient} />
      {/* <Route exact path={ROUTES.PATIENTDETAILS} component={PatientList} /> */}
      <Route path="/PatientList" exact component={PatientList}/>
      <Route path="/patientdetail/:id" component={PatientDetails}/>
      <Route path="/pregnancyEdit/:id" component={MedCondition}/>
      <Route path="/pregnancyShow/:id" component={PregnancyShow}/>
      <Route path="/infertilityShow/:id" component={InfertilityShow} />
      <Route path="/infertilityEdit/:id" component={Infertility} />
      <Route path="/patientinfoform/:id" component={PatientInfoForm} />
      <Route path="/AllAppointments/" component={Calendar} />
      <Route path= "*" component={NotFound} />     
    
      </Switch>    
  </BrowserRouter>
  </div>
  </div>
);

export default withAuthentication(App);
