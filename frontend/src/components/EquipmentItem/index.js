import './EquipmentItem.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../store/user';
import * as sessionActions from '../../store/session';



const EquipmentItem = ({item, user}) => {
    const dispatch = useDispatch();
    let {attack, coins, currentHealth, email, equipment, items, maxHealth, _id } = user;

    const unEquipItem = () => {
        if (equipment.length > 0 && items.length < 24) {
            items.push(item)
            const index = equipment.indexOf(item);
            equipment.splice(index, 1);
            // equipment = [];
            // items = [
            //     {name: 'Beginner Sword', 
            //     description: 'The blade itself is fairly simple. No markings can be found, the blade needs no decorations, it only needs to be strong and sharp.', 
            //     attack: 5, 
            //     health: 0,
            //     rarity: 1,
            //     price: 5, 
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__01.png'
            //     },
            //     {name: 'Curved Sword', 
            //     description: 'A fairly short, thin, curved blade made of iron is held by a grip wrapped in low-cost, leather.', 
            //     attack: 5,
            //     health: 0, 
            //     rarity: 1, 
            //     price: 10,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__03.png'
            //     },
            //     {name: 'Maple Long Sword', 
            //     description: 'The blade is broken into several pieces, currently has a blunt edge, and has no marks or engravings.It has a practical guard, a leather-bound grip, and a pommel decorated with skulls.It is very heavy, is well balanced and is not to be underestimated.The scabbard is made of wood with steel trimmings.', 
            //     attack: 7, 
            //     health: 0, 
            //     rarity: 2, 
            //     price: 15,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_10.png'
            //     },
            //     {name: 'Iron Headed Spear', 
            //     description: 'It was created as a decoration. The knife-like, uneven head is bound to the shaft with a highly decorated metal sleeve. The 6ft/1.8m shaft is made of low quality ebony (dense, strong dark wood) and is elaborately engraved.', 
            //     attack: 6, 
            //     health: 0, 
            //     rarity: 2, 
            //     price: 6,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_04.png'
            //     },
            //     {name: 'Javelin', 
            //     description: 'The knife-like, very blunt head is securely bound to the shaft with a simple metal ring.', 
            //     attack: 8, 
            //     health: 0, 
            //     rarity: 2, 
            //     price: 6,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__11.png'
            //     },
            //     {name: 'Crystal Lance', 
            //     description: 'The triangular, exceptionally sharp head is securely bound to the shaft with a decorative ring.', 
            //     attack: 10, 
            //     health: 0, 
            //     rarity: 3, 
            //     price: 15,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__09.png'
            //     },
            //     {name: 'Wooden Bow', 
            //     description: 'This elegant flatbow has been admirably constructed of exceptional red elm. Its string is made from exceptional hemp, its a common material around these parts of the world.', 
            //     attack: 6, 
            //     health: 0, 
            //     rarity: 1, 
            //     price: 5,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__16.png'
            //     },
            //     {name: 'Juniper Bow', 
            //     description: 'This well-made recurve crossbow has been cleverly constructed of excellent juniper wood. Its string is made from deluxe silk, its a common material around these parts of the world.', 
            //     attack: 10, 
            //     health: 0, 
            //     rarity: 2, 
            //     price: 10,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__18.png'
            //     },
            //     {name: 'Iron Sheild', 
            //     description: 'Its clear this shield stood the tests of battle. Scores and scratches made by who knows what leave echos of both glory and death, but one this is for sure: theres no stopping now.', 
            //     attack: 0,
            //     health: 8, 
            //     rarity: 2, 
            //     price: 5,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_34.png'
            //     },
            //     {name: 'Gold Trimmed Sheild', 
            //     description: 'The shields edges are augmented with broad metal lining and have been decorated with decorative paintwork. Its center is decorated with complex metalwork and elaborate paintwork.', 
            //     attack: 0,
            //     health: 10, 
            //     rarity: 3, 
            //     price: 15,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_35.png'
            //     },
            //     {name: 'Iron Armor', 
            //     description: 'The upper arms are protected by squared, half covering rerebraces which sit nicely under the shoulderplates.', 
            //     attack: 0,
            //     health: 15, 
            //     rarity: 2, 
            //     price: 10,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_42.png'
            //     },
            //     {name: 'Scale Armor', 
            //     description: 'The breastplate is made from many layers of smaller metal pieces, mimicking the scales of a fish. It covers everything from the neck down and ending at the groin.', 
            //     attack: 0,
            //     health: 20, 
            //     rarity: 3, 
            //     price: 25,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_43.png'
            //     },
            //     {name: 'Infantry Helm', 
            //     description: 'A pointed helm with a squared, v-shaped opening leaving the eyes, nose and mouth exposed.', 
            //     attack: 0,
            //     health: 8, 
            //     rarity: 1, 
            //     price: 8,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_37.png'
            //     },
            //     {name: 'General Winged Helm', 
            //     description: 'A helm with adorned wings on the side, 2 sockets open for eyes, with no opening around the rest of the head.', 
            //     attack: 0,
            //     health: 12, 
            //     rarity: 3, 
            //     price: 20,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_38.png'
            //     },
            //     {name: 'Platinum Knife', 
            //     description: 'The exceptionally heavy 8 inch/20cm blade has a exceptionally sharp edge, and has delicate patterns etched across it. It has no guard, a diamond encrusted grip, and a square pommel. It has no scabbard.', 
            //     attack: 20,
            //     health: 0, 
            //     rarity: 3, 
            //     price: 25,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_01.png'
            //     }
            // ]
        } else {
            return;
        }
        dispatch(updateUser({
            equipment,
            items,
            _id
        }));
        // dispatch(sessionActions.getCurrentUser());
    }

    return (
        <div className='equipment-item-div'
        onClick={unEquipItem}>
            <img className='equipment-item' src={item.imageUrl} alt="" />
            <p className='equipment-popup'>
            {item.name} <br />
            {`HP: ${item.health} ATK: ${item.attack}` }
            </p>
        </div>
    );
}
 
export default EquipmentItem;