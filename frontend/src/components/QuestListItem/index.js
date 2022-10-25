import './QuestListItem.css';

const QuestListItem = ({quest}) => {
    return ( 
        <div className='quest-list-container'>
            <div>{quest.title}</div>
            <div>{quest.description}</div>
        </div>
     );
}
 
export default QuestListItem;