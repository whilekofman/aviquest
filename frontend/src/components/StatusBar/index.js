import './index.css'
import Avitar from "./Avitar";
import AvitarStats from "./AvitarStats";
import AviQuestSprite from "./AviQuestSprite";
import HPBar from './HealthBar';
import Equipments from './Equipments';
import * as demouser from './demouser'
import { useState } from 'react';
import AvitarShow from '../AvitarModal';

const StatusBar = () => {
    const user = demouser.user
    const monster = demouser.monster




    return ( 


            <div className="statusBar">
                <div className="statusBarLeft">
                    <Avitar className="statusBarAvitar" />
                    <AvitarStats className="statusBarAvitarStats" user={user} />
                </div>

                <div className="statusBarMid">
                    <Equipments equipments={user.equipment} />
                </div>

                <div className="statusBarRight">
                    <AviQuestSprite className="aviQuestSprite" />
                    
                    <HPBar health={monster.health}/>
                </div> 
            </div>

     );

}
 
export default StatusBar;