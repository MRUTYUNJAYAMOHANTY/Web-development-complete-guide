import React,{Component} from 'react';
import './NavigationItem.css';
import ComLogo from '../../assets/images/Group 29@3x.png';
import { Link } from 'react-scroll';



class NavigationItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            // isExpanded:false
            showMenu:false
        } 
    }
    // handleToggle(e){
    //     e.preventDefault();
    //     this.setState({
    //         isExpanded: !this.state.isExpanded
    //     })
    // }
    // navHamburger = () =>  {
    //     let x = document.getElementById("NavigationHam");
    //     if (x.className === "Navigation-anchor") {
    //       x.className += "responsive";
    //     } else {
    //       x.className = "Navigation-anchor";
    //     }
    //   }
    render(){
        // const { isExpanded } = this.state;
        const menuChange = () =>{
            this.setState(prevState => ({
              showMenu: !prevState.showMenu
            }))
        }
        return(
            <div className="NavigarionBar" >
                <div className="Navigation">
                    <div className="navigation-logo">
                        <img className="Comlogo" src={ComLogo} alt="Company Logo"/>
                    </div>
                    <div className={`Navigation-anchor ${ this.state.showMenu ? 'menuShow':'menuHide'}`} id="NavigationHam">
                    <Link
                        activeClassName="active"
                        to="whyaustin"
                        className="nav1"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration= {1000}
                    >why austin</Link>
                    <Link
                        activeClassName="active"
                        to="austinofficemarket"
                        className="nav1"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration= {1000}
                    >austin office market</Link>
                    <Link
                        activeClassName="active"
                        to="topofficeowners"
                        className="nav1"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration= {1000}
                    >top office owners</Link>
                    <Link
                        activeClassName="active"
                        to="austinlandscape"
                        className="nav1"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration= {1000}
                    >austin landscape</Link>
                    {/* <li className="nav1" ><a href="">why austin</a></li>
                    <li className="nav2" ><a href="">austin office market</a></li>
                    <li className="nav3" ><a href="">top office owners</a></li>
                    <li className="nav4" ><a href="">austin landscape</a></li> */}
                    </div>
                </div>
                    {/* <input type="checkbox" id="chk"/> */}
                    <label className="icon">
                        <i className="fa fa-bars" 
                        aria-hidden="true" 
                        onClick={ menuChange }></i>
                    </label> 
            </div> 
        )
    }
}

export default NavigationItem;