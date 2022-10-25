import TaskListItem from '../TaskListItem';
import './TaskList.css';

const TaskList = ({user}) => {

    const taskItem = user.tasks.map(task => <TaskListItem key={task.id} task={task}/>)

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
                    <ul>
                        {taskItem}
                    </ul>
                </div>

            </div>
        </div>
     );
}
 
export default TaskList;