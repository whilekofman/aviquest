import { useState } from "react";
import { useDispatch } from "react-redux";
import * as taskActions from "../../store/task";
import './TaskForm.css'

const TaskForm = ({task}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [ difficulty, setDifficulty ] = useState("");
    const [ complete, setComplete ] = useState(false);

    console.table(task);

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = {
            id: task._id,
            title: title,
            body: body,
            difficulty: parseInt(difficulty),
            isComplete: complete
        }

        dispatch()
    }

    const handleComplete = (e) => {
        e.preventDefault();
        setComplete(!complete);
        console.log(complete);
    }

    const completeStyle = {
        backgroundColor: '#FF0000'
    }
    
    const incompleteStyle = {
        backgroundColor: '#00FF00'
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
                Complete</button>

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