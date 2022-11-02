import React  from "react";
import DanielPic from '../../assets/images/daniel.jpeg'
import GitHub from '../../assets/images/icons8-github-50.png'
import LinkedIn from '../../assets/images/icons8-linkedin-circled-50.png'
import AngelList from '../../assets/images/icons8-angellist-50.png'


const Daniel = () => {
    return ( 
        <>
            <div className="engineer-avitar">
                <img src="https://aviquest-dev.s3.amazonaws.com/GIFS/wilson.gif" alt="dan-avitar" className="self-avitar"/>
            </div>
            <div className="daniel-name">
                <H1>Daniel Li</H1>
            </div>
            <div className="engineer-about-container">
                <div className="engineer-photo">
                    <img src={DanielPic} alt="Daniels photo" className="engineer-img"/>
                </div>
                <div className="engineer-about-blurb">
                    <p>Daniel crafted the design language of AviQuest and served as our comedic relief. You can contact him using the links below or send him an <a href="mailto:dli53@outlook.com">email!</a></p>
                </div>
                <div className="engineer-profesional-links">
                    <div className="engineer-git">
                        <a href="https://github.com/DLi53" target="_blank"><img src={GitHub} alt="Github logo" /> </a>
                    </div>
                    <div className="engineer-linkedin">
                        <a href="https://www.linkedin.com/in/danielli52" target="_blank"><img src={LinkedIn} alt="LinkedIn logo" /> </a>
                    </div>
                    <div className="engineer-angellist">
                        <a href="https://angel.co/u/daniel-li-66" target="_blank"><img src={AngelList} alt="AngelList logo" /></a>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Daniel;