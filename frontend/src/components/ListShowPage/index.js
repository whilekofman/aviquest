import QuestInfo from '../QuestInfo';
import QuestList from '../QuestList';
import TaskList from '../TaskList';
import './ListShowPage.css';

const ListShowPage = () => {

    const user = {
        username: 'testUser',
        email: 'user@test.io',
        hashedPassword: 'password',
        health: 15,
        attack: 5,
        points: 10,
        tasks: [
            {
                id: 1,
                title: '5 Minute Meditation',
                body: "Do it naow.",
                isComplete: false,
                difficulty: "1",
            },
            {
                id: 2,
                title: 'Clean room',
                body: "It's a mess.",
                isComplete: false,
                difficulty: "2",
            },
            {
                id: 3,
                title: 'Work on MERN project',
                body: "Must make Avi proud",
                isComplete: false,
                difficulty: 3
            }
    ],
    items: [],
    equipment: [],
    quest: null
    }

    return ( 
        <div className='list-show-container'>
            <div className='todo-section'>
                <div className='tasklist-header'>
                    <div className='task-head-title'>Tasks</div>
                    <div className='task-head-count'>3</div>
                </div>
                <TaskList user={user}/>
            </div>

            <div className='quest-section'>
                <div className='quest-header'>Quest</div>
                <QuestList />
            </div>

            <div className='quest-info-section'>
                <div className='quest-info-header'>Quest Info</div>
                <QuestInfo />
            </div>
        </div>
     );
}
 
export default ListShowPage;