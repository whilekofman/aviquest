import './QuestInfo.css';

const QuestInfo = ({currentQuest}) => {

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
            <div className='quest-info-details'>{currentQuest.text}</div>
        </div>
     );
}
 
export default QuestInfo;