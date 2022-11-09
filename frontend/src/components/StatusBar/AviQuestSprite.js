import aviQuest from './RunningSprite.gif'
import * as seed from '../Util/demouser.js'
import { useEffect, useRef, useState } from 'react'

const AviQuestSprite = ({user, monster}) => {

    const hp = (monster.currentHealth / monster.maxHealth) * 100 + 40
    const [shake, setShake] = useState(false)
    
    useEffect(() => {

        // const ele = Array.from(document.getElementsByClassName('aviQuestSprite'));
        // ele.id = "shake";
        setShake(!shake)
        // console.log(ele);
        

    },[monster.currentHealth])

    return (
        <div className="aviQuestSprite" id={monster.currentHealth <1 ? 'shake' : ''} >
            <img src={user.movingImageUrl} className="runningSprite" alt="" />


            <img src={monster.movingUrl} className="runningSprite" style={{opacity: `${hp}%`}} id={shake ? "shake" : ""} />
        </div>
      );
}
 
export default AviQuestSprite;