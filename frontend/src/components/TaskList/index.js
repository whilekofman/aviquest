import './TaskList.css';

const TaskList = ({user}) => {

    const taskItem = user.tasks.map(task => <TaskListItem key={task.id} task={task}/>)
    console.log(taskItem);

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

            </div>
        </div>
     );
}
 
export default TaskList;