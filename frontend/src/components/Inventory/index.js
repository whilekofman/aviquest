import './Inventory.css'
import InventoryItem from '../InventoryItem';
import EquipmentBar from '../EquipmentBar';
import { useSelector } from 'react-redux';

const Inventory = () => {

    const user = useSelector(({session}) => session.user);
    
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
                            {user.items.map((item) => (
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