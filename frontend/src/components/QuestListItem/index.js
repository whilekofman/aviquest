import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as userActions from '../../store/user';
import * as sessionActions from '../../store/session';
import * as questActions from '../../store/quest';
import './QuestListItem.css';

const QuestListItem = ({quest, setCurrentQuest}) => {

    // const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const {_id, username, email, items, equipment, attack, coins, maxHealth, currentHealth } = useSelector(state => state.session.user);

    // useEffect(() => {
    //     // dispatch(sessionActions.getCurrentUser());
    //     // const updateUser = () => {
            
    //     // }

    // }, [loaded])
    
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
        
        dispatch(userActions.updateUser(userData));
        
        // dispatch(userActions.updateUser(userData));
        // setLoaded(!loaded);
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