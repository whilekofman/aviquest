import TaskListItem from '../TaskListItem';
import './TaskList.css';

const TaskList = ({user}) => {

    console.log(user);

    return ( 
        <div className='tasklist-container'>

            <div className='tasklist-body'>
                <div className='task-input-container'>
                    <form className='task-input-form'>
                        <input type="text" 
                        className='task-input'
                        placeholder='Add a task'
                        />
                    </form>
                </div>
                
                <div className='task-list-items'>
                    <ul className='task-ul'>
                        {taskItem}
                    </ul>
                </div>

            </div>
        </div>
     );
}
 
export default TaskList;