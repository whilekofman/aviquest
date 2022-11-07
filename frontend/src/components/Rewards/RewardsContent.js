import './RewardsContent.css'
import questData from '../Util/quest_data'
import { useDispatch, useSelector } from 'react-redux'
import * as userActions from '../../store/user';


const RewardsContent = ({closeModal}) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const newcoins = user.coins + user.quest[0].reward.coin
    

    const handleClick = () => {
        dispatch(userActions.updateUser({_id:user._id, coins: newcoins, quest: [questData[0]]}))
        closeModal()
    }

    return ( 
        <div className="rewards-content">
            <div className="rewards-message">
                <h1>You have defeated {user.quest[0].monster.name}</h1>
                <br />
                <img className="rewards-chest" src="https://aviquest-dev.s3.amazonaws.com/GIFS/reward-chest.gif" alt="" />
                <div className="rewards-coins">Reward: {user.quest[0].reward.coin}</div>
                <button className="rewards-button" onClick={handleClick}>Collect Your Reward!</button>
            </div>
        </div>
     );
}
 
export default RewardsContent;