import React  from "react";
import EugenePic from '../../assets/images/eugene.jpeg'
import GitHub from '../../assets/images/icons8-github-50.png'
import LinkedIn from '../../assets/images/icons8-linkedin-circled-50.png'
import AngelList from '../../assets/images/icons8-angellist-50.png'


const Eugene = () => {
    return ( 
        <div className="engineer-subcontainer">
            <div className="engineer-avitar">
                <div className="inner-avitar-box">
                    <img src="https://aviquest-dev.s3.amazonaws.com/GIFS/gold-viking.gif" alt="eugene-avitar" className="self-avitar"/>
                </div>
            </div>
            <div className="engineer-name">
                Eugene Kofman
            </div>
            <div className="engineer-about-container">
                <div className="engineer-photo">
                    <img src={EugenePic} alt="Eugenes photo" className="engineer-img"/>
                </div>
                <div className="engineer-about-blurb">
                    <p className="engineer-blurb">Eugene worked as the backend lead on this project and Wilson's personal sounding board.  Checkout Eugene's <a href="https://www.eugenekofman.com" target="_blank">portfolio</a> or contact him via <a href="mailto:eugenekofman@gmail.com">email!</a></p>
                </div>
                <div className="engineer-profesional-links">
                    <div className="engineer-git">
                        <a href="https://github.com/whilekofman" target="_blank"><img src={GitHub} alt="Github logo" /> </a>
                    </div>
                    <div className="engineer-linkedin">
                        <a href="https://www.linkedin.com/in/eugene-kofman-1119aa189/" target="_blank"><img src={LinkedIn} alt="LinkedIn logo" /> </a>
                    </div>
                    <div className="engineer-angellist">
                        <a href="https://angel.co/u/eugene-kofman" target="_blank"><img src={AngelList} alt="AngelList logo" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Eugene;