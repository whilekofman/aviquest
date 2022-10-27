import aviQuest from './RunningSprite.gif'
import * as seed from '../Util/demouser.js'
import { useRef } from 'react'

const AviQuestSprite = ({user, monster}) => {
    const ref = useRef()
    const hp = (monster.currentHealth / monster.maxHealth) * 100 + 40


    return (
        <div className="aviQuestSprite" id='aviQuestSprite' ref={useRef()}>
            <img src={user.movingImageUrl} className="runningSprite" alt="" />


            <img src={monster.movingUrl} className="runningSprite" style={{opacity: `${hp}%`}} />
        </div>
      );
}
 
export default AviQuestSprite;