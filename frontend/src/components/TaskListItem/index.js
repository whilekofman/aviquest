import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as taskActions from '../../store/task';
import { Modal } from '../../context/Modal';
import './TaskListItem.css';
import TaskForm from '../TaskForm';

const TaskListItem = ({task, tasks}) => {

    const dispatch = useDispatch();
    const [showOptions, setShowOptions] = useState(false);
    const [options, setOptions] = useState(false);
    const [checked, setChecked] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleOptions = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setOptions(!options);
    }

    const handleShowTask = (e) => {
        e.preventDefault();
    }
    
    const handleEdit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowModal(true);
        setOptions(!options);
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const newTaskList = tasks.filter(taskItem => taskItem._id !== task._id);
        dispatch(taskActions.deleteTask(task._id, newTaskList))
    }

    return ( 
        <div className='task-item-container'
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
        onClick={(e) => handleShowTask(e)}
        >        
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <TaskForm setShowModal={setShowModal}/>
                </Modal>
            )}
            <div className='task-item-body'>
                <div className='task-item-body-start'>
                    <div className='task-item-check'>
                        <label>
                            <input type="checkbox"
                            className='task-checkbox'
                            onChange={() => setChecked(!checked)}
                            />
                            <svg
                                className={`checkbox ${checked ? "checkbox--active" : ""}`}
                                aria-hidden="true"
                                viewBox="0 0 15 11"
                                fill="none"
                            > 
                                <path 
                                    d="M1 4.5L5 9L14 1"
                                    strokeWidth="2"
                                    stroke={checked ? "#fff" : "none"}
                                />
                            </svg>
                        </label>
                    </div>
                    <div className='task-item-title'>{task.title}</div>
                </div>
                {showOptions && <div className='task-item-options'
                onClick={(e) => handleOptions(e)}
                >⋮
                    {options && 
                        <div className='task-options-dropdown'
                        >
                            <div className='task-options-edit'
                            onClick={(e) => handleEdit(e)}
                            >✎ &nbsp;  Edit</div>
                            <div className='task-options-delete'
                            onClick={(e) => handleDelete(e)}
                            >🗑 Delete</div>
                        </div>
                    }
                </div>}
            </div>
        </div>
     );
}
 
export default TaskListItem;