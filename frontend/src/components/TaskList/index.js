import { useEffect, useState } from 'react';
import TaskListItem from '../TaskListItem';
import * as taskActions from '../../store/task';
import * as sessionActions from '../../store/session';
import './TaskList.css';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../store/user';
import DeathModal from '../DeathModal';
import { Modal } from '../../context/Modal';

const TaskList = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [loadContent, setLoadContent] = useState(false);
    const tasks = useSelector(state => state.tasks)
    const currentUser = useSelector(state => state.session.user);
    const [loaded, setLoaded] = useState(false)
    const {currentHealth, maxHealth, _id, coins } = currentUser;
    const [deathModal, setDeathModal] = useState(false);


    if (currentHealth < 1) {
        if (!deathModal) {
            dispatch(userActions.updateUser({
                _id,
                // coins: parseInt(coins / 2),
                coins: 888888,
                currentHealth: maxHealth
            }))
            setDeathModal(true);
        }
    }

    useEffect(()  => {
        const generateTasks = async () => {
            const res = await dispatch(taskActions.fetchTasks(currentUser._id))
            .then(setLoadContent(true));
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
        setTitle("");
    }

    if (loadContent) return ( 
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
                                <TaskListItem key={task._id} task={task} tasks={tasks}/>
                                )
                            }))
                        }
                    </ul>
                </div>

            {deathModal && (
            <Modal onClose={() => setDeathModal(false)}>
                    <DeathModal setDeathModal={setDeathModal}/>
            </Modal>
            )} 

            </div>
        </div>
     );
}
 
export default TaskList;