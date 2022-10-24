import './TaskListItem.css';

const TaskListItem = ({task}) => {

    return ( 
        <div className='task-item-container'>
            <div className='task-item-title'>{task.title}</div>
            <div className='task-item-options'>⋮</div>
        </div>
     );
}
 
export default TaskListItem;