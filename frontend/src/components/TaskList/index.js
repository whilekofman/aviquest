import { useEffect, useState } from 'react';
import TaskListItem from '../TaskListItem';
import * as taskActions from '../../store/task';
import './TaskList.css';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';

const TaskList = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [tasks, setTasks] = useState([]);
    const currentUser = useSelector(state => state.session.user);

    useEffect(()  => {
        const generateTasks = async () => {
            const res = await dispatch(taskActions.fetchTasks(currentUser._id));
            const data = await res;
            setTasks(data);
        }

        generateTasks();
    }, [currentUser])

    console.log(tasks);
    
    const taskItem = tasks.map(task => <TaskListItem key={task._id} task={task}/>)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {title};
        dispatch(taskActions.createTask(data));
        dispatch(taskActions.fetchTasks(currentUser._id));
    }

    return ( 
        <div className='tasklist-container'>
            <div className='tasklist-body'>
                <div className='task-input-container'>
                    <form className='task-input-form'
                    onSubmit={(e) => handleSubmit(e)}
                    >
                        <input type="text" 
                        className='task-input'
                        placeholder='Add a task'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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