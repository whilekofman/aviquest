// import userAvitarURL from './RunningSprite.gif'
import userAvitarURL from '../StatusBar/RunningSprite.gif'
import questData from './quest_data'


const health1 = {
    maxHealth: 100,
    currentHealth: 92
}

const health2 = {
    maxHealth: 100,
    currentHealth: 19
}

const item1 = {
    id: 1,
    name: "Helmet",
    description: "helm",
    attack: 50,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_38.png',
    rarity: 4
}

const item2 = {
    id: 2,
    name: "Weapon",
    description: "weapon",
    attack: 50,
    imageUrl:'https://aviquest-dev.s3.amazonaws.com/Items/Item_10.png',
    rarity: 4
}
const item3 = {
    id: 3,
    name: "Armor",
    description: "armor",
    attack: 50,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_43.png',
    rarity: 4
}
const item4 = {
    id: 4,
    name: "Socks",
    description: "socks",
    attack: 50,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_51.png',
    rarity: 4
}

const equipment = [item1, item2, item3, item4]
const tasks = []
const items = []
const quest = {}

export const monster = {
    id:1,
    name: 'Roarmon',
    health: health2,
    monsterURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/45736226-4350-419f-acd8-d950e4a3c1c6/de9ited-2332eae4-a0ff-4966-915c-33735dfc7c37.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ1NzM2MjI2LTQzNTAtNDE5Zi1hY2Q4LWQ5NTBlNGEzYzFjNlwvZGU5aXRlZC0yMzMyZWFlNC1hMGZmLTQ5NjYtOTE1Yy0zMzczNWRmYzdjMzcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dRz9i0hMJMBCGVGMpux2cML4Sl5P3sxMmshAHIFU0iI'
}


export const user = {
    id: 1,
    username: 'Last Avitar Gang Aang', 
    email: 'aang@email.com',
    password: 'password1', 
    health: health1, 
    atk: 50, 
    points: 300,
    tasks: tasks,
    items: items,
    quest: quest,
    equipment: equipment,
    imageURL: userAvitarURL,
    quest: {
        id: 5,
        title: 'Kill the Trents',
        description: 'Defeat 5 Trents',
        reward: {coin: 5, item: {name: 'Wooden Bow', 
        description: 'This elegant flatbow has been admirably constructed of exceptional red elm. Its string is made from exceptional hemp, its a common material around these parts of the world.', attack: 6, health: 0, rarity: 1, price: 5, imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__16.png'
        }},
        monster: {name: 'Trent', health: health2, attack: 10, imageUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/trent.gif', movingUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/trent-moving.gif'},
        timeFrame: 4,
        text: 'As you can see these lands have been corrupted. For the longest time we didn not know what caused it, but now we do. The Trents are taking over the forest, we must stop them.'
    }
}

// export default user;