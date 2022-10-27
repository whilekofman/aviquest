import './EquipmentBar.css'
import EquipmentItem from '../EquipmentItem';
import { useSelector } from 'react-redux';

const EquipmentBar = () => {
    const user = useSelector(({session}) => session.user);

    return (
        <div className='equipment-list-background'>
            <div className='equipment-list'>
                {user.equipment.map((item) => (
                    <EquipmentItem
                    key={item.name}
                    item={item}
                    user={user}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default EquipmentBar;