import { useSelector } from 'react-redux';
import QuestList from '../QuestList';
import TaskList from '../TaskList';
import questData from '../Util/quest_data';
import './ListShowPage.css';

const ListShowPage = () => {

    const count = useSelector(state => state.tasks.length)

    return ( 
        <div className='list-show-container'>
            <div className='todo-section'>
                <div className='tasklist-header'>
                    <div className='task-head-title'>Tasks</div>
                    <div className='task-head-count'>{count}</div>
                </div>
                <TaskList />
            </div>

            <div className='quest-section'>
                <div className='quest-header'>Quest</div>
                <QuestList quests={questData}/>
            </div>

        </div>
     );
}
 
export default ListShowPage;