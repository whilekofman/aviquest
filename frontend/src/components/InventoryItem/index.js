import './InventoryItem.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/user';
import { useEffect } from 'react';
import * as sessionActions from '../../store/session';

const InventoryItem = (props) => {

    const user = useSelector(state => state.session.user);
    let {attack, coins, currentHealth, email, equipment, items, maxHealth, _id } = user;
    const dispatch = useDispatch();
    const {item} = props;

    const equipItem = () => {
        if (equipment.length < 4) {
            let index = items.indexOf(item);
            items = items.splice(index, 1);
            equipment.push(item);
        } else {
            let removedItem = equipment[0];
            equipment = equipment.slice(1,4);
            items.push(removedItem);
            equipment.push(item);
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
        }))
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