import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as userActions from '../../store/user';
import * as sessionActions from '../../store/session';
import * as questActions from '../../store/quest';
import './QuestListItem.css';

const QuestListItem = ({quest, setCurrentQuest}) => {

    const dispatch = useDispatch();
    const {_id, username, email, items, equipment, attack, coins, maxHealth, currentHealth } = useSelector(state => state.session.user);

    
    const handleClick = (e) => {
        e.preventDefault();
        setCurrentQuest(quest);
        const userData = {
            _id,
            username,
            email,
            equipment,
            items,
            attack,
            coins,
            maxHealth,
            currentHealth,
            quest: [quest]
        }
        
        // dispatch(userActions.updateUser(userData));
        dispatch(questActions.setQuest(quest, userData));
        dispatch(sessionActions.getCurrentUser());

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