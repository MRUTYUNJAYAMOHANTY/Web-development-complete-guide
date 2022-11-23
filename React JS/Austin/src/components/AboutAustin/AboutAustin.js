import React,{Component} from 'react';
import './AboutAustin.css';
import ArtCulture from '../../assets/images/art@3x.png';
import AustinTech from '../../assets/images/tech@3x.png';
import AustinEducation from '../../assets/images/edu@3x.png';

class AboutAustin extends Component {
    render(){
        return(
            <div className="AustinCity" >
                <div className="ArtCultureContent" >
                    <div className="ArtCultureAbout">
                    <img className="ArtCultureImage" src={ArtCulture} alt="ArtCulture"/>
                    <div className="ArtCultureHeading" >
                        <p>Art & Culture</p>
                    </div>
                    <img className="ArtCultureMobileImage" src={ArtCulture} alt="ArtCulture"/>
                        <p className="ArtCultureMatter" >
                        Referred to as the Live Music Capital of the World, 
                        it’s not hard to walk down any given street on any 
                        given night of the week and see a great band playing. 
                        </p>
                        <p className="ArtCultureMatter" >
                        Austin also hosts some of the country’s foremost festivals,including SXSW, 
                        ACL, and Fun Fun Fun Fest, all of which contribute to the growing amount of talent 
                        relocating to the city. 
                        </p>
                    </div>
                </div>
                <div>
                <div className="AustinTech" >
                    <img className="AustinTechImage" src={AustinTech} alt="TechImage" />
                    <div className="AboutAustinTech">
                        <p className="TechHeading" >Tech</p>
                        <img className="ArtCultureMobileImage" src={AustinTech} alt="TechImage"/>
                        <p className="TechMatter">
                        Its business climate enjoys the open policies and low taxes that the rest of Texas has, 
                        but it also includes the innovative and hustling nature of the slew of technology startups 
                        moving here.</p>
                        <p  >
                        ‘Silicon Hills’ is quickly becoming a hotbed for entrepreneurial talent. 
                        </p>
                    </div>
                </div>
                </div>
                <div className="AustinEduContent" >
                    <div className="ArtCultureAbout" >
                    <img className="ArtCultureImage" src={AustinEducation} alt="AustinEducation"/>
                    <div className="AustineEduHeading" >
                        <p>Education</p>
                    </div>
                    <img className="ArtCultureMobileImage" src={AustinEducation} alt="AustinEducation"/>
                        <p className="ArtCultureMatter" >
                        At the center of Austin is the University of Texas, which now enrolls over 50,000 students. 
                        Saturdays in fall are electric events marked by huge crowds dressed in burnt orange. 
                        </p>
                        <p className="ArtCultureMatter" >
                        The school world renowned, topping national rankings in computer science, 
                        accounting, and engineering.
                        Austin is also a unique culinary experience.
                        </p>
                    </div>
                </div>
                <hr className="AboutAustinEnd"></hr>
            </div>
        )
    }
}
export default AboutAustin;