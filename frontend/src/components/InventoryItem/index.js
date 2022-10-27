import './InventoryItem.css'
import { useSelector } from 'react-redux';

const InventoryItem = (props) => {

    const user = useSelector(state => state.session.user)

    const {item} = props;

    const equipItem = () => {
        if (user.equipment.length < 4) {
            user.equipment.push(item);
        } else {
            let removedItem = user.equipment[0];
            console.log(removedItem);
            user.equipment = user.equipment.slice(1,4);
            user.equipment.push(item);
        }
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