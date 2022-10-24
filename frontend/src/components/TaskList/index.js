import './TaskList.css';

const TaskList = ({user}) => {

    console.log(user);

    return ( 
        <div className='tasklist-container'>
            <div className='tasklist-header'>
                <div className='task-head-title'>Tasks</div>
                <div className='task-head-count'>3</div>
            </div>
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