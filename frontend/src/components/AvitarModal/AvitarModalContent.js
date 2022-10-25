import AvitarPic from "../StatusBar/AvitarPic";
import * as demouser from '../StatusBar/demouser'
import HPBar from "../StatusBar/HealthBar";
import AvitarStats from "../StatusBar/AvitarStats";


const AvitarModalContent = () => {

    const user = demouser.user

    return ( 
        <div  onClick={(e)=> e.stopPropagation()} className="AvitarModalContent" >
            <div className="AvitarModalPic">
                <AvitarPic/>
            </div>
            <br />
            <AvitarStats user={user} id="AvitarModalStats"/>
            <br />
            <br />
            {user.username}
            <br />
            <br />
            {user.password}
            <br />
            <br />
            {user.atk}

        </div>
     );
}
 
export default AvitarModalContent;