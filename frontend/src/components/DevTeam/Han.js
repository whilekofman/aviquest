import React  from "react";
import HanPic from '../../assets/images/han.jpeg'
import GitHub from '../../assets/images/icons8-github-50.png'
import LinkedIn from '../../assets/images/icons8-linkedin-circled-50.png'
import AngelList from '../../assets/images/icons8-angellist-50.png'


const Han = () => {
    return ( 
        <div className="engineer-subcontainer">
            <div className="engineer-avitar">
                <div className="inner-avitar-box">
                    <img src="https://aviquest-dev.s3.amazonaws.com/GIFS/han.gif" alt="han-avitar" className="self-avitar"/>
                </div>

            </div>
            <div className="engineer-name">
                Han Chen
            </div>
            <div className="engineer-about-container">
                <div className="engineer-photo">
                    <img src={HanPic} alt="Han" className="engineer-img"/>
                </div>
                <div className="engineer-about-blurb">
                    <p className="engineer-blurb">Han served as team-lead and project flex, working on all aspects of AviQuest.  Han was our northstar and guiding light. Checkout Han's <a href="https://www.hanchen.dev" target="_blank">portfolio</a> or contact him via <a href="mailto:hanmikechen@gmail.com">email!</a></p>
                </div>
                <div className="engineer-profesional-links">
                    <div className="engineer-git">
                        <a href="https://github.com/hannnmc" target="_blank"><img src={GitHub} alt="Github logo" /> </a>
                    </div>
                    <div className="engineer-linkedin">
                        <a href="https://www.linkedin.com/in/hanchen28/" target="_blank"><img src={LinkedIn} alt="LinkedIn logo" /> </a>
                    </div>
                    <div className="engineer-angellist">
                        <a href="https://angel.co/u/han-chen-17" target="_blank"><img src={AngelList} alt="AngelList logo" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Han;