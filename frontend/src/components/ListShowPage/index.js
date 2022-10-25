import { useState } from 'react';
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

    const quests = [
        {title: "Slime Hunter", 
        description: "Kill 5 Slimes", 
        reward: {coin: 5, item: null}, 
        timeFrame: 3, 
        id: 1, 
        monster: {name: "slime", health: 25, attack: 5, imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/45736226-4350-419f-acd8-d950e4a3c1c6/de9ited-2332eae4-a0ff-4966-915c-33735dfc7c37.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ1NzM2MjI2LTQzNTAtNDE5Zi1hY2Q4LWQ5NTBlNGEzYzFjNlwvZGU5aXRlZC0yMzMyZWFlNC1hMGZmLTQ5NjYtOTE1Yy0zMzczNWRmYzdjMzcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dRz9i0hMJMBCGVGMpux2cML4Sl5P3sxMmshAHIFU0iI'} },

        {title: "Goblin Hunter", 
        description: "Kill 3 Goblins", 
        reward: {coin: 10, item: "Scuffed Dagger"}, 
        timeFrame: 2, id: 2, monster: {}},

        {title: "Orc Disaster", 
        description: "Kill 1 Orc General", 
        reward: {coin: 5, item: "Orc General's Chipped Warblade"}, 
        timeFrame: 4, id: 3, monster: {}}
    ]

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
                <QuestList quests={quests}/>
            </div>

        </div>
     );
}
 
export default ListShowPage;