import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../store/user';
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
        dispatch(userActions.updateUser(userData));
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