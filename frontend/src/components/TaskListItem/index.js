import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as taskActions from '../../store/task';
import * as userActions from '../../store/user';
import { Modal } from '../../context/Modal';
import './TaskListItem.css';
import TaskForm from '../TaskForm';
import RewardsContent from '../Rewards/RewardsContent';

const TaskListItem = ({task, tasks, monsterHp, setMonsterHp}) => {

    const dispatch = useDispatch();
    const [showOptions, setShowOptions] = useState(false);
    const [options, setOptions] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showQuestModal, setShowQuestModal] = useState(false);
    // const [dmg, setDmg] = useState(task.difficulty /2);

    
    const {attack, avitar, coins, currentHealth, quest,
        email, equipment, items, maxHealth, movingImageUrl, username, _id
    } = useSelector(state => state.session.user);

    let {id, reward, text, timeFrame, title, description} = quest[0];

    
    const currentTime = Date.now();
    const [timeSince, setTimeSince] = useState(currentTime - quest[1]);
    const hitTimes =  Math.floor(timeSince / 86400000);
    const monsterAttack = quest[0].monster.attack * hitTimes;
    const [userHealth, setUserHealth] = useState(currentHealth - monsterAttack);
    const userData = {
        _id, attack, avitar, coins, currentHealth, email, equipment, items,
        maxHealth, movingImageUrl, username, description, quest
    }

    useEffect(() => {
        if (timeSince > 86400000 && userData.currentHealth > 0){
            
            setUserHealth(userHealth - monsterAttack);
            userData.currentHealth = userHealth;

            if (userData.currentHealth < 0){
                userData.currentHealth = 0
            }

            userData.quest = [quest[0], Date.now()]
            
            dispatch(userActions.updateUser(userData));
        } 
    },[])

    useEffect(() => {
        setMonsterHp(quest[0].monster.maxHealth)
    },[quest[0].id])

    useEffect(() => {
        if (!options) return;

        const closeMenu = () => {
            setOptions(false);
        };

        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener("click", closeMenu);
    }, [options]);

    // useEffect(() => {

    //     const taskData = { 
    //         _id: task._id,
    //         title: task.title, 
    //         body: task.body, 
    //         difficulty: task.difficulty
    //         };
    //     const newTaskList = tasks.filter(taskItem => taskItem._id !== task._id);
    //     newTaskList.unshift(taskData);
    //     dispatch(taskActions.updateTask(taskData, newTaskList));
    // }, []);

    const handleOptions = (e) => {
        e.preventDefault();
        setOptions(!options);
    }
    
    const handleEdit = (e) => {
        e.preventDefault();
        setShowModal(true);
        setOptions(!options);
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        const newTaskList = tasks.filter(taskItem => taskItem._id !== task._id);
        dispatch(taskActions.deleteTask(task._id, newTaskList))
    }

    const handleCheck = (e) => {
        e.preventDefault();
        // setDmg();
        // console.log(dmg);
        // console.log(task.difficulty);
            let questCopy = quest[0];
            if (monsterHp - (task.difficulty/2) * attack < 0){
                setMonsterHp(0);
            } else {
            setMonsterHp(monsterHp - (task.difficulty/2) * attack);
            console.log((task.difficulty/2));
            console.log(monsterHp);
            }

            const monsterData = {
                attack: questCopy.monster.attack,
                imageUrl: questCopy.monster.imageUrl,
                maxHealth: questCopy.monster.maxHealth,
                movingUrl: questCopy.monster.movingUrl,
                name: questCopy.monster.name,
                currentHealth: monsterHp
            }
            const questData = {
                id, reward, text, timeFrame, title, monster: monsterData
            }
            const userData = {
                _id, attack, avitar, coins, currentHealth, email, equipment, items,
                maxHealth, movingImageUrl, username, description, quest: [questData, Date.now()]
            }
            dispatch(userActions.updateUser(userData));
            
            if ( monsterHp < 1 ) {
                setShowQuestModal(true);
                // setMonsterHp(quest[0].monster.currentHealth)
            } 
        // };
    }

    return ( 
        <div className='task-item-container'
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
        >       
            {showQuestModal && (
                <Modal onClose={() => setShowQuestModal(false)}>
                     <RewardsContent closeModal={() => setShowQuestModal(false)}/>
                </Modal>
            )} 
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <TaskForm task={task} tasks={tasks} setShowModal={setShowModal}
                    // dmg={dmg}
                    // setDmg={setDmg}
                    />
                </Modal>
            )}
            <div className='task-item-body'>
                <div className='task-item-body-start'>
                    <div className='task-item-check'>
                        <label>
                            {/* <input type="checkbox"
                            className='task-checkbox'
                            onChange={(e) => handleCheck(e)}
                            /> */}
                            {/* <svg
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
                            </svg> */}
                            <svg 
                            onClick={(e) => handleCheck(e)}
                            className='task-plus-button'
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='28px' height='28px' fill='#06283D'>
                                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                            </svg>
                        </label>
                    </div>
                    <div className='task-item-title'>{task.title}</div>
                </div>
                {showOptions && <div className='task-item-options'
                onClick={(e) => handleOptions(e)}
                >⋮
                </div>}
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
            </div>
        </div>
     );
}
 
export default TaskListItem;