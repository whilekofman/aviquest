import './DeathModal.css'
import deathImage from '../../assets/images/death.gif'

const DeathModal = ({setDeathModal}) => {

    const handleConfirm = (e) => {
        e.preventDefault();
        setDeathModal(false);
    }

    return (
        <div className='death-modal'>
            <div className='death-modal-border'>
                <div className='death-modal-header'>
                    Game Over
                </div>
                <br />
                <img className='death-modal-skull' src={deathImage} alt="" />
                <p className='death-modal-message'>
                    Oh no, you have been gone for too long! 
                    <br />
                    The monster has struck you down and <span className='death-modal-bold'>took half of your coins!</span> 
                    <br />
                    The chuch cleric will heal you to full health now. 
                    <br />
                    Be careful on your journey and make sure to checkback often! 
                </p>

                <button onClick={handleConfirm}
                className='death-modal-button'>Confirm</button>
            </div>

        </div>
    );
}
 
export default DeathModal;