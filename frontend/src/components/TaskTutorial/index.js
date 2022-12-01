import './TaskTutorial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const TaskTutorial = ({setTutorial}) => {

    const right = <FontAwesomeIcon icon={faArrowRight} size='xl'/>
    const left = <FontAwesomeIcon icon={faArrowLeft} size='xl'/>
    const [showTask, setShowTask] = useState(true);
    const [showQuest, setShowQuest] = useState(false);
    const [showDamage, setShowDamage] = useState(false);
    const [showReward, setShowReward] = useState(false);
    const [showGacha, setShowGacha] = useState(false);
    const [showInventory, setShowInventory] = useState(false);
    const [showAvitar, setShowAvitar] = useState(false);

    const handleTutorialNext = (e) => {
        e.preventDefault();
        setShowTask(false);
        setShowQuest(true);
    };

    const handleQuestNext = (e) => {
        e.preventDefault();
        setShowQuest(false);
        setShowDamage(true);
    };

    const handleQuestPrev = (e) => {
        e.preventDefault();
        setShowQuest(false);
        setShowTask(true);
    };

    const handleDmgNext = (e) => {
        e.preventDefault();
        setShowDamage(false);
        setShowReward(true);
    };

    const handleDmgPrev = (e) => {
        e.preventDefault();
        setShowDamage(false);
        setShowQuest(true);
    };

    const handleRewardNext = (e) => {
        e.preventDefault();
        setShowReward(false);
        setShowGacha(true);
    };

    const handleRewardPrev = (e) => {
        e.preventDefault();
        setShowReward(false);
        setShowDamage(true);
    };

    const handleGachaNext = (e) => {
        e.preventDefault();
        setShowGacha(false);
        setShowInventory(true);
    };

    const handleGachaPrev = (e) => {
        e.preventDefault();
        setShowGacha(false);
        setShowReward(true);
    };

    const handleInventoryNext = (e) => {
        e.preventDefault();
        setShowInventory(false);
        setShowAvitar(true);
    };

    const handleInventoryPrev = (e) => {
        e.preventDefault();
        setShowInventory(false);
        setShowGacha(true);
    };

    const handleAvitarPrev = (e) => {
        e.preventDefault();
        setShowAvitar(false);
        setShowInventory(true);
    };

    return ( 
        <div className='tutorial-container'>
            {showTask && (
                <div className='tutorial-task-container'>
                <h2 className='tutorial-header'>Welcome to Aviquest!</h2>
                <img src="https://aviquest-dev.s3.amazonaws.com/aviquest-tutorial/task.gif"
                className='tutorial-gif' 
                alt='tutorial-task'
                />
                <div className='tutorial-quest-text-container'>
                    <p className='tutorial-text'>Aviquest is a gamified Task Management Application.</p> 
                    <p className='tutorial-text'>Users are rewarded when they complete their daily tasks.</p>
                    <p className='tutorial-text'>Users are able to create, edit, and delete their tasks.</p>
                </div>
                <div className='tutorial-button-container'>
                    <div className='tutorial-prev' id='tutorial-arrow-none'>
                        {left}
                    </div>
                    <div className='tutorial-next'
                    onClick={(e) => handleTutorialNext(e)}
                    >
                        {right}
                    </div>
                </div>
                <div className='tutorial-pages'>1/7</div>
            </div>
            )}

            {showQuest && (
                <div className='tutorial-task-container'>
                <h2 className='tutorial-header'>Embark on Quests!</h2>
                <img src="https://aviquest-dev.s3.amazonaws.com/aviquest-tutorial/quest-select.gif"
                className='tutorial-quest-gif' 
                alt='tutorial-quest'
                />
                <div className='tutorial-quest-text-container'>
                    <p className='tutorial-text'>Choose your own adventure by selecting one of our available quests!</p> 
                    <p className='tutorial-text'>Quests have unique monsters that you will be able to fight against.</p>
                    <p className='tutorial-text'>Successfully completing a quest will earn you rewards!</p>
                </div>
                <div className='tutorial-button-container'>
                    <div className='tutorial-prev'
                    onClick={(e) => handleQuestPrev(e)}
                    >
                        {left}
                    </div>
                    <div className='tutorial-next'
                    onClick={(e) => handleQuestNext(e)}
                    >
                        {right}
                    </div>
                </div>
                <div className='tutorial-pages'>2/7</div>
            </div>
            )}

            {showDamage && (
                <div className='tutorial-task-container'>
                <h2 className='tutorial-header'>Defeat Monsters!</h2>
                <img src="https://aviquest-dev.s3.amazonaws.com/aviquest-tutorial/monster-damage.gif"
                className='tutorial-dmg-gif' 
                alt='tutorial-damage-1'
                />
                <img src="https://aviquest-dev.s3.amazonaws.com/aviquest-tutorial/task-complete.gif"
                className='tutorial-dmg1-gif' 
                alt='tutorial-damage-2'
                />
                <div className='tutorial-text-dmg-container'>
                    <p className='tutorial-text'>Completing daily tasks will damage the monster of your current quest.</p> 
                    <p className='tutorial-text'>Be careful, if you leave the tasks imcomplete the monster will damage you!</p>
                    <p className='tutorial-text'>Successfully completing a quest will earn you currency to use to get new equipment!</p>
                </div>
                <div className='tutorial-button-container'>
                    <div className='tutorial-prev'
                    onClick={(e) => handleDmgPrev(e)}
                    >
                        {left}
                    </div>
                    <div className='tutorial-next'
                    onClick={(e) => handleDmgNext(e)}
                    >
                        {right}
                    </div>
                </div>
                <div className='tutorial-pages'>3/7</div>
            </div>
            )}

            {showReward && (
                <div className='tutorial-task-container'>
                <h2 className='tutorial-header'>Earn Rewards!</h2>
                <img src="https://aviquest-dev.s3.amazonaws.com/aviquest-tutorial/rewards.gif"
                className='tutorial-quest-gif' 
                alt='tutorial-reward'
                />
                <div className='tutorial-text-container'>
                    <p className='tutorial-text'>A reward chest will be automatically distributed when you complete a quest.</p> 
                    <p className='tutorial-text'>Use your hard earned currency in the Gacha shop for new equipment!</p>
                    <p className='tutorial-text'>Harder quests will reward more currency!</p>
                </div>
                <div className='tutorial-button-container'>
                    <div className='tutorial-prev'
                    onClick={(e) => handleRewardPrev(e)}
                    >
                        {left}
                    </div>
                    <div className='tutorial-next'
                    onClick={(e) => handleRewardNext(e)}
                    >
                        {right}
                    </div>
                </div>
                <div className='tutorial-pages'>4/7</div>
            </div>
            )}
            
            {showGacha && (
                <div className='tutorial-task-container'>
                <h2 className='tutorial-header'>Roll for new Equipment!</h2>
                <img src="https://aviquest-dev.s3.amazonaws.com/aviquest-tutorial/gacha.gif"
                className='tutorial-quest-gif' 
                alt='tutorial-gacha'
                />
                <div className='tutorial-text-container'>
                    <p className='tutorial-text'>Users can obtain new equpiment from the Gacha store!</p> 
                    <p className='tutorial-text'>Equipment can provide additional power to the Avitar to help complete quests faster!</p>
                    <p className='tutorial-text'>Collect all the Equipment!</p>
                </div>
                <div className='tutorial-button-container'>
                    <div className='tutorial-prev'
                    onClick={(e) => handleGachaPrev(e)}
                    >
                        {left}
                    </div>
                    <div className='tutorial-next'
                    onClick={(e) => handleGachaNext(e)}
                    >
                        {right}
                    </div>
                </div>
                <div className='tutorial-pages'>5/7</div>
            </div>
            )}

            {showInventory && (
                <div className='tutorial-task-container'>
                <h2 className='tutorial-header'>Equip items you have collected!</h2>
                <img src="https://aviquest-dev.s3.amazonaws.com/aviquest-tutorial/inventory.gif"
                className='tutorial-quest-gif' 
                alt='tutorial-inventory'
                />
                <div className='tutorial-equip-text-container'>
                    <p className='tutorial-text'>After Players have earned items they can equip them in the inventory tab.</p> 
                    <p className='tutorial-text'>Players can have up to 4 equipments active at once.</p>
                    <p className='tutorial-text'>Try them all out!</p>
                </div>
                <div className='tutorial-button-container'>
                    <div className='tutorial-prev'
                    onClick={(e) => handleInventoryPrev(e)}
                    >
                        {left}
                    </div>
                    <div className='tutorial-next'
                    onClick={(e) => handleInventoryNext(e)}
                    >
                        {right}
                    </div>
                </div>
                <div className='tutorial-pages'>6/7</div>
            </div>
            )}

            {showAvitar && (
                <div className='tutorial-task-container'>
                <h2 className='tutorial-header'>Change your Avitar Sprite!</h2>
                <img src="https://aviquest-dev.s3.amazonaws.com/aviquest-tutorial/avitar.gif"
                className='tutorial-quest-gif' 
                alt='tutorial-avitar'
                />
                <div className='tutorial-avitar-text-container'>
                    <p className='tutorial-text'>Players can purchase new Avitar sprites that suits them the best.</p> 
                    <p className='tutorial-text'>Click on the current Avitar to access the different variations.</p>
                    <p className='tutorial-text'>Players can change their sprites whenever they want!</p>
                </div>
                <div className='tutorial-button-container'>
                    <div className='tutorial-prev'
                    onClick={(e) => handleAvitarPrev(e)}
                    >
                        {left}
                    </div>
                    <div className='tutorial-next' id='tutorial-arrow-none'
                    >
                        {right}
                    </div>
                </div>
                <div className='tutorial-pages'>7/7</div>
            </div>
            )}

        </div>
     );
}
 
export default TaskTutorial;