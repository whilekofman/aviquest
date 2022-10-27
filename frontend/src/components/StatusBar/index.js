import './StatusBar.css'
import Avitar from "./Avitar";
import AvitarStats from "./AvitarStats";
import AviQuestSprite from "./AviQuestSprite";
import HPBar from './HealthBar';
import Equipments from './Equipments';
import * as demouser from '../Util/demouser'
import { useEffect, useState } from 'react';
import AvitarShow from '../AvitarModal';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/session';

const StatusBar = () => {

    const user = demouser.user
    const monster = demouser.monster
    const currentUser = useSelector(state => state.session.user)
    const dispatch = useDispatch()


  return  (


            <div className="statusBar">
                <div className="statusBarLeft">
                    <Avitar className="statusBarAvitar" />
                    <AvitarStats className="statusBarAvitarStats" user={user} />
                </div>

                <div className="statusBarMid">
                    <Equipments equipments={user.equipment} />
                </div>

                <div className="statusBarRight">
                    <AviQuestSprite className="aviQuestSprite" user={user} monster={monster} />
                    
                    <HPBar health={monster.health}/>
                </div> 
            </div>

     );

}
 
export default StatusBar;