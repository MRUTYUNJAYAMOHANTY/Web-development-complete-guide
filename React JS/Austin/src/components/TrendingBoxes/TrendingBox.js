import React, {Component} from 'react';
import './TrendingBox.css';

class TrendingBox extends Component{
    render(){
        return(
            <div className="BoxesTrending" >
                <div className="Trending-box" >
                    <div className="Job-box" >
                    <p className="trending-numbers" >#1</p>
                    <p className="job-seeker" >City for Job Seekers</p>
                    <p className="news-media" >-Nerd Wallet 12/19/16</p>
                    </div>
                </div>
                <div className="Trending-box" >
                    <div className="Income-tax" >
                    <p className="trending-numbers" >0%</p>
                    <p className="job-seeker" >State and Local Income Tax</p>
                </div>
                </div>
                <div className="Trending-box" >
                    <div className="Tech-jobs" >
                    <p className="trending-numbers">#3</p>
                    <p className="job-seeker" >City Creating the Most Tech Jobs in 2017</p>
                    <p className="forbs-media" >-Forbes 3/17/17</p>
                    </div>
                </div>
                <div className="Trending-box" >
                    <div className="Us-millenials" >
                    <p className="trending-numbers">#1</p>
                    <p className="job-seeker" >U.S.City for Millenials</p>
                    <p className="news-media" >-Nestpick 4/19/17</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrendingBox;