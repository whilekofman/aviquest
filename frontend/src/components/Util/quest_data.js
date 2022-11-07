const questData = [
    {
        id: 1,
        title: 'Instructor',
        description: 'Learn about Aviquest',
        reward: {coin: 0, item: null},
        monster: {name: 'Instructor', currentHealth: 100000, maxHealth: 100000, attack: 0, imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Avitars/tutorial.png'},
        timeFrame: 999,
        text: 'Welcome to Aviquest! You can set daily tasks and todos under the task column, mark your tasks as complete to deal damage to the current quest monster! Go ahead and try it on me, do not fret, I have very sturdy armor on. If you get tired of seeing me, just select another quest under the quest column!'
    },
    {   
        id: 2,
        title: 'Defeat the Liches',
        description: 'Defeat 3 Liches',
        reward: {coin: 15, item: {name: 'Maple Wand', description: 'The wand measures 9 inches/23 cm and has an overall ordinary look. The particular strand of Hazel Wood used in this wand is not very common, which increases the price of the wand and fairy wing is quite rare as well, resulting in a very valuable wand.', attack: 15, health: 0, rarity: 2, price: 15, imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_30.png'
        }},
        monster: {name: "Vigilant Lich", currentHealth: 50, maxHealth: 50, attack: 15, imageUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/vigilant-lich.gif', movingUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/lich-moving.gif'},
        timeFrame: 3,
        text: 'As you can see these lands have been corrupted. For the longest time we did not know what caused it, but now we do. It is the vile magic used by those Liches at the foot of the mountains. Hero, please go there and get rid of them before they taint everything, get rid of those filthy fiends. I am in no state to fight, but I know you will manage without me. We are counting on you to deal with those fiends. If you can, kill as many of them as possible. We want to live in peace and safety.'
    },
    {
        id: 3,
        title: 'Mimic Hunter',
        description: 'Kill 5 Mimics',
        reward: {coin: 10, item: {name: 'Iron Armor', description: 'The upper arms are protected by squared, half covering rerebraces which sit nicely under the shoulderplates.', attack: 0, health: 15, rarity: 2, price: 10, imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_42.png'
        }},
        monster: {name: 'Mimic', currentHealth: 30, maxHealth: 30, attack: 12, imageUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/mimic.gif', movingUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/mimic.gif'},
        timeFrame: 5,
        text: 'Time is of the essence. A hunting party raided a nearby village not too long ago and they arre probably hiding in the nearby hills. We need to deal with them now before they either attack again or grow in force. It is time to bring justice to those miserable Mimics. I will join you, if you will have me. It will be my pleasure.'
    },
    {   
        id: 4,
        title: 'Stop the Frogs',
        description: 'Kill 3 Frogs',
        reward: {coin: 8, item: null},
        monster: {name: 'Frog', currentHealth: 15, maxHealth: 15, attack: 8, imageUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/frog.gif', movingUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/frog-moving.gif'},
        timeFrame: 3,
        text: 'Trouble is on the horizon, in a matter of days we will be attacked and we might not be strong enough to stop it. Hero, we need your help. Go out and disrupt their activities, slow down those wicked Frogs. '
    },
    {
        id: 5,
        title: 'Spider Slayer',
        description: 'Kill 4 Spiders',
        reward: {coin: 10, item: null},
        monster: {name: 'Spider', currentHealth: 10, maxHealth: 10, attack: 5, imageUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/spider.gif', movingUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/spider-move.gif'},
        timeFrame: 2,
        text: 'I have been ordered to deal with a recent threat to our lands, but I am afraid the reports were wrong. The reports mentioned only a few, but there are about a dozen of them. Hero, I need you to kill those worthless Spiders. I wish I could join you, but alas I cannot.'
    },
    {
        id: 6,
        title: 'Kill the Trents',
        description: 'Defeat 5 Trents',
        reward: {coin: 5, item: {name: 'Wooden Bow', 
        description: 'This elegant flatbow has been admirably constructed of exceptional red elm. Its string is made from exceptional hemp, its a common material around these parts of the world.', attack: 6, health: 0, rarity: 1, price: 5, imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__16.png'
        }},
        monster: {name: 'Trent', currentHealth: 25, maxHealth: 25, attack: 10, imageUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/trent.gif', movingUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/trent-moving.gif'},
        timeFrame: 4,
        text: 'As you can see these lands have been corrupted. For the longest time we didn not know what caused it, but now we do. The Trents are taking over the forest, we must stop them.'
    },
    {
        id: 7,
        title: 'Stop the Rats',
        description: 'Hunt 6 Rats',
        reward: {coin: 6, item: null},
        monster: {name: "Rat", currentHealth: 10, maxHealth: 10, attack: 10, imageUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/rat.gif', movingUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/rat-move.gif'},
        timeFrame: 5,
        text: 'Vile creatures have crept up in our lands. Reports of attacks are trickling in slowly, but we cannot afford to sit back idly. This could get out of control very quickly. Hero, seek them out and deal with those horrible Rats.'
    },
    {
        id: 8,
        title: 'Dragon Slayer',
        description: 'Defeat 1 Dragon',
        reward: {coin: 15, item: {name: 'Sapphire Ring', description: 'brilliant blue ring with flecks of yellow across the surface', attack: 5, health: 5, rarity: 3, price: 35, imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_51.png'
        }},
        monster: {name: 'Dragon', currentHealth: 40, maxHealth: 40, attack: 12, imageUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/dragon.gif', movingUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/dragon-moving.gif'},
        timeFrame: 2,
        text: 'Seven years it has been, seven years since we secured our lands and we could live in peace. But now they are back and they are stronger than ever. Hero, we will need your help to get rid of the Dragon.'
    }
]

export default questData;