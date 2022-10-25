import QuestListItem from '../QuestListItem';
import './QuestList.css';

const QuestList = () => {

    const quests = [
        {title: "Slime Hunter", description: "Kill 5 Slimes", reward: {coin: 5, item: null}, timeFrame: 3, id: 1},
        {title: "Goblin Hunter", description: "Kill 3 Goblins", reward: {coin: 10, item: "Scuffed Dagger"}, timeFrame: 2, id: 2},
        {title: "Orc Disaster", description: "Kill 1 Orc General", reward: {coin: 5, item: "Orc General's Chipped Warblade"}, timeFrame: 4, id: 3}
    ]

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