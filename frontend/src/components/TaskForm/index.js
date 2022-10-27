import { useState } from "react";
import { useDispatch } from "react-redux";
import * as taskActions from "../../store/task";
import './TaskForm.css'

const TaskForm = ({task, tasks, setShowModal}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(task.title);
    const [body, setBody] = useState(task.body);
    const [ difficulty, setDifficulty ] = useState(1);
    const [ complete, setComplete ] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = {
            _id: task._id,
            title: title,
            body: body,
            difficulty: parseInt(difficulty),
            isComplete: complete
        }
        const newTaskList = tasks.filter(taskItem => taskItem._id !== task._id);
        newTaskList.unshift(taskData);
        dispatch(taskActions.updateTask(taskData, newTaskList));
        setShowModal(false);
    }

    const handleComplete = (e) => {
        e.preventDefault();
        setComplete(!complete);
    }

    const completeStyle = {
        backgroundColor: '#00FF00'
    }
    
    const incompleteStyle = {
        backgroundColor: '#FF0000'
    }


    return (
        <div className="task-modal">
            <form className="task-form" onSubmit={handleSubmit}>
                <input className="taskform-title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)} 
                    placeholder='Title' 
                />

                <textarea className="taskform-body" 
                value={body}
                onChange={(e)=>setBody(e.target.value)} 
                >
                </textarea>        

                <button 
                className="taskform-complete"
                onClick={(e) => handleComplete(e)}
                style={complete ? completeStyle : incompleteStyle}
                >
                { complete ? "Complete" : "Incomplete"}</button>

                <select  
                className="taskform-difficulty"
                value={difficulty} 
                onChange={(e) => setDifficulty(e.target.value)}
                >
                    <option value="1">Basic</option>
                    <option value="2">Average</option>
                    <option value="3">Difficult</option>
                </select>

                <button className="taskform-submit">Update task</button>
            </form>
        </div>
    );
}
 
export default TaskForm;