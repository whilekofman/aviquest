import './EquipmentItem.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../store/user';
import * as sessionActions from '../../store/session';



const EquipmentItem = ({item, user}) => {
    const dispatch = useDispatch();
    let {attack, coins, currentHealth, email, equipment, items, maxHealth, _id } = user;

    const unEquipItem = () => {
        if (equipment.length > 0 && items.length < 24) {
            let unEquipptedItem = item;
            // console.log(items)
            // console.log(item)
            const index = equipment.indexOf(item);
            equipment.splice(index, 1)
            items.push(unEquipptedItem);
        } 
        else {
            return
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