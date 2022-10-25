import './QuestListItem.css';

const QuestListItem = ({quest}) => {
    return ( 
        <div className='quest-list-item-container'>
            <div>{quest.title}</div>
            <div>{quest.description}</div>
        </div>
     );
}
 
export default QuestListItem;