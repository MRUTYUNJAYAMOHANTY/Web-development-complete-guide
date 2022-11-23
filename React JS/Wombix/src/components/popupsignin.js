import React from 'react';  
import './popupsignin.css';  
import * as ROUTES from '../../src/constants/routes';
import { withRouter,Link } from 'react-router-dom';

class Popupsignin extends React.Component {  
  render() {  
return (  
<div className='popup'>  
<div className='popup\_inner'>  
<h1>{this.props.text}</h1>  
{/* <button onClick="{this.onSubmit}">close me</button>  */}
<Link to={ROUTES.SIGN_IN} className="closeme">close me</Link>
{/* onClick={this.props.closePopup}  */}
</div>  
</div>  
);  
}  
}  

export default Popupsignin;