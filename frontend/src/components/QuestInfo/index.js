import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './QuestInfo.css';
import * as questActions from '../../store/quest'

const QuestInfo = ({currentQuest}) => {

    // function restartAnimation() {
    //     let circle = document.querySelector(".circle");
  
    //     circle.style.animationName = "none";
  
    //     requestAnimationFrame(() => {
    //       setTimeout(() => {
    //         circle.style.animationName = ""
    //       }, 0);
    //     });
    //   }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(questActions.getQuests);
    }, []);

    const quest = useSelector(state => state.session.user.quest[0]);
    // console.log(quest);

    return ( 
        <div className='quest-info-container'>
            <div className='quest-info-top'>
                <div className='quest-info-window'>
                    <img src={quest.monster.imageUrl} 
                    className="quest-window-image"
                    />
                </div>
                <div className='quest-info-details-container'>
                    <div className='quest-info-title'>{quest.monster.name}</div>
                    <div className='quest-info-monster-health'>HP: {quest.monster.maxHealth}</div>
                    <div className='quest-info-monster-attack'>ATK: {quest.monster.attack}</div>
                    {/* <div className='quest-info-description'>{currentQuest.description}</div> */}
                </div>
            </div>
            <div className='quest-info-details'>{quest.text}
                <div className='quest-details-cover'></div>
            </div>
        </div>
     );
}
 
export default QuestInfo;