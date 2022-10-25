import QuestInfo from '../QuestInfo';
import QuestListItem from '../QuestListItem';
import './QuestList.css';

const QuestList = ({quests}) => {

    const questItem = quests.map(quest => <QuestListItem key={quest.id} quest={quest}/>)

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
                <QuestInfo quest={questItem} />

            </div>
        </div>
     );
}
 
export default QuestList;