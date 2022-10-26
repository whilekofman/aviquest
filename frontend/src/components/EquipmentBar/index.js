import './EquipmentBar.css'
import EquipmentItem from '../EquipmentItem';
import { useSelector } from 'react-redux';

const seedItems = [
    {name: 'Beginner Sword', 
    description: 'The blade itself is fairly simple. No markings can be found, the blade needs no decorations, it only needs to be strong and sharp.', 
    attack: 5, 
    health: 0,
    rarity: 1,
    price: 5, 
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item__01.png'
    },
    {name: 'Scale Armor', 
    description: 'The breastplate is made from many layers of smaller metal pieces, mimicking the scales of a fish. It covers everything from the neck down and ending at the groin.', 
    attack: 0,
    health: 20, 
    rarity: 3, 
    price: 25,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_43.png'},
    {name: 'Maple Long Sword', 
    description: 'The blade is broken into several pieces, currently has a blunt edge, and has no marks or engravings.It has a practical guard, a leather-bound grip, and a pommel decorated with skulls.It is very heavy, is well balanced and is not to be underestimated.The scabbard is made of wood with steel trimmings.', 
    attack: 7, 
    health: 0, 
    rarity: 2, 
    price: 15,
    imageUrl: 'https://aviquest-dev.s3.amazonaws.com/Items/Item_10.png'
    }
];

const EquipmentBar = () => {
    const user = useSelector(({session}) => session.user);

    return (
        <div className='equipment-list-background'>
            <div className='equipment-list'>
                {seedItems.map((item) => (
                    <EquipmentItem
                    key={item.name}
                    item={item}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default EquipmentBar;