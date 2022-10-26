import aviQuest from './RunningSprite.gif'
import * as seed from './demouser.js'

const AviQuestSprite = ({user, monster}) => {
    const hp = (seed.monster.health.currenthp / seed.monster.health.maxhp) * 100 + 40


    return (
        <div className="aviQuestSprite">
            <img src={user.imageURL} className="runningSprite" alt="" />
            <img src={monster.monsterURL} className="runningSprite" style={{opacity: `${hp}%`}} />
        </div>
      );
}
 
export default AviQuestSprite;