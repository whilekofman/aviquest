import { useState } from "react";



const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [ difficulty, setDifficulty ] = useState(1);
    const [ complete, setComplete ] = useState(false);

    console.log(complete)
    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input className="taskform-title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)} 
                placeholder='Title' />
            <input className="taskform-body"
                value={body}
                onChange={(e)=>setBody(e.target.value)} 
                placeholder='Body' />
            <input type="checkbox"
                className="taskform-complete"
                value={complete}
                onChange={(e) => setComplete((state) => !state)} />
            <input type="number"
                min='1'
                max='3'
                className="taskform-difficulty"
                value={difficulty} 
                placeholder='Difficulty' 
                onChange={(e)=>setDifficulty(e.target.value)} />
            <button className="taskform-submit">Create task</button>
            </form>
        </div>
    );
}
 
export default TaskForm;