import { useSelector } from 'react-redux';
import * as questActions from '../../store/quest';
import './QuestInfo.css';

const QuestInfo = () => {

    const allQuests = useSelector(questActions.getQuests());

    return ( 
        <div className='quest-info-container'>
            {/* <div className='quest-info-body'></div> */}
        </div>
     );
}
 
export default QuestInfo;