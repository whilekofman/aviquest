import QuestList from '../QuestList';
import TaskList from '../TaskList';
import questData from '../Util/quest_data';
import './ListShowPage.css';

const ListShowPage = () => {

    return ( 
        <div className='list-show-container'>
            <div className='todo-section'>
                <div className='tasklist-header'>
                    <div className='task-head-title'>Tasks</div>
                    <div className='task-head-count'>3</div>
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