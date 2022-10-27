import './InventoryItem.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/user';
import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';

const InventoryItem = (props) => {

    const user = useSelector(state => state.session.user);
    let {attack, coins, currentHealth, email, equipment, items, maxHealth, _id } = user;
    const dispatch = useDispatch();
    const {item} = props;
    // const [items, setItems] = useState(items);

    const equipItem = () => {
<<<<<<< HEAD
        if (user.equipment.length < 4) {
            user.equipment.push(item);
=======
        if (equipment.length < 4) {
            let index = items.indexOf(item);
            items.splice(index, 1);
            equipment.push(item);
>>>>>>> equiping
        } else {
            equipment.push(item);
            items.push(equipment[0]);
            equipment.splice(0,1);
            let index = items.indexOf(item);
            items.splice(index,1);
            // let removedItem = equipment[0];
        }
        dispatch(updateUser({
            attack,
            coins,
            currentHealth,
            email,
            equipment,
            items,
            maxHealth,
            _id
        }));
        dispatch(sessionActions.getCurrentUser());
    }

    return (
        <div className='inventory-item-div'
        onClick={equipItem}
        >
            <img className='inventory-item' src={item.imageUrl} alt="" /> 
            <p className='inventory-popup'>
            {item.name} <br />
            { `HP: ${item.health} ATK: ${item.attack}` }
            </p>
        </div>
    );
}
 
export default InventoryItem;