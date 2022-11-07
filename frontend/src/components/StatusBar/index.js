import './StatusBar.css'
import Avitar from "./Avitar";
import AvitarStats from "./AvitarStats";
import AviQuestSprite from "./AviQuestSprite";
import HPBar from './HealthBar';
import Equipments from './Equipments';
import * as demouser from '../Util/demouser'
import { useDispatch, useSelector } from 'react-redux';
const StatusBar = () => {

    const user = demouser.user
    const monster = demouser.monster
    const currentUser = useSelector(state => state.session.user)
    const dispatch = useDispatch()


    const monsterHealth = {
        currentHealth: currentUser.quest[0].monster.currentHealth,
        maxHealth: currentUser.quest[0].monster.maxHealth
    }

  return (


            <div className="statusBar">
                <div className="statusBarLeft">
                    <Avitar className="statusBarAvitar" />
                    <AvitarStats className="statusBarAvitarStats" user={currentUser} />
                </div>

                <div className="statusBarMid">
                    <Equipments equipments={currentUser.equipment} />
                </div>

                <div className="statusBarRight">
                    <AviQuestSprite className="aviQuestSprite" user={currentUser} monster={currentUser.quest[0].monster} />
                    
                    <HPBar health={monsterHealth}/>
                </div> 
            </div>

     );

}
 
export default StatusBar;