import React  from "react";
import Eugene from '../../assets/images/eugene.jpeg'
import GitHub from '../../assets/images/icons8-github-50.png'


const Eugene = () => {
    return ( 
        <>
        <div className="eugene-name">
            <H1>Eugene</H1>
        </div>
        <div className="eugene-about-container">
            <div className="eugene-photo">
                <img src={Eugene} alt="Eugenes photo" className="eugene-img"/>
            </div>
            <div className="eugene-about-blurb">
                <p>Eugene is a New York based Software Engineer.  You can contact him using the links below or send him an <a href="mailto:eugenekofman@gmail.com">email!</a></p>
            </div>
            <div className="eugene-profesional-links">
                <div className="eugene-git">

                </div>
            </div>
        </div>
        </>
     );
}
 
export default Eugene;