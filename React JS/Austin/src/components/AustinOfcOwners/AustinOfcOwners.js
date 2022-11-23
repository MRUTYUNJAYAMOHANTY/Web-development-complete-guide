import React, {Component} from 'react';
import './AustinOfcOwners.css';
import WorldClass from '../../assets/images/wcpc@3x.png';
import TierReit from '../../assets/images/tier@3x.png';
import CalStrs from '../../assets/images/calstrs@3x.png';
import Dell from '../../assets/images/dell@3x.png';
import Brandy from '../../assets/images/Group 14@3x.png';
import Accesso from '../../assets/images/accesso@3x.png';
import Dra from '../../assets/images/dra@3x.png';
import Equity from '../../assets/images/equity@3x.png';
import Cousins from '../../assets/images/cousins@3x.png';
import InterContinental from '../../assets/images/intercontinental@3x.png';
import ContactForm from '../../components/ContactForm/ContactForm';
import { Link } from 'react-scroll';
import $ from 'jquery';
import {} from '../../components/ContactForm/ContactForm';

class AustinOfcOwners extends Component{
    constructor(props){
        super(props);
        this.state = {
            getInTouchIndex : -1,
            // data:id,
            // data:value
        };
    }
    componentDidMount(){
        this._getInTouch();
    }
    _getInTouch = () => {
        $("#worldclass").click(function() {
            $('#getIntouchSelect').val('WorldClass').trigger('change');
        })
    }
    render(){
        // const selectProperty = () =>{
        //     this.setState({
        //         getInTouchIndex: index
        //     })
        //     this.props.getInTouchIndex(index);
        // }
        return(
                <div className="TotalOwnerContent" id="topofficeowners">
                    <h1 className="OwnerHeading" >Austin's Largest Office Owners</h1>
                    <div className="CompanyContent">
                        <div className="WorldClass" ref="GetInTouchValue">
                            <img className="WorldClassPicture" src={WorldClass} alt="WorldClass" />
                            <div className="WorldClassMatter" >
                            <p className="WorldClassHeading">1  -  World Class Property Company</p>
                            <img className="WorldClassMobilePicture" src={WorldClass} alt="WorldClass" />
                            <p className="WorldClassContent" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            </p>
                            <div>
                            <Link
                            activeClass="active"
                            to="ContactForm"
                            className="GetInTouch"
                            id="worldclass"
                            // onClick={ () =>{ selectProperty(index)}}
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration= {1000}
                            ref="WorldClass"
                            >Get In Touch</Link>
                            </div>
                            </div>
                        </div>
                        <div className="WorldClass">
                            <img className="WorldClassPicture" src={TierReit} alt="TierReit" />
                            <div className="WorldClassMatter" >
                            <p className="WorldClassHeading">2  -  TIER REIT</p>
                            <img className="WorldClassMobilePicture" src={TierReit} alt="TierReit" />
                            <p className="WorldClassContent" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            </p>
                            <div>
                            <Link
                            activeClass="active"
                            to="ContactForm"
                            className="GetInTouch"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration= {1000}
                            value="TierReit"
                            >Get In Touch</Link>
                            </div>
                            </div>
                        </div>
                        <div className="WorldClass">
                            <img className="WorldClassPicture" src={CalStrs} alt="CalStrs" />
                            <div className="WorldClassMatter" >
                            <p className="WorldClassHeading">3  -  CalSTRS</p>
                            <img className="WorldClassMobilePicture" src={CalStrs} alt="CalStrs" />
                            <p className="WorldClassContent" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            </p>
                            <div>
                            <Link
                            activeClass="active"
                            to="ContactForm"
                            className="GetInTouch"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration= {1000}
                            value="Calstrs"
                            >Get In Touch</Link>
                            </div>
                            </div>
                        </div>
                        <div className="WorldClass">
                            <img className="WorldClassPicture" src={Dell} alt="Dell" />
                            <div className="WorldClassMatter" >
                            <p className="WorldClassHeading">4  -  Dell, Inc.</p>
                            <img className="WorldClassMobilePicture" src={Dell} alt="Dell" />
                            <p className="WorldClassContent" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            </p>
                            <div>
                            <Link
                            activeClass="active"
                            to="ContactForm"
                            className="GetInTouch"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration= {1000}
                            value="Dell">Get In Touch</Link>
                            </div>
                            </div>
                        </div>
                        <div className="WorldClass">
                            <img className="WorldClassPicture" src={Brandy} alt="BrandyWine" />
                            <div className="WorldClassMatter" >
                            <p className="WorldClassHeading">5  -  Brandywine Realty Trust</p>
                            <img className="WorldClassMobilePicture" src={Brandy} alt="BrandyWine" />
                            <p className="WorldClassContent" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            </p>
                            <div>
                            <Link
                            activeClass="active"
                            to="ContactForm"
                            className="GetInTouch"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration= {1000}
                            value="BrandyWine">
                            Get In Touch</Link>
                            </div>
                            </div>
                        </div>
                        <div className="WorldClass">
                            <img className="WorldClassPicture" src={Accesso} alt="Accesso" />
                            <div className="WorldClassMatter" >
                            <p className="WorldClassHeading">6  -  Accesso Partners</p>
                            <img className="WorldClassMobilePicture" src={Accesso} alt="Accesso" />
                            <p className="WorldClassContent" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            </p>
                            <div>
                            <Link
                            activeClass="active"
                            to="ContactForm"
                            className="GetInTouch"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration= {1000}
                            value="Accesso">
                            Get In Touch</Link>
                            </div>
                            </div>
                        </div>
                        <div className="WorldClass">
                            <img className="WorldClassPicture" src={Dra} alt="Dra" />
                            <div className="WorldClassMatter" >
                            <p className="WorldClassHeading">7  -  DRA Advisors</p>
                            <img className="WorldClassMobilePicture" src={Dra} alt="Dra" />
                            <p className="WorldClassContent" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            </p>
                            <div>
                            <Link
                            activeClass="active"
                            to="ContactForm"
                            className="GetInTouch"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration= {1000}
                            value="Dra">
                            Get In Touch</Link>
                            </div>
                            </div>
                        </div>
                        <div className="WorldClass">
                            <img className="WorldClassPicture" src={Equity} alt="Equity" />
                            <div className="WorldClassMatter" >
                            <p className="WorldClassHeading">8  -  Equity Commonwealth</p>
                            <img className="WorldClassMobilePicture" src={Equity} alt="Equity" />
                            <p className="WorldClassContent" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            </p>
                            <div>
                            <Link
                            activeClass="active"
                            to="ContactForm"
                            className="GetInTouch"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration= {1000}
                            value="Equity">
                            Get In Touch</Link>
                            </div>
                            </div>
                        </div>
                        <div className="WorldClass">
                            <img className="WorldClassPicture" src={Cousins} alt="Cousins" />
                            <div className="WorldClassMatter" >
                            <p className="WorldClassHeading">9  -  Cousins Properties</p>
                            <img className="WorldClassMobilePicture" src={Cousins} alt="Cousins" />
                            <p className="WorldClassContent" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            </p>
                            <div>
                            <Link
                            activeClass="active"
                            to="ContactForm"
                            className="GetInTouch"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration= {1000}
                            value="Cousins">
                            Get In Touch</Link>
                            </div>
                            </div>
                        </div>
                        <div className="WorldClass">
                            <img className="WorldClassPicture" src={InterContinental} alt="InterContinental" />
                            <div className="WorldClassMatter" >
                            <p className="WorldClassHeading">10  -  Intercontinental Real Estate</p>
                            <img className="WorldClassMobilePicture" src={InterContinental} alt="InterContinental" />
                            <p className="WorldClassContent" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            </p>
                            <div>
                            <Link
                            activeClass="active"
                            to="ContactForm"
                            className="GetInTouch"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration= {1000}
                            value="RealEstate">
                            Get In Touch</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default AustinOfcOwners;