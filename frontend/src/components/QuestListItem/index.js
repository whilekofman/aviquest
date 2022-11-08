import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../store/user';
import { Modal } from '../../context/Modal';
import './QuestListItem.css';
import QuestConfrim from '../QuestConfirm';

const QuestListItem = ({quest, setCurrentQuest}) => {

    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
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
        setShowModal(true);
        // dispatch(userActions.updateUser(userData));
    }

    return ( 
        <div className='quest-list-item-container'
        onClick={(e) => handleClick(e)}
        >
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <QuestConfrim setShowModal={setShowModal}/>
                </Modal>
            )}
            <div>{quest.title}</div>
        </div>
     );
}
 
export default QuestListItem;