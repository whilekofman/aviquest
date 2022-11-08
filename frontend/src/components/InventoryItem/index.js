import './InventoryItem.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/user';

const InventoryItem = (props) => {

    const user = useSelector(state => state.session.user);
    let {equipment, items, _id, maxHealth, attack, currentHealth } = user;
    const dispatch = useDispatch();
    const {item} = props;

    const equipItem = () => {
        let index;
        if (equipment.length < 4) {
            index = items.indexOf(item);
            items.splice(index, 1);
            equipment.push(item);
        } else {
            items.push(equipment[0]);
            equipment.shift();
            index = items.indexOf(item);
            items.splice(index,1);
            equipment.push(item);
        }
        
        let totalAttack = 5;
        equipment.forEach((item) => {
            totalAttack += item.attack;
        })

        let totalHp = 50;
        let damage = maxHealth - currentHealth;

        equipment.forEach((item) => {
            totalHp += item.health;
        })

        currentHealth = totalHp - damage;
        if (currentHealth > totalHp) currentHealth = totalHp;
        
        dispatch(updateUser({
            equipment,
            items,
            attack:totalAttack,
            maxHealth:totalHp,
            currentHealth:currentHealth,
            _id
        }));

    }

    let popUpHealth = `HP: ${item.health}`;
    let popUpAttack = `ATK: ${item.attack}`;

    if (item.health < 1 ) popUpHealth = '';
    if (item.attack < 1 ) popUpAttack = '';

    return (
        <div className='inventory-item-div'
        onClick={equipItem}
        >
            <img className='inventory-item' src={item.imageUrl} alt="" /> 
            <p className='inventory-popup'>
            {item.name} <br />
            {popUpHealth + ' ' + popUpAttack }
            </p>
        </div>
    );
}
 
export default InventoryItem;