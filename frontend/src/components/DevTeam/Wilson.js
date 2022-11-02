import React  from "react";
import WilsonPic from '../../assets/images/wilson.jpeg'
import GitHub from '../../assets/images/icons8-github-50.png'
import LinkedIn from '../../assets/images/icons8-linkedin-circled-50.png'
import AngelList from '../../assets/images/icons8-angellist-50.png'


const Wilson = () => {
    return ( 
        <>
        <div className="inner-avitar-box">
            <img src="https://aviquest-dev.s3.amazonaws.com/GIFS/wilson.gif" alt="eugene-avitar" className="self-avitar"/>
        </div>
        <div className="engineer-name">
            Wilson Chen
        </div>
        <div className="engineer-about-container">
            <div className="engineer-photo">
                <img src={WilsonPic} alt="Wilsons photo" className="engineer-img"/>
            </div>
            <div className="engineer-about-blurb">
                <p>Wilson is the front-end lead on this project, and sounding board for the team accross all aspects of the project. You can contact him using the links below or send him an <a href="mailto:wilsonchen901@gmail.com">email!</a></p>
            </div>
            <div className="engineer-profesional-links">
                <div className="engineer-git">
                    <a href="https://github.com/wichen42" target="_blank"><img src={GitHub} alt="Github logo" /> </a>
                </div>
                <div className="engineer-linkedin">
                    <a href="https://www.linkedin.com/in/wchen42" target="_blank"><img src={LinkedIn} alt="LinkedIn logo" /> </a>
                </div>
                <div className="engineer-angellist">
                    <a href="https://angel.co/u/wilson-chen-19" target="_blank"><img src={AngelList} alt="AngelList logo" /></a>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Wilson;