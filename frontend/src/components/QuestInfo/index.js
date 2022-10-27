import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './QuestInfo.css';
import * as questActions from '../../store/quest'

const QuestInfo = ({currentQuest}) => {

    // let divs = '<div>' + currentQuest.text.split('').join('</div><div>') + '</div>';
    // $(divs).hide().appendTo('.quest-info-details').each(function (i) {
    //     $(this).delay(100 * i).css({
    //         display: 'inline',
    //         opacity: 0
    //     }).animate({
    //         opacity: 1
    //     }, 100);
    // });
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(questActions.setQuest(currentQuest));
    // },[currentQuest.text])

    // function restartAnimation() {
    //     let circle = document.querySelector(".circle");
  
    //     circle.style.animationName = "none";
  
    //     requestAnimationFrame(() => {
    //       setTimeout(() => {
    //         circle.style.animationName = ""
    //       }, 0);
    //     });
    //   }

    return ( 
        <div className='quest-info-container'>
            <div className='quest-info-top'>
                <div className='quest-info-window'>
                    <img src={currentQuest.monster.imageUrl} 
                    className="quest-window-image"
                    />
                </div>
                <div className='quest-info-details-container'>
                    <div className='quest-info-title'>{currentQuest.monster.name}</div>
                    <div className='quest-info-monster-health'>HP: {currentQuest.monster.health}</div>
                    <div className='quest-info-monster-attack'>ATK: {currentQuest.monster.attack}</div>
                    <div className='quest-info-description'>{currentQuest.description}</div>
                </div>
            </div>
            <div className='quest-info-details'>{currentQuest.text}
                <div className='quest-details-cover'></div>
            </div>
        </div>
     );
}
 
export default QuestInfo;