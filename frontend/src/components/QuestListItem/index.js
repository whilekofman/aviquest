import './QuestListItem.css';

const QuestListItem = ({quest, setCurrentQuest, setCoverAnimation}) => {

    const handleClick = (e) => {
        e.preventDefault();
        setCurrentQuest(quest);
    }

    return ( 
        <div className='quest-list-item-container'
        onClick={(e) => handleClick(e)}
        >
            <div>{quest.title}</div>
        </div>
     );
}
 
export default QuestListItem;