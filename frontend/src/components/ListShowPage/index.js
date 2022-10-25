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
        monster: {name: "Slime", health: 25, attack: 5, imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/45736226-4350-419f-acd8-d950e4a3c1c6/de9ited-2332eae4-a0ff-4966-915c-33735dfc7c37.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ1NzM2MjI2LTQzNTAtNDE5Zi1hY2Q4LWQ5NTBlNGEzYzFjNlwvZGU5aXRlZC0yMzMyZWFlNC1hMGZmLTQ5NjYtOTE1Yy0zMzczNWRmYzdjMzcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dRz9i0hMJMBCGVGMpux2cML4Sl5P3sxMmshAHIFU0iI'}, 
        text: "Times are dire, very dire indeed. Our town has been surrounded by small groups of savages and it's just a matter of time before they attack. Fortunately they haven't formed a big group yet, so they should be easier to deal with. Hero, please get rid of those vulgar Slime." },

        {title: "Goblin Hunter", 
        description: "Kill 3 Goblins", 
        reward: {coin: 10, item: "Scuffed Dagger"}, 
        timeFrame: 2, id: 2, 
        monster: {name: 'Goblin', health: 30, attack: 8, imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12360a9d-6bea-4e05-a2c7-ae68bbd32678/dcpdh7p-7a484499-6499-444d-8fcc-9d7bcdb31941.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyMzYwYTlkLTZiZWEtNGUwNS1hMmM3LWFlNjhiYmQzMjY3OFwvZGNwZGg3cC03YTQ4NDQ5OS02NDk5LTQ0NGQtOGZjYy05ZDdiY2RiMzE5NDEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lnYtxIp9Z1yLeh2DkVLQKRq3ckRWofyEiEqLmpoxBJA'}, 
        text: "I've been ordered to deal with a recent threat to our lands, but I'm afraid the reports were wrong. The reports mentioned only a few, but there are about a dozen of them. Hero, I need you to kill those disgusting goblins. I had hoped I could you join, but unfortunately I cannot. But I doubt you'd need my help anyway."},

        {title: "Orc Disaster", 
        description: "Kill 1 Orc General", 
        reward: {coin: 5, item: "Orc General's Chipped Warblade"}, 
        timeFrame: 4, id: 3, 
        monster: {name: 'Orc General', health: 50, attack: 10, imageUrl: 'https://thumbs.gfycat.com/DependableIllArmyworm-max-1mb.gif'}, 
        text: "I need you to keep quiet about this, but reports show an increase of enemy forces in our lands. We don't know how accurate these reports are, but I need you to find those forces and disrupt their by killing the Orc General."}
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