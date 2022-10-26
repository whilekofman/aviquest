import './Inventory.css'
import InventoryItem from '../InventoryItem';
import EquipmentBar from '../EquipmentBar';

const seedItems = [
    {name: 'Beginner Sword', 
    description: 'The blade itself is fairly simple. No markings can be found, the blade needs no decorations, it only needs to be strong and sharp.', 
    attack: 5, 
    health: 0,
    rarity: 1,
    price: 5, 
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__01.png'
    },
    {name: 'Curved Sword', 
    description: 'A fairly short, thin, curved blade made of iron is held by a grip wrapped in low-cost, leather.', 
    attack: 5,
    health: 0, 
    rarity: 1, 
    price: 10,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__03.png'
    },
    {name: 'Maple Long Sword', 
    description: 'The blade is broken into several pieces, currently has a blunt edge, and has no marks or engravings.It has a practical guard, a leather-bound grip, and a pommel decorated with skulls.It is very heavy, is well balanced and is not to be underestimated.The scabbard is made of wood with steel trimmings.', 
    attack: 7, 
    health: 0, 
    rarity: 2, 
    price: 15,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_10.png'
    },
    {name: 'Iron Headed Spear', 
    description: 'It was created as a decoration. The knife-like, uneven head is bound to the shaft with a highly decorated metal sleeve. The 6ft/1.8m shaft is made of low quality ebony (dense, strong dark wood) and is elaborately engraved.', 
    attack: 6, 
    health: 0, 
    rarity: 2, 
    price: 6,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_04.png'
    },
    {name: 'Javelin', 
    description: 'The knife-like, very blunt head is securely bound to the shaft with a simple metal ring.', 
    attack: 8, 
    health: 0, 
    rarity: 2, 
    price: 6,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__11.png'
    },
    {name: 'Crystal Lance', 
    description: 'The triangular, exceptionally sharp head is securely bound to the shaft with a decorative ring.', 
    attack: 10, 
    health: 0, 
    rarity: 3, 
    price: 15,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__09.png'
    },
    {name: 'Wooden Bow', 
    description: 'This elegant flatbow has been admirably constructed of exceptional red elm. Its string is made from exceptional hemp, its a common material around these parts of the world.', 
    attack: 6, 
    health: 0, 
    rarity: 1, 
    price: 5,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__16.png'
    },
    {name: 'Juniper Bow', 
    description: 'This well-made recurve crossbow has been cleverly constructed of excellent juniper wood. Its string is made from deluxe silk, its a common material around these parts of the world.', 
    attack: 10, 
    health: 0, 
    rarity: 2, 
    price: 10,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__18.png'
    },
    {name: 'Iron Sheild', 
    description: 'Its clear this shield stood the tests of battle. Scores and scratches made by who knows what leave echos of both glory and death, but one this is for sure: theres no stopping now.', 
    attack: 0,
    health: 8, 
    rarity: 2, 
    price: 5,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_34.png'
    },
    {name: 'Gold Trimmed Sheild', 
    description: 'The shields edges are augmented with broad metal lining and have been decorated with decorative paintwork. Its center is decorated with complex metalwork and elaborate paintwork.', 
    attack: 0,
    health: 10, 
    rarity: 3, 
    price: 15,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_35.png'
    }
]

const Inventory = () => {
    return (
        <div className='inventory-modal'>
            <div className='inventory-border'>
                <div className='inventory-equipment'>
                    <h1>Aviquips</h1>
                    <EquipmentBar />
                </div>
                <div className='inventory-index'>
                    <h1>Inventory</h1>

                    <div className='inventory-list-background'>
                        <div className='inventory-list'>
                            {seedItems.map((item) => (
                                <InventoryItem 
                                key={item.name}
                                item={item}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Inventory;