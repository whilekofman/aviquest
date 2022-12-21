import './EquipmentItem.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../store/user';
import * as sessionActions from '../../store/session';
import { useEffect, useState } from 'react';



const EquipmentItem = ({item, user}) => {
    let timeout; 
    const [disabled, setDisabled] = useState(false);
    if (disabled) {
        timeout = setTimeout(() => {
            setDisabled(false);
        },1000);
    }
    clearTimeout(timeout);

    const dispatch = useDispatch();
    let {attack, coins, currentHealth, email, equipment, items, maxHealth, _id } = user;

    const unEquipItem = () => {
        if (equipment.length > 0 && items.length < 24 && !disabled) {
            items.push(item)
            const index = equipment.indexOf(item);
            equipment.splice(index, 1);
            setDisabled(true);

            // currentHealth = 50;
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
            //     {name: 'Javelin', 
            //     description: 'The knife-like, very blunt head is securely bound to the shaft with a simple metal ring.', 
            //     attack: 8, 
            //     health: 0, 
            //     rarity: 2, 
            //     price: 6,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__11.png'
            //     },
            //     {name: 'Iron Sheild', 
            //     description: 'Its clear this shield stood the tests of battle. Scores and scratches made by who knows what leave echos of both glory and death, but one this is for sure: theres no stopping now.', 
            //     attack: 0,
            //     health: 8, 
            //     rarity: 2, 
            //     price: 5,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_34.png'
            //     },
            //     {name: 'Iron Armor', 
            //     description: 'The upper arms are protected by squared, half covering rerebraces which sit nicely under the shoulderplates.', 
            //     attack: 0,
            //     health: 15, 
            //     rarity: 2, 
            //     price: 10,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_42.png'
            //     },
            //     {name: 'General Winged Helm', 
            //     description: 'A helm with adorned wings on the side, 2 sockets open for eyes, with no opening around the rest of the head.', 
            //     attack: 0,
            //     health: 12, 
            //     rarity: 3, 
            //     price: 20,
            //     imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_38.png'
            //     }
            // ]
        } else {
            return;
        }
        let damage = maxHealth - currentHealth;
        let totalHp = 50;
        let totalAttack = 5;

        equipment.forEach((item) => {
            totalHp += item.health;
        })
        equipment.forEach((item) => {
            totalAttack += item.attack;
        })

        if (currentHealth > totalHp) currentHealth = totalHp;

        currentHealth = totalHp - damage;
            
        dispatch(updateUser({
            equipment,
            items,
            maxHealth:totalHp,
            currentHealth,
            attack:totalAttack,
            _id
        }));
    }

    let popUpHealth = `HP: ${item.health}`;
    let popUpAttack = `ATK: ${item.attack}`;

    if (item.health < 1 ) popUpHealth = '';
    if (item.attack < 1 ) popUpAttack = '';

    return (
        <div className='equipment-item-div'
        onClick={unEquipItem}>
            <img className='equipment-item' src={item.imageUrl} alt="" />
            <p className='equipment-popup'>
            {item.name} <br />
            {popUpHealth + ' ' + popUpAttack }
            </p>
        </div>
    );
}
 
export default EquipmentItem;