import './QuestListItem.css';
import {useDispatch} from 'react-redux';
import * as questActions from '../../store/quest';

const QuestListItem = ({quest}) => {

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        // dispatch(questActions.setQuest(quest))
        // dispatch(questActions.removeQuest(quest.id));
    }

    return ( 
        <div className='quest-list-item-container'
        onClick={(e) => handleClick(e)}
        >
            <div>{quest.title}</div>
            <div>{quest.description}</div>
        </div>
     );
}
 
export default QuestListItem;