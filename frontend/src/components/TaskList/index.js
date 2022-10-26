import { useEffect, useState } from 'react';
import TaskListItem from '../TaskListItem';
import * as taskActions from '../../store/task';
import './TaskList.css';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';

const TaskList = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const tasks = useSelector(state => state.tasks)
    const currentUser = useSelector(state => state.session.user);
    const [loaded, setLoaded] = useState(false)

    useEffect(()  => {
        const generateTasks = async () => {
            const res = await dispatch(taskActions.fetchTasks(currentUser._id));
            const data = await res;
        }

        generateTasks();
    }, [])


    useEffect(() => {
        if (tasks && tasks.length > 0) {
            setLoaded(true)
        }
    }, [tasks])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {title};
        dispatch(taskActions.createTask(data));
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
                        {loaded && 
                        (tasks.map(task => {
                            return (
                                <TaskListItem key={task._id} task={task}/>
                                )
                            }))
                        }
                    </ul>
                </div>

            </div>
        </div>
     );
}
 
export default TaskList;