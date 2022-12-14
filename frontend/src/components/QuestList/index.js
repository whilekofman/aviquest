import { useState } from 'react';
import QuestInfo from '../QuestInfo';
import QuestListItem from '../QuestListItem';
import './QuestList.css';

const QuestList = ({quests}) => {

    const [currentQuest, setCurrentQuest] = useState(quests[0]);
    const [coverAnimation, setCoverAnimation ] = useState(true);
    
    const questItem = quests.map(quest => <QuestListItem key={quest.id} quest={quest} setCurrentQuest={setCurrentQuest} />)

    return ( 
        <div className='quest-panel'>
            <div className='quest-list-container'>
                <div className='quest-block'></div>
                <div className='quest-body'>
                    <ul className='quest-ul'>
                        {questItem}
                    </ul>
                </div>
            </div>

            <div className='quest-panel-info'>
                <QuestInfo currentQuest={currentQuest} coverAnimation={coverAnimation} />
            </div>
        </div>
     );
}
 
export default QuestList;