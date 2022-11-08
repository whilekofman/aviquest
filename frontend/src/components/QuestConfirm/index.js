import { useDispatch } from 'react-redux';
import * as userActions from '../../store/user';
import './QuestConfirm.css'

const QuestConfirm = ({user, setShowModal}) => {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        dispatch(userActions.updateUser(user));

        setShowModal(false);
    }

    const handleReturn = (e) => {
        e.preventDefault();
        setShowModal(false);
    }

    return ( 
        <div className="quest-confirm-modal">
            <form className="quest-confirm-form" onSubmit={handleSubmit}>
                <img className='quest-confirm-image'
                src="https://aviquest-dev.s3.amazonaws.com/GIFS/guard.gif"/>
                <div className='quest-confirm-text'>
                <span>Wait, Adventurer! You are about to embark on a new quest!</span>
                <br/>
                <br/>

                <span>All progress of your current quest will be lost.</span>
                <br />       
                <br/>
                <span>Do you wish to continue?</span>
                </div>

                <div className='quest-confirm-button-container'>
                    <button className='quest-confrim-button'
                    onClick={handleReturn}
                    >Return</button>
                    <button type='submit' className="quest-confrim-button">Proceed</button>
                </div>
            </form>
        </div>
     );
}
 
export default QuestConfirm;