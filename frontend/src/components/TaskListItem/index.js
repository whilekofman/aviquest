import { useState } from 'react';
import './TaskListItem.css';

const TaskListItem = ({task}) => {

    const [showOptions, setShowOptions] = useState(false);

    const handleOptions = (e) => {
        e.preventDefault();
    }

    return ( 
        <div className='task-item-container'
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
        >
            <div className='task-item-body'>
                <div className='task-item-body-start'>
                    <div className='task-item-check'><input type="checkbox"/></div>
                    <div className='task-item-title'>{task.title}</div>
                </div>
                {showOptions && <div className='task-item-options'
                onClick={(e) => handleOptions(e)}
                >⋮</div>}
            </div>
        </div>
     );
}
 
export default TaskListItem;