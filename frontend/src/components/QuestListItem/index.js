import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../store/user';
import { Modal } from '../../context/Modal';
import './QuestListItem.css';
import QuestConfirm from '../QuestConfirm';

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
        <>
            <div className='quest-list-item-container'
            onClick={(e) => handleClick(e)}
            >
                <div>{quest.title}</div>
            </div>

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <QuestConfirm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
     );
}
 
export default QuestListItem;