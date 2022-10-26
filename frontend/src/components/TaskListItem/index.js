import { useState } from 'react';
import './TaskListItem.css';

const TaskListItem = ({task}) => {

    const [showOptions, setShowOptions] = useState(false);
    const [options, setOptions] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleOptions = (e) => {
        e.preventDefault();
        setOptions(!options);
    }

    const handleShowTask = (e) => {
        e.preventDefault();

        console.log("Show Task");
    }

    return ( 
        <div className='task-item-container'
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
        onClick={(e) => handleShowTask(e)}
        >
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
                            <div className='task-options-edit'>✎ &nbsp;  Edit</div>
                            <div className='task-options-delete'>🗑 Delete</div>
                        </div>
                    }
                </div>}
            </div>
        </div>
     );
}
 
export default TaskListItem;