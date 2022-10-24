import './index.css'
import Avitar from "./Avitar";
import AvitarStats from "./AvitarStats";
import AviQuestSprite from "./AviQuestSprite";
import HPBar from './HealthBar';
import Equipments from './Equipments';
import * as demouser from './demouser'
import { useState } from 'react';
import AvitarShow from '../AvitarShow';

const StatusBar = () => {
    const user = demouser.user
    const monster = demouser.monster

    const [open, setOpen] = useState(false)

    const openModal = ((e) => {
        setOpen(true)
    })


    return ( 
        <div className="container">
            <AvitarShow open={open} />

            <div className="statusBar">
                <div className="statusBarLeft">
                    <Avitar className="statusBarAvitar" onClick={openModal}/>
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
        </div>
     );

}
 
export default StatusBar;