import QuestListItem from '../QuestListItem';
import './QuestList.css';

const QuestList = ({quests}) => {

    const questItem = quests.map(quest => <QuestListItem key={quest.id} quest={quest}/>)

    return ( 
        <div className='quest-list-container'>
            <div className='quest-body'>
                <ul className='quest-ul'>
                    {questItem}
                </ul>
            </div>
        </div>
     );
}
 
export default QuestList;