import aviQuest from './RunningSprite.gif'
import * as seed from '../Util/demouser.js'

const AviQuestSprite = ({user, monster}) => {
    const hp = (user.quest.monster.health.currentHealth / user.quest.monster.health.maxHealth) * 100 + 40


    return (
        <div className="aviQuestSprite">
            <img src={user.imageURL} className="runningSprite" alt="" />


            <img src={user.quest.monster.movingUrl} className="runningSprite" style={{opacity: `${hp}%`}} />
        </div>
      );
}
 
export default AviQuestSprite;