import './QuestInfo.css';

const QuestInfo = ({currentQuest}) => {

    console.table(currentQuest)

    return ( 
        <div className='quest-info-container'>
            <div className='quest-info-window'>
                <img src={currentQuest.monster.imageUrl} 
                className="quest-window-image"
                />
            </div>
            <div className='quest-info-details-container'>
                <div className='quest-info-title'>{currentQuest.title}</div>
                <div className='quest-info-description'>{currentQuest.description}</div>
            </div>
        </div>
     );
}
 
export default QuestInfo;