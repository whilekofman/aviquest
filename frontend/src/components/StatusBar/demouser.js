
const health1 = {
    maxhp: 100,
    currenthp: 1 
}

const health2 = {
    maxhp: 100,
    currenthp: 42 
}

const item1 = {
    id: 1,
    name: "Helmet",
    description: "helm",
    attack: 50,
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEfqwVHMEwOAYgCdkKdA8Y-mVT15rftF8iPKq0mfFWcCqYTSylb8D53shDOhPv0hh0SE&usqp=CAU',
    rarity: 4
}

const item2 = {
    id: 2,
    name: "Weapon",
    description: "weapon",
    attack: 50,
    imageURL:'https://w7.pngwing.com/pngs/1017/298/png-transparent-firearm-weapon-shotgun-rifle-ak-47-8-bit-ak47-video-game-assault-rifle.png',
    rarity: 4
}
const item3 = {
    id: 3,
    name: "Armor",
    description: "armor",
    attack: 50,
    imageURL: 'https://www.pngfind.com/pngs/m/132-1323937_symmetras-guns-png-download-speech-bubble-8-bit.png',
    rarity: 4
}
const item4 = {
    id: 4,
    name: "Socks",
    description: "socks",
    attack: 50,
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHEjg1wFZJRNr6_R6PZXRLCSEzIBqCgYg_w&usqp=CAU',
    rarity: 4
}

const equipment = [item1, item2, item3, item4]
const tasks = []
const items = []
const quest = {}

export const monster = {
    id:1,
    name: 'Roarmon',
    health: health2
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
}

// export default user;