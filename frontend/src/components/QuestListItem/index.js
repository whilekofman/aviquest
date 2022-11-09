import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import './QuestListItem.css';
import QuestConfirm from '../QuestConfirm';

const QuestListItem = ({quest, setCurrentQuest}) => {

    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState({});
    const {_id, username, email, items, equipment, attack, coins, maxHealth, currentHealth } = useSelector(state => state.session.user);

    const questTime = Date.now()

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
            quest: [quest, questTime]
        }
        setUser(userData);
        setShowModal(true);
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
                    <QuestConfirm user={user} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
     );
}
 
export default QuestListItem;