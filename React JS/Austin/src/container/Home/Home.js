import React,{Component} from 'react';
import './Home.css';
import NavigationItem from '../../components/NavigationItem/NavigationItem';
import BackgroundImage from '../../assets/images/pennybacker_bridge_austin-wallpaper-2048x1152@3x.png';
import AustinIntro from '../../components/AustinIntro/AustinIntro';
import TrendingBox from '../../components/TrendingBoxes/TrendingBox';
import WhyAustin from '../../components/WhyAustin/WhyAustin';
import GroupOfPeople from '../../components/WhyAustin/GroupOfPeople';
import AboutAustin from '../../components/AboutAustin/AboutAustin';
import AustinOfcMarket from '../../components/AustinOfcMarket/AustinOfcMarket';
import AustinOfcOwner from '../../components/AustinOfcOwners/AustinOfcOwners';
import AustinMap from '../../components/AustinMap/AustinMap';
import AustinPlace from '../../components/AustinPlaces/AustinPlace';
import AustinSub from '../../components/AustinSub/AustinSub';
import ContactForm from '../../components/ContactForm/ContactForm';

// const Bimg = {
//     width: "100%",
//     height: "606px",
//     backgroundColor: "#222222",
//     // opacity: "0.8",
//     backgroundImage: `url(${BackgroundImage})`,
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//     backgroundSize: "100% 100%",
//     position:"absolute", 
// }


class HomePage extends Component {
    render(){
        return(
            <section className="AustinWebSite" >
            <div className="HomePage">
                <img className="HomeImage" src={BackgroundImage} alt="banner" />
                <div className="BannerContent" >
                    <NavigationItem className="NavMediaQueryRWD" />
                    <AustinIntro />
                    <TrendingBox />
                </div>
            </div>
                <div>
                    <WhyAustin />
                </div>
                <div>
                    <GroupOfPeople />
                </div>
                <div>
                    <AboutAustin />
                </div>
                <div>
                    <AustinOfcMarket />
                </div>
                <div>
                    <AustinOfcOwner />
                </div>
                <div>
                    <AustinMap />
                </div>
                <div>
                    <AustinPlace />
                </div>
                <div>
                    <AustinSub />
                </div>
                <div>
                    <ContactForm />
                </div>
            </section>
            
        )
    }
}

export default HomePage;